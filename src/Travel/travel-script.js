// for footer
document.addEventListener("DOMContentLoaded", () => {
  [
      { id: "footer", url: "../../components/footer.html" },
      { id: "header", url: "../../components/header.html" },
  ].forEach(({ id, url }) =>
      fetch(url)
          .then((res) => res.text())
          .then((data) => (document.getElementById(id).innerHTML = data))
          .catch((err) => console.error(`Error loading ${url}:`, err))
  );
});
// end header and footer 


// date and time 
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
const toDay = String((currentDate.getDate())).padStart(2, '0');
const returnDay = String((currentDate.getDate()+5)).padStart(2, '0'); 
// Set the input value to today's date (YYYY-MM-DD format)
document.getElementById('toDayDate').value = `${year}-${month}-${toDay}`;
document.getElementById('returnDayDate').value = `${year}-${month}-${returnDay}`;







// for text

let travelFooterUpText=`
  <div>
    <style>
      div p{
        font-size: 10px;
      }
    </style>
    

    <p>If seeing the world is on your bucket list, then you can start your journey by booking flight tickets online.
      Here are a few FAQs that can help you clear any possible doubt you might have about booking flight tickets online
      with Flipkart:

      Q. Why should I book flight tickets online?

      Ans: Online air ticket booking has many benefits. You can compare the airfares offered by different airlines and
      of different dates with just a few clicks. You can also check in-flight facilities, flight details, and
      cancellation policies for each flight. You also get multiple payment options to choose and pay as you wish.

      Q. Why should I book flights from Flipkart Flights?

      Ans: Booking through Flipkart Flights is an easy process and requires just a few clicks. Flipkart also offers
      cheap flights at great discounts using coupon codes, such as NEW12 and FLY600. There are also instant EMI options
      as well as offers on credit/debit card payments to make your flight booking budget-friendly and hassle-free.

      Q. How can I book flight tickets online?

      Ans: With a few clicks and in a few seconds, you can book domestic and/or international flight tickets online.
      Just select the route, date of travel, number of travellers, and class, then click on the search button. Then,
      select your flight, click on the book option, add travellers' details, add coupon code to avail discounts, and
      checkout using your card to avail more bank offers.

      Q. When should I book to get the best flight ticket prices?

      Ans: For domestic flight tickets, if you want to avail the best prices, then it is recommended that you should
      book the tickets at least three to four weeks prior to the date of travel. For the best international flight
      ticket prices, you should book seven to eight weeks prior to the date of travel.

      Q. Can I get a full refund on my cancelled ticket?

      Ans: There is cancellation protection insurance available at a nominal price that you can buy while booking your
      flight tickets on Flipkart. Under this insurance policy, you can get a full refund if you cancel your flight for
      any reason. You can cancel your ticket up to 24 hours prior to travel, and full refund is available on domestic
      tickets. Check the full policy here T&C page.

      Q. Should I book a seat for my infant?

      Ans: Legally, a child under two years of age does not need a seat. But, if you prefer then you can book a seat for
      your infant. The airfare for a child below two years and for above two years are different as the children above
      two years of age need a seat for flying.

      Q. What are the classes for which flight tickets can be booked?

      Ans: Most airlines offer Economy and Business Class. Some also have Premium Economy class.

      Q. How many seats can I book in a single booking?

      Ans: On Flipkart, you can book up to nine tickets in a single booking.

      Q. How much time does it take to get my ticket confirmation?

      Ans: Within a few minutes, you receive a confirmation email on your email ID that you provided while booking the
      ticket.

      Q. Can I book tickets for another person using my account?

      Ans: Yes, you can. At the time of booking, enter the correct details of the passenger.

      Q. How can I get a boarding pass for a booked ticket?

      Ans: By showing the ticket confirmation email at the airport's check-in counter you can collect your boarding pass
      from the airline representatives. Or, you can do a web check-in on the airline's website and take a printout of
      the boarding pass.

      Q. Do I have to show ID proof when I check-in?

      Ans: Yes, you need to show a valid ID card, such as your PAN card or driver's licence, at the time of checking in
      at the airport. You also need to show your passport for international travel.

      Q. How much baggage can I carry on a flight?

      Ans: Different airlines have different baggage allowance policies. So, check with the airline operators to know
      the exact baggage allowance and restrictions for your cabin baggage and checked-in bags.

      Q. Can I pay later for my flight ticket bookings?

      Ans: No, at present no such service is available on Flipkart. To successfully book a flight ticket, you need to
      pay the full amount. However, we do have an EMI option. </p>


    <p>Flight Ticket Booking on Flipkart</p>
    <p>Have you been eyeing a beautiful destination, but not doing the plane tickets to reach there, as they are
      expensive? Do you want to skip taking help from different people and book your plane tickets at low prices? If
      yes, then you can do your flight ticket booking on Flipkart at surprisingly affordable prices. You can get your
      tickets for domestic flights and international flights at prices that are amazingly cheap and pocket-friendly.
      Hence, you won't have to worry about not being able to visit your desired destination due to financial reasons.
      Also, you won't have to call anyone and take help to go ahead with the ticket booking process. The site has an
      easy-to-use interface. So you can navigate your way through it, and by the time you are done with your booking,
      you will move a day closer to your travel date. You can open the site and check the plane ticket prices for the
      domestic or international destinations that you want to visit. </p>

    <p>Do Flight Bookings Online</p>
    <p>Gone are the days when only the rich could afford flight tickets. Now, not only the price of a plane ticket is
      affordable, but the flight booking procedure is easy too. So, if you are planning a vacation and you are looking
      for a site from where you can book cheap flight tickets easily, then you have found the correct destination.
      Flipkart, apart from letting you buy products at reasonable prices, also takes care of your travel needs. Thereby,
      any time you want to book a flight, you can check the ticket for your destination on the site. You can even book
      overseas flight tickets. The plane tickets are available at modest prices, so you won't have to shell out a huge
      amount of money. The site has also curated several options for you.</p>

    <p>Book Cheap Flights</p>
    <p>If you have never landed on the site's page before, and it is your first time, then do not worry. We will help
      you navigate through the categories so that you can do your flight bookings in no time. You can check the options
      below:

      Top Deals: In the “Top Deals” section, you will find several flight offers. By using the best flight offers that
      are listed out by the site, you will be able to save money.

      Travel Checklist: Amongst other things, the “Travel Checklist” category will help you proceed with the web
      check-in process. So, if you do not want to go through the hassle of waiting in long queues at the airport to get
      your boarding pass, then you can do your web check-in at home. However, do not forget to check the options and
      facilities that are available through web check-in for the flight which you have booked.

      Your Safety is Important to Us: If you are travelling by plane for the first time in your life, then you must be
      very excited about the journey. Before embarking on it, we suggest you check the section “Your Safety is Important
      to Us” on the site to know more about the safety guidelines and all such things.

      Best Deals: You can check the section “Best Deals” if you want more profit while doing your flight ticket
      bookings. For example, if you are a loyal customer of the site and you have collected a lot of SuperCoins through
      your purchases on the site, then you can use those to book your tickets. If you have to travel somewhere urgently
      and you are running short of cash, then also the site lets you book tickets. You can check the EMI option in this
      section and learn more about it.

      Book Flights on Flipkart

      Now, that you are aware of the options, you can go ahead and check the listed deals and all the other options on
      the site. Once you check them through and through, you can enter your destination details and then do your flight
      bookings in no time. </p>

    <p>Hassle-free Flight Ticket Booking</p>
    <p>You can now do your flight ticket booking for various destinations, both, domestic and international, at prices
      that are affordable and cheap. To start with your booking process, you can open the Flipkart site. Do not worry,
      as you will be thoroughly guided throughout the site's easy booking procedure. Once you start, your tickets will
      be done and confirmed in no time. So, you won't have to rely on someone else, or any expensive third-party agent
      to help you book your plane tickets. You will also end up saving money while booking on the site.

      There are various destinations for which you can book your flights. So, be it Goa, Dubai, Berlin, Paris,
      Chandigarh, and Mumbai, you can book your flight tickets to these places, and more such places at low prices. You
      can choose the options as per your itinerary and book the tickets for the airline whose departure and return
      timings fit your schedule. </p>

    <p>Cheap Air Travel</p>
    <p>
      As we mentioned above, your flight ticket booking procedure will be hassle-free, as the site will help you in each step. This means, even if you are booking your plane tickets for the first time, you won't face any issue. You can enter your destination details and your dates to check which airlines are available. Once those steps are done, you will get a list of all the airlines available for the dates that you specified. You can compare the prices between the airlines, and then do your air tickets accordingly. 

To make your flight booking experience even more fruitful, you can apply the various flight offers that have been made available for you by the site. The flight ticket offer codes are available for multiple airlines, so if you have any particular airline in mind, you can book the ticket of that airline without spending a fortune. You can apply the discount and offer codes and see the prices for the tickets dropping further. While booking your cheap flight tickets, you can, at the same time, check the ticket prices for several picturesque international destinations too. And, if you get cheap air tickets for places like Amsterdam or Prague, then you can book the tickets for those places too. 

Book Affordable Plane Tickets on Flipkart

Now that you know how to go about with your flight ticket booking, do not wait any longer to do your online flight booking for your desired destination. You can check the dates and then go ahead with the bookings. If you keep waiting, the chances for getting a flight on your desired day, time, and date might become bleak. So, do not wait any further if you have already decided a place where you want to travel. You will end up making good memories and also feel refreshed. This will help you stay happy too. Even if you are checking a round-trip ticket for a business trip, then also you can make the most out of that trip. You can take a few hours off from your meetings and explore the place and the local food. Once done, you will come back home feeling happy, satisfied, and rejuvenated. 

Book Cheap Plane Tickets 
Now that you are aware of where to procure your air tickets for cheap, we would like to help you with the process a bit more. If you are doing your flight ticket booking for the first time, then you can check the steps below for a fruitful and easy experience:
Book Cheap Air Tickets for a Round-trip or a One-way Trip: You can start your flight booking procedure by telling the site whether you want to book your flight tickets for a round-trip or a one-way trip. If you want to save more money by booking cheap flight tickets, we suggest you select the round-trip option. However, if you are not sure of the return date from your destination, then you can choose the one-way option. 
Select the Time: If you want to search for flights that will depart in the early morning or late at night on your desired date of travel, then you can do so by selecting an option from the list of choices which are given on the left side of the page. 
Book Tickets for Non-stop Flights: If you want to book a ticket from an airline that will drop you to your destination without halting at another location, then you can select the "Non-stop" option from the left side of the page. 
Book Refundable Tickets: If, while booking your ticket, you are not 100% sure that you will be able to travel on the date which you have specified, then you can select the "Refundable" option from the left side of the page. So, even if you cancel your ticket before the date of flying, you will get your money back. However, you must check the terms and conditions to know more about the process. 
Apply Flight Offer Codes: The site has listed a plethora of flight ticket offer codes. You can select them and apply while booking your tickets to help you save more money. 
Easy Booking
You can check the options mentioned-above while doing your online flight booking. Once everything is sorted, you can proceed with the flight ticket booking procedure on the site without any hassle. 
Flight Ticket Booking Made Convenient
We all want to travel, both, in and out of the country - don't we? But, we blame the lack of those extra bucks in our bank accounts as well as the price of plane tickets for our inability to go out and see the world. However, if you changed a few things about how you plan your trips then you could visit all those dream travel destinations that you've been talking about to your buddies at work. Do we have a secret recipe that will make you rich? No. After all, it is impossible for one to become rich overnight (unless you inherited parents' fortune as Bruce Wayne did). What we have here is a means to keep the wanderlust within you alive without having you to burn a hole in your pocket - online flight ticket booking. You may have seen a lot of famous travellers on social media sites visiting 100s of countries. But, do you think that they'd have made it this far if they kept spending a king's ransom on plane tickets? Probably not. One of the major factors that's responsible for all the success that famous travellers have is achieved is their smartness. But, how are they smarter than amateur travellers? Well, their ability to think and plan things in advance is what separates them from the ‘wannabes'. Want to travel smart? Well, then try and follow some of the tips and tricks that we have mentioned below:

Flight Ticket Booking Made Convenient
We all want to travel, both, in and out of the country - don't we? But, we blame the lack of those extra bucks in our bank accounts as well as the price of plane tickets for our inability to go out and see the world. However, if you changed a few things about how you plan your trips then you could visit all those dream travel destinations that you've been talking about to your buddies at work. Do we have a secret recipe that will make you rich? No. After all, it is impossible for one to become rich overnight (unless you inherited parents' fortune as Bruce Wayne did). What we have here is a means to keep the wanderlust within you alive without having you to burn a hole in your pocket - online flight ticket booking. You may have seen a lot of famous travellers on social media sites visiting 100s of countries. But, do you think that they'd have made it this far if they kept spending a king's ransom on plane tickets? Probably not. One of the major factors that's responsible for all the success that famous travellers have is achieved is their smartness. But, how are they smarter than amateur travellers? Well, their ability to think and plan things in advance is what separates them from the ‘wannabes'. Want to travel smart? Well, then try and follow some of the tips and tricks that we have mentioned below:

Try Online Flight Ticket Booking

Some of you might resort to your ‘trusted' agent when it comes to booking plane tickets. Now, even though a lot of you wouldn't agree with us, you should know that there are a lot of travel agents who charge you with some hidden fees in order to make a profit. Sounds unfair - right? But, you can easily avoid paying the hidden fees by booking plane tickets online. By using online flight booking, you can easily check and compare different flight ticket offers. This way, you can ensure that you aren't overspending.

Book Your Flights in Advance

If you want to travel on a budget, then you should always aim for cheap flight tickets. But, aren't all tickets for flights supposed to be expensive? No, not if you book them in advance. You can easily save hundreds, or even thousands of rupees, if you book tickets in advance as flight ticket booking sites offer massive discounts when you do so. Quite an easy way to get cheap air tickets - right? Yes, flights offer you this as well.

Now, the process of online flight ticket booking may sound complicated, but it isn't really. You just need a device, such as a smartphone, through which you can get on the Internet and book a ticket online.

Try Online Flight Ticket Booking
Some of you might resort to your ‘trusted' agent when it comes to booking plane tickets. Now, even though a lot of you wouldn't agree with us, you should know that there are a lot of travel agents who charge you with some hidden fees in order to make a profit. Sounds unfair - right? But, you can easily avoid paying the hidden fees by booking plane tickets online. By using online flight booking, you can easily check and compare different flight ticket offers. This way, you can ensure that you aren't overspending.

Book Your Flights in Advance
If you want to travel on a budget, then you should always aim for cheap flight tickets. But, aren't all tickets for flights supposed to be expensive? No, not if you book them in advance. You can easily save hundreds, or even thousands of rupees, if you book tickets in advance as flight ticket booking sites offer massive discounts when you do so. Quite an easy way to get cheap air tickets - right? Yes, flights offer you this as well.

Now, the process of online flight ticket booking may sound complicated, but it isn't really. You just need a device, such as a smartphone, through which you can get on the Internet and book a ticket online.
    </p>

  </div>
`
document.getElementById("travelFooterUpText").innerHTML=travelFooterUpText



// header search bar search function 
setTimeout(() => {  
  const inputField_h = document.getElementById('inputField_h');
  const fetchButton_h = document.getElementById('fetchButton_h');

  function fetchValue_h() {
      const value = inputField_h.value;
      window.location.href = `?query=${value}`;
  }
 
  fetchButton_h.addEventListener('click', fetchValue_h);

  inputField_h.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
          fetchValue_h();
      }
  });


}, 500);

//end 