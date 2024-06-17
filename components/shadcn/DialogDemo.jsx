import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import logoCalendar from "../../public/Img/icon/schedule.png";
import TableDemo from "./TableDemo";

function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger className="flex items-center gap-2 hover:text-green">
        <Image
          className="hover:opacity-70"
          src={logoCalendar}
          width={35}
          height={35}
          alt="what'sapp"
        />
        <span className="w-20 text-sm text-start">График работы</span>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader className="p-6">
          <TableDemo />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default DialogDemo;
