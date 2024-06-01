import { getServerByName } from '@/dal/database/getServerByName';
import { fetchExternalServerData } from '@/dal/fetchExternalServerData';
import { createServer } from '@/dal/database/createServer';
import { SERVER_DATA_RESPONSE } from '@/utils/mocks/serverDataResponse';

type AddServerServicePayload = {
	name: string;
};

type AddServerServiceResponse =
	| { success: false; error: string }
	| { success: true };

export const addServer = async (
	payload: AddServerServicePayload
): Promise<AddServerServiceResponse> => {
	const server = await getServerByName(payload.name);

	if (server) {
		return {
			success: false,
			error: 'Podany serwer już istnieje',
		};
	}

	const response = await fetchServer(payload.name);

	if (!response.success) {
		return {
			success: false,
			error: response.message,
		};
	}

	if (!response.data.online) {
		return {
			success: false,
			error: 'Serwer nie istnieje lub jest offline',
		};
	}

	await createServer({
		name: payload.name,
		ip: response.data.ip,
		currentPlayers: response.data.players.online,
		maxPlayers: response.data.players.max,
		motdFirstLine:
			response.data.motd.clean.length > 0 ? response.data.motd.clean[0] : null,
		motdSecondLine:
			response.data.motd.clean.length > 1 ? response.data.motd.clean[1] : null,
		online: true,
		version: response.data.version,
		icon: response.data.icon,
	});

	return {
		success: true,
	};
};

async function fetchServer(name: string) {
	if (process.env.APP_ENV !== 'test') {
		return await fetchExternalServerData(name);
	}

	/* It's not possible to mock external api in server actions during e2e tests */
	return Promise.resolve(SERVER_DATA_RESPONSE);
}
