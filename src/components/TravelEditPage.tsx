import TravelEditContent from "./TravelEditContent";
import TravelEditMap from "./TravelEditMap";

function TravelEditPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* md:grid grid-cols-3 */}
      <TravelEditContent />
      {/* <TravelEditMap /> */}
    </div>
  );
}

export default TravelEditPage;
