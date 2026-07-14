import { Input } from '@/presentation/components/ui/input';
import { Search } from 'lucide-react';

export function SearchBar({
  placeholder = 'Buscar...',
  onChange,
  onSearch,
}: {
  placeholder?: string;
  onChange?: (val: string) => void;
  onSearch?: (val: string) => void;
}) {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        type="search"
        placeholder={placeholder}
        className="pl-8"
        onChange={(e) => {
          const value = e.target.value;
          onChange?.(value);
          onSearch?.(value);
        }}
      />
    </div>
  );
}
