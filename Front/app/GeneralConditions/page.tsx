import React from "react";
import Link from "next/link"

const GeneralConditions = () => {
    return (<div >

        <div className="border-cyan-600 shadow-sm mb-14 border-8 w-[1200px] h-[800px] ml-40 mr-60 mt-20 text-justify p-10 "> 
        <h1 className="font-bold text-2xl pb-3 mt-10 ml-80 mb-10">Terms of Service for Tunisien Users</h1>
        <p className=" ">
As a consumer who resides in Tunisia you can access the Tunisian Commission’s online dispute resolution platform here: <span className="text-blue-500">https://ec.tunisianCO.tn/consumers/odr.</span> 
<br/>Please note that <span className="font-bold">RentaVilla</span> is not committed nor obliged to use an alternative dispute resolution entity to resolve disputes with consumers. 


Section 24 of these Terms contains an arbitration agreement and class action waiver that applies to all claims brought against RentaVilla in Tunisia. Please read them carefully.

<br/>Last Updated: 08 January 2024

Thank you for using <span className="font-bold">RentaVilla</span>!
<br/>
These Terms of Service for Tunisian Users are a binding legal agreement between you and RentaVilla that govern your right to use the websites, applications, and other offerings from RentaVilla (collectively, the “RentaVilla Platform”).
<br/>
 When used in these Terms,  <span className="font-bold">“RentaVilla,” “we,” “us,” or “our” </span>refers to the RentaVilla entity set out on Schedule 1 with whom you are contracting.
 <br/>

The <span className="font-bold">RentaVilla</span>  Platform offers an online venue that enables users (“Members”) to publish, offer, search for, and book services. 
<br/>
Members who publish and offer services are “Hosts” and Members who search for, book, or use services are “Guests.”
<br/>
 Hosts offer accommodations (“Accommodations”), activities, excursions and events (“Experiences”), and a variety of travel and other services (collectively, “Host Services,” and each Host Service offering, a “Listing”). 
<br/>

You must register an account to access and use many features of the RentaVilla Platform, and must keep your account information accurate. As the provider of the  <span className="font-bold"> RentaVilla</span> Platform, RentaVilla does not own, control, offer or manage any Listings, Host Services, or tourism services.<span className="font-bold"> RentaVilla </span> is not a party to the contracts entered into directly between Hosts and Guests, nor is RentaVilla a real estate broker, travel agency, insurer or an organiser or retailer of travel packages under Directive 2015/2302.
<br/>
 RentaVilla is not acting as an agent in any capacity for any Member, except as specified in the Payments Terms of Service (“Payment Terms”). To learn more about <span className="font-bold"> RentaVilla</span>’s role see Section 16.
 <br/>

We maintain other terms and policies that supplement these Terms like our Privacy Policy, which describes our collection and use of personal data, and our Payments Terms, which govern any payment services provided to Members by the <span className="font-bold"> RentaVilla </span> payment entities (collectively "RentaVilla Payments").
<br/>

If you Host, you are responsible for understanding and complying with all laws, rules, regulations and contracts with third parties that apply to your Host Services.
        </p></div>
        <button className="bg-orange-950 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-[700px] mb-20 bottom-0 h-10"><Link href='/home'>Go Back</Link></button>
    </div>)
    
}

export default GeneralConditions;