import { Dot } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  title: string;
  coverImage: string;
  startDate: string;
  endDate: string;
  status: string;
};

function TravelCard({ title, coverImage, startDate, endDate, status }: Props) {
  return (
    <Card className="max-w-70 p-0 gap-0 overflow-hidden">
      <CardContent className="p-0 h-40 overflow-hidden">
        <img src={coverImage} />
      </CardContent>
      <CardHeader className="p-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex items-center">
          {startDate} - {endDate} <Dot /> {status}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default TravelCard;
