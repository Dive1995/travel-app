import TravelEditContent from "./TravelEditContent";
import TravelEditMap from "./TravelEditMap";

function TravelEditPage() {
  return (
    <div className="md:grid grid-cols-3">
      <TravelEditContent />
      <TravelEditMap />
    </div>
  );
}

export default TravelEditPage;
