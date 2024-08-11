'use client';

import { useSearch } from '@/components/modules/servers/search/useSearch';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';

export const Search = () => {
	const { value, onChangeValue } = useSearch();

	return (
		<Label>
			<span className="sr-only">Wyszukaj serwer po nazwie</span>

			<Input
				type="search"
				name="name"
				placeholder="Wyszukaj po nazwie"
				value={value}
				onChange={onChangeValue}
			/>
		</Label>
	);
};
