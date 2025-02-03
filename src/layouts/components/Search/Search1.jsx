import { Calculator, Calendar, CreditCard, Settings, Smile, User } from 'lucide-react';

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from '@/components/ui/command';
import { useState } from 'react';
import AccountItem from '../Account/AccountItem';

function Search() {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <Command
            className={`flex relative w-[361px] h-[44px] bg-[rgba(22,24,35,0.06)] 
            rounded-3xl border-[1px] pl-4 
            ${isFocused ? 'border-[rgba(22,24,35,0.75)]' : 'border-transparent'}`}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            tabIndex={-1}
        >
            <CommandInput className="pr-10 text-black " placeholder="Search accounts and videos" />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem>ACCCCCCCCCCCCCCCCCC</CommandItem>
                    <CommandItem>ACCCCCCCCCCCCCCCCCC</CommandItem>
                    <CommandItem>ACCCCCCCCCCCCCCCCCC</CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>ACCCCCCCCCCCCCCCCCC</CommandItem>
                    <CommandItem>ACCCCCCCCCCCCCCCCCC</CommandItem>
                    <CommandItem>ACCCCCCCCCCCCCCCCCC</CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    );
}

export default Search;
