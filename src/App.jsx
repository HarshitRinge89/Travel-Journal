import Entry from "./Entry"
export default function App(){
  return (
    <>
    <header>
      <img src="https://files.softicons.com/download/toolbar-icons/vista-base-software-icons-2-by-icons-land/ico/Globe2.ico" alt="globe icon"/>
      <span>Travel journal</span>
    </header>
    <Entry
      country="Japan"
      title="Mount Fuji"
      description="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).
      Mount Fuji is the single most popular toursit site in Japan, for both Japanese & foreign tourists."
      date="12 Jan,2021 - 24 Jan,2021"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQhPSkVpbXhJZwTFBlAC92RGpRoaB8KqU6cLvOfv3rCg&s=10"
      loc="https://share.google/b1ux1oaNqm4KHqUA6"
    />
    <Entry
      country="Austrailia"
      title="Sydney Opera house"
      description="The Sydney Opera House is a multi-venue performing arts centre in Sydney.Located on the
      banks of the Sydney Harbour,it is often regarded as one of the 20th century's msot famous and distinctive buildings."
      date ="27 May,2021 - 8 Jun,2021"
      img="https://cdn-imgix.headout.com/tour/20072/TOUR-IMAGE/d85280d5-3c4f-4f54-bd7a-6fc5cc68597f-10732-sydney-sydney-and-bondi-tour-with-sydney-opera-house-tour-01.jpg"
      loc="https://maps.app.goo.gl/n4Wx2t32r4KNKSsz7"
    />
    <Entry
      country="Norway"
      title="Geirangerfjord"
      description="Geirangerfjorden or Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county,
       Norway. It is located entirely in Stranda Municipality. It is a 15-kilometre-long branch off the Sunnylvsfjorden,
       which itself is a branch off the Storfjorden."
      date="01 Oct,2021 - 18 Nov,2021"
      img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyOdVk6vxgrHz8UB_fLUyUvIX4E_dU5OuR9XEKwGvwLjtXa3wqVP9nIA8&s=10"
      loc="https://maps.app.goo.gl/xjg1TN99PKs3NFiw6"
    />
    </>
  )
}