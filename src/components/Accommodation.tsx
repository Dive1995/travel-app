import { Building, DollarSign, MapPin, Paperclip, Plus } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function Accommodation() {
  return (
    <section className="my-2">
      <h2 className="text-lg font-semibold">Accommodation</h2>
      {/*TODO: Add Accommodation btn */}
      {/* Opens a form in a model, with properties: name, location, startDate, endDate, cost*/}
      {/* should have a search field for name */}
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">
            <Plus /> Add
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Accommodation</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                <Building />
              </Label>
              <Input id="name" placeholder="Name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                <MapPin />
              </Label>
              <Input
                id="username"
                placeholder="Address"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                <DollarSign />
              </Label>
              <Input id="username" placeholder="Cost" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                <Paperclip />
              </Label>
              <Input type="file" id="username" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button className="w-full" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* [List] show name, dates, cost */}
    </section>
  );
}

export default Accommodation;
