"use client";

import { useState } from "react";

const listings = [
  { price: "$925,000", address: "1847 Willow Crest Lane", place: "Vienna, VA 22182", beds: 4, baths: 3.5, sqft: "2,840", type: "Single Family", tone: "home-one" },
  { price: "$689,500", address: "420 Meridian Street, Unit 6", place: "Arlington, VA 22201", beds: 2, baths: 2, sqft: "1,316", type: "Condominium", tone: "home-two" },
  { price: "$1,175,000", address: "908 Meadowgate Drive", place: "McLean, VA 22101", beds: 5, baths: 4.5, sqft: "3,920", type: "Single Family", tone: "home-three" },
];

const listingDetails = {
  id: "VAFX2201846",
  yearBuilt: "2018",
  lot: "0.31 acres",
  parking: "2-car attached garage",
  hoa: "$148 / month",
  taxes: "$10,842 / year",
  cooling: "Central A/C",
  heating: "Forced air · Natural gas",
  schoolDistrict: "Fairfax County Public Schools",
  listingOffice: "Blue Oak Realty Group",
  listingContact: "703-555-0142 · listings@blueoak.example",
};

const stats = [
  ["17", "Active transactions", "5 closing this month"],
  ["08", "Active clients", "2 awaiting review"],
  ["12", "Listing updates", "Since yesterday"],
  ["04", "Compliance tasks", "1 due today"],
];

