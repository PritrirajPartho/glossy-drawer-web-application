import {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const eventData = {
  upcomingEvents: [
    {
      id: 1,
      title: "Art Exhibition",
      date: "2023-10-15",
      location: "Art Gallery XYZ",
      description: "An upcoming art exhibition featuring various artists' works.",
      imageURL: "https://i.ibb.co/pzHqp1L/nature-exhibit.jpg"
    },
    {
      id: 2,
      title: "Drawing Workshop",
      date: "2023-11-05",
      location: "Community Center",
      description: "A workshop for aspiring artists to learn drawing techniques.",
      imageURL: "https://i.ibb.co/nQ02nx5/drawing-workshop-2-1024x1024.jpg"
    },
    {
      id: 3,
      title: "Music Concert",
      date: "2023-11-20",
      location: "City Music Hall",
      description: "A live music concert with popular bands and artists.",
      imageURL: "https://i.ibb.co/XCJ0nw4/R.jpg"
    },
    {
      id: 4,
      title: "Tech Conference",
      date: "2023-12-10",
      location: "Tech Center",
      description: "An upcoming conference on the latest technology trends.",
      imageURL: "https://i.ibb.co/Ld50zCP/virtual-meeting-online-meetings-virtual-meeting-software-virtual-meeting-room-meeting-apps-768x511.jpg"
    },
    {
      id: 5,
      title: "Food Festival",
      date: "2023-12-25",
      location: "Downtown Food Park",
      description: "A festival showcasing a variety of delicious cuisines.",
      imageURL: "https://i.ibb.co/kGk7BWb/OIP.jpg"
    },
  ],
  oldEvents: [
    {
      id: 6,
      title: "Charity Art Auction",
      date: "2023-09-20",
      location: "Charity Foundation HQ",
      description: "A successful charity art auction for a noble cause.",
      imageURL: "https://i.ibb.co/MDjC5Kv/R.jpg"
    },
    {
      id: 7,
      title: "Art Festival 2022",
      date: "2022-07-30",
      location: "City Park",
      description: "Recap of the art festival held in the summer of 2022.",
      imageURL: "https://i.ibb.co/fph81TF/Hoi-An-Lantern-Festival-2020-2021-Hoi-An-Private-Car.webp"
    },
    {
      id: 8,
      title: "Film Screening",
      date: "2022-09-15",
      location: "Cinema Center",
      description: "A screening of classic and independent films.",
      imageURL: "https://i.ibb.co/68yvWMz/OIP.jpg"
    },
    {
      id: 9,
      title: "Literary Conference",
      date: "2022-10-10",
      location: "Library Hall",
      description: "A conference celebrating literature and authors.",
      imageURL: "https://i.ibb.co/0MnRs0H/R.jpg"
    },
    {
      id: 10,
      title: "Sports Tournament",
      date: "2022-11-20",
      location: "Sports Arena",
      description: "A recap of a competitive sports tournament.",
      imageURL: "https://i.ibb.co/v1Q7vWQ/2b1beee51cc007802dda6aa6867ae09b.jpg"
    },
  ]
};


const Events = () => {
  const [activeTab, setActiveTab] = useState('upcoming'); 

  const sectionStyle = {
    opacity: 60,
    backgroundImage: 'url("https://i.ibb.co/cNX3Z90/R.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
  };

  return (
    <div>
      <div className='w-full h-80 object-contain' style={sectionStyle}></div>
      <div className="container mx-auto p-4">
        <Tabs className="mt-4">
          
          <TabList className="flex justify-center space-x-4 ">
            <Tab className={`py-2 px-4 text-xl hover:text-blue-500 cursor-pointer text-black ${activeTab === 'upcoming' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('upcoming')}>
              Upcoming Events
            </Tab>
            <Tab className={`py-2 px-4 text-xl hover:text-blue-500 cursor-pointer text-black ${activeTab === 'old' ? 'border-b-2 border-blue-500' : ''}`} onClick={() => setActiveTab('old')}>
              Old Events
            </Tab>
          </TabList>

          <TabPanel className="py-4">
            {activeTab === 'upcoming' ? (
              <div>
              
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                  {eventData.upcomingEvents.map(event => (
                    <div key={event.id} className="rounded-lg overflow-hidden shadow-lg">
                      <img src={event.imageURL} alt={event.title} className="w-full h-48 object-cover" />
                      <div className="px-6 py-4">
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">Date: {event.date}</p>
                        <p className="text-sm text-gray-600 mb-2">Location: {event.location}</p>
                        <p className="text-sm">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </TabPanel>

          <TabPanel className="py-4">
            {activeTab === 'old' ? (
              <div>
               
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                  {eventData.oldEvents.map(event => (
                    <div key={event.id} className="rounded-lg overflow-hidden shadow-lg">
                      <img src={event.imageURL} alt={event.title} className="w-full h-48 object-cover" />
                      <div className="px-6 py-4">
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">Date: {event.date}</p>
                        <p className="text-sm text-gray-600 mb-2">Location: {event.location}</p>
                        <p className="text-sm">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Events;
