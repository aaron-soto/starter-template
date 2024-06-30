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
    <Select>
      <SelectTrigger className="w-[80px]">
        <SelectValue placeholder="en" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="en">En</SelectItem>
        <SelectItem value="es">Es</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