export default function Home() {
  const [view, setView] = useState<"public" | "professional">("public");
  const [saved, setSaved] = useState<number[]>([1]);
  const [selectedListing, setSelectedListing] = useState(0);
  const toggleSaved = (i: number) => setSaved((old) => old.includes(i) ? old.filter((x) => x !== i) : [...old, i]);
  const showListing = (i: number) => {
    setSelectedListing(i);
    window.setTimeout(() => document.getElementById("listing-detail")?.scrollIntoView({ behavior: "smooth" }), 0);
  };
  const featured = listings[selectedListing];

  return (
    <main>
      <div className="demo-bar"><span>STATIC REVIEW DEMO</span><p>Synthetic property data only · No MLS credentials, feed, or production data connected</p></div>
      <nav>
        <a className="brand" href="#top" aria-label="SAIN home"><span className="brand-mark">S</span><span>SAIN <b>REAL ESTATE</b></span></a>
        <div className="nav-links"><a href="#products">Products</a><a href="#properties">IDX demo</a><a href="#compliance">Data handling</a></div>
        <div className="view-toggle"><button className={view === "public" ? "active" : ""} onClick={() => setView("public")}>Public IDX demo</button><button className={view === "professional" ? "active" : ""} onClick={() => setView("professional")}>Back office demo</button></div>
      </nav>

      {view === "public" ? (
        <>
          <section className="hero" id="top">
            <div className="hero-copy"><span className="eyebrow">SAIN INDUSTRIES · VENDOR REVIEW</span><h1>Two products.<br/>Two controlled feeds.</h1><p>This static prototype demonstrates a proposed public IDX search product and a separately licensed private back-office product for authorized real estate professionals.</p><div className="hero-actions"><a className="primary" href="#properties">Review public IDX demo <span>→</span></a><button className="secondary" onClick={() => setView("professional")}>Review back office demo</button></div><div className="trust-row"><span>Synthetic data only</span><span>Separate licenses acknowledged</span><span>No AI data processing</span></div></div>
            <div className="hero-visual" aria-label="Abstract architectural illustration"><div className="sun"></div><div className="building b1"></div><div className="building b2"></div><div className="building b3"></div><div className="float-card"><span>MARKET PULSE</span><strong>Northern Virginia</strong><div><b>18</b> new listings <em>+8.4%</em></div></div></div>
          </section>

          <section className="product-split" id="products"><div className="section-head"><div><span className="eyebrow">PROPOSED DATA PRODUCTS</span><h2>Separate by license, feed, and purpose.</h2></div><p>SAIN acknowledges that these products require separate Bright MLS agreements, data feeds, permissions, and fee schedules.</p></div><div className="license-cards"><article><span>PRODUCT 01 · PUBLIC</span><h3>IDX Property Search</h3><p>Consumer-facing property discovery using only fields authorized for public IDX display.</p><ul><li>Public website display</li><li>IDX-eligible fields only</li><li>Required attribution and disclaimers</li><li>Separate public data feed</li></ul><button onClick={()=>document.getElementById("properties")?.scrollIntoView()}>Review IDX product →</button></article><article><span>PRODUCT 02 · PRIVATE</span><h3>Back Office Operations</h3><p>Authenticated tools for verified subscribers supporting market analysis and transaction workflows.</p><ul><li>Market and listing analytics</li><li>Transaction management</li><li>Role-based professional access</li><li>Separate private data feed</li></ul><button onClick={()=>setView("professional")}>Review back office product →</button></article></div></section>

          <section className="properties" id="properties"><div className="section-head"><div><span className="eyebrow">PRODUCT 01 · PUBLIC IDX DEMO</span><h2>Consumer property search</h2></div><p>Representative public display using fictional listings. Production display will follow Bright MLS IDX rules, attribution, and refresh requirements.</p></div>
            <div className="filter-row"><button className="filter-wide">Northern Virginia <span>⌄</span></button><button>For sale <span>⌄</span></button><button>Any price <span>⌄</span></button><button>Beds & baths <span>⌄</span></button><button className="filter-icon">≡</button></div>
            <div className="cards">{listings.map((x,i)=><article className={`property-card ${selectedListing === i ? "selected-property" : ""}`} key={x.address}><div className={`property-image ${x.tone}`}><span className="demo-chip">SYNTHETIC DEMO</span><button className={`heart ${saved.includes(i) ? "saved" : ""}`} onClick={()=>toggleSaved(i)} aria-label="Save property">{saved.includes(i) ? "♥" : "♡"}</button><div className="roof"></div><div className="house"><i></i><i></i><i></i></div></div><div className="property-copy"><div className="status"><span></span>ACTIVE <em>{i === 0 ? "NEW" : i === 1 ? "4 DAYS" : "PRICE UPDATE"}</em></div><h3>{x.price}</h3><p>{x.address}<br/><small>{x.place}</small></p><div className="specs"><span><b>{x.beds}</b> beds</span><span><b>{x.baths}</b> baths</span><span><b>{x.sqft}</b> sq ft</span></div><p className="listing-firm">Listing broker: {listingDetails.listingOffice}</p><footer>{x.type}<button onClick={()=>showListing(i)}>View details →</button></footer></div></article>)}</div>
          </section>

          <section className="listing-detail" id="listing-detail" aria-labelledby="listing-title">
            <div className="detail-review-bar"><span>BRIGHT IDX LISTING-DETAIL SAMPLE</span><p>Fictional property and brokerage data · Compliance layout for review only</p><b>SAIN REAL ESTATE BROKERAGE · DEMO OPERATOR</b></div>
            <div className="detail-gallery" aria-label="Synthetic property photo gallery">
              <div className={`detail-photo main-photo ${featured.tone}`}><span className="demo-chip">SYNTHETIC DEMO IMAGE</span><div className="roof"></div><div className="house"><i></i><i></i><i></i></div></div>
              <div className="detail-photo interior-one"><span>Living room · synthetic illustration</span></div>
              <div className="detail-photo interior-two"><span>Kitchen · synthetic illustration</span></div>
              <button className="all-photos" type="button">View all 18 demo images</button>
            </div>

            <div className="detail-layout">
              <article className="detail-main">
                <div className="detail-heading">
                  <div><span className="active-label"><i></i> Active</span><h1 id="listing-title">{featured.price}</h1><p>{featured.address}<br/><span>{featured.place}</span></p></div>
                  <button className={`detail-save ${saved.includes(selectedListing) ? "saved" : ""}`} onClick={()=>toggleSaved(selectedListing)}>{saved.includes(selectedListing) ? "♥ Saved" : "♡ Save"}</button>
                </div>
                <div className="detail-specs"><span><b>{featured.beds}</b> bedrooms</span><span><b>{featured.baths}</b> bathrooms</span><span><b>{featured.sqft}</b> sq ft</span><span><b>{listingDetails.lot}</b> lot</span></div>

                <div className="listing-attribution">
                  <span>PROPERTY INFORMATION FROM BRIGHT MLS</span>
                  <strong>Listing broker: {listingDetails.listingOffice}</strong>
                  <p>Listing broker contact: {listingDetails.listingContact} · Listing ID {listingDetails.id}</p>
                  <p>Advertising broker and site operator: SAIN Real Estate Brokerage <em>(fictional demo identity)</em></p>
                  <small>Sample data timestamp: Aug 28, 2026 at 9:10 AM ET · Production IDX display refreshes at least every 12 hours.</small>
                </div>

                <section className="detail-section"><span className="eyebrow">PROPERTY DESCRIPTION</span><h2>Light-filled living, framed by mature trees.</h2><p>This fictional four-bedroom home pairs an open main level with quiet, flexible rooms for work and gathering. The kitchen opens to a covered terrace, while the lower level offers a recreation room and direct garden access.</p><p className="data-source">Description source: synthetic demonstration content created by SAIN Industries.</p></section>

                <section className="detail-section"><span className="eyebrow">PROPERTY DETAILS</span><h2>At a glance</h2><dl className="facts-grid"><div><dt>Property type</dt><dd>{featured.type}</dd></div><div><dt>Year built</dt><dd>{listingDetails.yearBuilt}</dd></div><div><dt>Parking</dt><dd>{listingDetails.parking}</dd></div><div><dt>HOA fee</dt><dd>{listingDetails.hoa}</dd></div><div><dt>Annual taxes</dt><dd>{listingDetails.taxes}</dd></div><div><dt>Cooling</dt><dd>{listingDetails.cooling}</dd></div><div><dt>Heating</dt><dd>{listingDetails.heating}</dd></div><div><dt>School district</dt><dd>{listingDetails.schoolDistrict}</dd></div></dl></section>
              </article>

              <aside className="contact-card">
                <span className="eyebrow">ASK ABOUT THIS HOME</span><h2>Connect with the site broker</h2><p>Your message will go to a SAIN Real Estate Brokerage representative, not the listing agent or listing office.</p>
                <label>Full name<input type="text" placeholder="Your name" /></label><label>Email address<input type="email" placeholder="you@example.com" /></label><label>Message<textarea defaultValue={`I’m interested in ${featured.address}.`} /></label>
                <button type="button">Contact SAIN representative</button><small>Demo form only — no message will be sent.</small>
              </aside>
            </div>

            <div className="idx-disclosures">
              <div><span className="eyebrow">IDX DISCLOSURES</span><h2>About this property information</h2></div>
              <div className="disclosure-copy"><p>Internet Data Exchange (IDX) provides consumers with access to property listings supplied by participating real estate brokers. Bright MLS is the source of the property information displayed on this page.</p><p>Property information is provided exclusively for consumers’ personal, non-commercial use and may not be used for any purpose other than to identify prospective properties consumers may be interested in purchasing. Some properties that appear for sale may no longer be available because they are under contract, have sold, or are no longer being offered for sale.</p><p>The property information displayed is deemed reliable but is not guaranteed. © 2026 Bright, All Rights Reserved.</p></div>
            </div>
          </section>

          <section className="workflow" id="workflow"><div><span className="eyebrow">PRODUCT 02 · PRIVATE BACK OFFICE</span><h2>Market intelligence and transaction operations.</h2><p>A separately licensed, authenticated workspace for authorized professionals. Private fields are never exposed through the public IDX product.</p><button className="primary" onClick={()=>setView("professional")}>Enter back office demo <span>→</span></button></div><div className="feature-grid"><article><b>01</b><h3>Market analytics</h3><p>Inventory, pricing, status-change, and comparable-property analysis.</p></article><article><b>02</b><h3>Transaction pipeline</h3><p>Milestones, deadlines, documents, parties, and closing coordination.</p></article><article><b>03</b><h3>Client management</h3><p>Verified relationships, saved searches, feedback, and follow-up activity.</p></article><article><b>04</b><h3>Access governance</h3><p>Subscriber verification, role controls, audit history, and access revocation.</p></article></div></section>
        </>
      ) : (
        <section className="dashboard" id="top"><aside><div className="dash-brand"><span className="brand-mark">S</span><span>SAIN<br/><b>BACK OFFICE</b></span></div><div className="account"><span>SH</span><div>Shadman Hossain<small>Verified demo account</small></div></div>{["Operations overview","Transaction pipeline","Market analytics","Property research","Clients","Compliance tasks","Access & audit"].map((x,i)=><button className={i===0?"selected":""} key={x}><i>{["⌂","▤","⌁","⌕","♙","✓","◇"][i]}</i>{x}</button>)}<div className="aside-bottom"><button><i>⚙</i>Settings</button><button onClick={()=>setView("public")}><i>↩</i>View public IDX demo</button></div></aside><div className="dash-main"><header><div><span className="eyebrow">PRODUCT 02 · PRIVATE BACK OFFICE DEMO</span><h1>Operations overview</h1><p className="dash-subtitle">Market trends, transaction progress, and client workflows for verified professionals.</p></div><div className="dash-actions"><button>Run market report</button><button className="primary">+ Add transaction</button></div></header><div className="pending"><div><span>LICENSE / FEED</span><strong>Private back office</strong></div><div><span>INTEGRATION STATUS</span><strong><i></i> Pending licensing</strong></div><div><span>ENVIRONMENT</span><strong>Synthetic demo</strong></div><p>No Bright MLS data or credentials are connected.</p></div><div className="stat-grid">{stats.map(([n,l,d])=><article key={l}><span>{l}</span><strong>{n}</strong><small>{d}</small></article>)}</div><div className="pipeline"><div className="mini-head"><div><span className="eyebrow">TRANSACTION MANAGEMENT</span><h2>Active pipeline</h2></div><button>View all transactions →</button></div><div className="pipeline-head"><span>PROPERTY</span><span>CLIENT</span><span>STAGE</span><span>NEXT MILESTONE</span><span>STATUS</span></div>{[["1847 Willow Crest Lane","Avery Parker","Under contract","Inspection · Aug 28","On track"],["420 Meridian Street, Unit 6","Jordan Miller","Due diligence","Document review · Today","Action needed"],["908 Meadowgate Drive","Riley Smith","Pre-closing","Closing package · Sep 2","On track"]].map((x,i)=><div className="pipeline-row" key={x[0]}><b>{x[0]}</b><span>{x[1]}</span><span>{x[2]}</span><span>{x[3]}</span><em className={i===1?"attention":""}>{x[4]}</em></div>)}</div><div className="dash-columns"><section><div className="mini-head"><div><span className="eyebrow">MARKET ANALYTICS</span><h2>New listings by month</h2></div><button>Full report →</button></div><div className="chart"><div style={{height:"44%"}}><span>May</span></div><div style={{height:"58%"}}><span>Jun</span></div><div style={{height:"72%"}}><span>Jul</span></div><div style={{height:"63%"}}><span>Aug</span></div></div></section><section><div className="mini-head"><div><span className="eyebrow">COMPLIANCE</span><h2>Access controls</h2></div><button>Audit log →</button></div>{[["Subscriber verification","6 verified users","Complete"],["Brokerage approval","3 brokerages","Complete"],["Access review","Next review Aug 30","Scheduled"]].map((x)=><div className="client" key={x[0]}><span className="control-check">✓</span><div><b>{x[0]}</b><small>{x[1]}</small></div><em>{x[2]}</em></div>)}</section></div></div></section>
      )}

      <section className="compliance" id="compliance"><div><span className="eyebrow">DATA HANDLING ACKNOWLEDGMENT</span><h2>Human-managed ingestion. No AI access.</h2></div><div className="acknowledgment"><strong>SAIN Industries confirms:</strong><p>Shadman Hossain will personally handle Bright MLS data ingestion, formatting, querying, credential management, and feed administration. Bright MLS credentials, listing content, private data, and query results will not be entered into or processed by ChatGPT, OpenAI, or any other AI platform, whether open or enterprise. This hosted page is a static interface demonstration containing synthetic data only and will never be connected to a Bright MLS feed.</p></div><div className="data-boundary"><div><span>1</span><b>Bright RETS / RESO Web API</b><small>Separate licensed public and private feeds</small></div><i>→</i><div><span>2</span><b>SAIN-controlled ingestion</b><small>Personally configured and managed by Shadman Hossain</small></div><i>→</i><div><span>3</span><b>Separated product databases</b><small>Public IDX fields isolated from private back-office fields</small></div><i>→</i><div><span>4</span><b>Authorized product displays</b><small>No Bright data or credentials provided to AI systems</small></div></div><div className="compliance-grid"><article><span>01</span><h3>Credential isolation</h3><p>API credentials remain solely within SAIN-controlled infrastructure and are never entered into an AI platform or product.</p></article><article><span>02</span><h3>Personal feed management</h3><p>Shadman Hossain personally manages ingestion, field mapping, normalization, incremental queries, and error handling.</p></article><article><span>03</span><h3>Product separation</h3><p>IDX and back-office data use distinct licenses, feeds, schemas, permissions, and display policies.</p></article><article><span>04</span><h3>Lifecycle controls</h3><p>Timestamp-based updates, reconciliation, audit logs, rate controls, and prompt removal or access revocation.</p></article></div><div className="integration"><div><span className="integration-logo">S</span><div><small>PROPOSED INTEGRATION</small><b>RETS / RESO Web API</b></div></div><div><small>DATA PROVIDER</small><b>Bright MLS — Pending Licensing</b></div><div><small>FEED STRUCTURE</small><b>Two separately licensed feeds</b></div><div><small>THIS DEMO</small><b>Static synthetic data only</b></div></div></section>

      <footer className="site-footer"><div className="brand"><span className="brand-mark">S</span><span>SAIN <b>REAL ESTATE</b></span></div><p>Technology for clearer property decisions.</p><small>© 2026 SAIN Industries · Static vendor-review demonstration<br/>All properties, identities, statistics, and activity are fictional. No Bright MLS data, API connection, or credentials are present. Production ingestion will be performed personally by Shadman Hossain outside all AI platforms.</small></footer>
    </main>
  );
}
