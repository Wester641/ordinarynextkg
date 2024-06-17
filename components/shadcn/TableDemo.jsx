import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
function TableDemo() {
  return (
    <Table>
      <TableCaption className="text-sm">
        * Время указано для региона: Кыргызстан, Бишкек{" "}
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="font-semibold w-[100px]">День</TableHead>
          <TableHead className="font-semibold">Время работы</TableHead>
          <TableHead className="font-semibold">Перерыв</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Понедельник</TableCell>
          <TableCell>09:30 - 17:30</TableCell>
          <TableCell>13:00 - 14:00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Вторник</TableCell>
          <TableCell>09:30 - 17:30</TableCell>
          <TableCell>13:00 - 14:00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Среда</TableCell>
          <TableCell>09:30 - 17:30</TableCell>
          <TableCell>13:00 - 14:00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Четверг</TableCell>
          <TableCell>09:30 - 17:30</TableCell>
          <TableCell>13:00 - 14:00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Пятница</TableCell>
          <TableCell>09:30 - 17:30</TableCell>
          <TableCell>13:00 - 14:00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Суббота</TableCell>
          <TableCell>09:30 - 17:30</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Воскресенье</TableCell>
          <TableCell>09:30 - 17:30</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default TableDemo;
