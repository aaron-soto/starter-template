import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select';
import { SelectValue } from '@radix-ui/react-select';
import React from 'react';

const LanguageSwitcher = () => {
  return (
    <Select defaultValue="EN">
      <SelectTrigger className="w-[80px] text-xs">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="EN" className="text-xs">
          <span className="mr-2">EN</span>
        </SelectItem>
        <SelectItem value="ES" className="text-xs">
          ES
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
