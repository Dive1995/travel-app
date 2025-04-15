import TravelCard from "./TravelCard";
import CreateTripButton from "./CreateTripButton";

type Trip = {
  title: string;
  coverImage: string;
  startDate: string;
  endDate: string;
  status: string;
};

const recentTrips: Trip[] = [
  {
    title: "Visit to Munich",
    coverImage:
      "https://images.unsplash.com/photo-1705075833771-1f5e5b99ddeb?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    startDate: "01.05.2025",
    endDate: "04.05.2025",
    status: "Done",
  },
  {
    title: "Visit to Berlin",
    coverImage:
      "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    startDate: "05.03.2025",
    endDate: "09.03.2025",
    status: "Done",
  },
];

function Home() {
  return (
    <main className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <section className="my-4 md:my-8">
        <CreateTripButton />
      </section>
      <section className="my-4">
        <h2 className="text-lg font-bold">Ongoing Plans</h2>
        <div className="my-4 flex gap-4">
          <TravelCard
            title="Visit to Nuremberg"
            status="Planning"
            coverImage="https://images.unsplash.com/photo-1590651639672-5f0178aa4812?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            startDate="15.04.2025"
            endDate="20.04.2025"
          />
        </div>
      </section>
      <section className="my-4 md:my-8">
        <h2 className="text-lg font-bold">Recent trips</h2>
        {/* List of trips */}
        <div className="my-4 flex gap-4">
          {recentTrips.map((visit) => (
            <TravelCard {...visit} />
          ))}
          {/* <Card className="max-w-70 p-0 gap-0 overflow-hidden">
            <CardContent className="p-0 h-40 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1705075833771-1f5e5b99ddeb?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </CardContent>
            <CardHeader className="p-4">
              <CardTitle>Visit to Münich</CardTitle>
              <CardDescription className="flex items-center">
                01.05 - 03.05 <Dot /> Done
              </CardDescription>
            </CardHeader>
          </Card> */}
        </div>
      </section>
    </main>
  );
}

export default Home;
