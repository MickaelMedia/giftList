import React, { useState } from "react";
import "./Gifts.css";
import SubGifts from "./SubGifts"

function Gifts() {
    const [choice, setChoice]= useState("All");

    const handleChange =(event)=>{
        setChoice(event.target.value)
    }

    return (
        <div>
            <div className="gifts">
                <h2>
                    Honestly If you are reading this thanks in advance, I know its hard sometimes to find out what somebody wants so I made this website that tells people what I want and also the amount of money it cost if you are on a budget.
                </h2>
                <h3>
                    O AND FIY: if you can't get me a gift dont worry about it just call me :)
                </h3>
            </div>
            <div className="input">
                <p>Category</p>
                <select value={choice} onChange={handleChange}>
                    <option value="All" >All</option>
                    <option value="Camera" >Camera/Technology</option>
                    <option value="Fashion" >Fashion</option>
                    <option value="MTB">MTB</option>
                </select>
            </div>

                <div className="gifts__area">

                    {choice === "All" || choice === "MTB"? <SubGifts title="Rebuild kit for fork" image="https://static.summitracing.com/global/images/prod/mediumlarge/hdd-820-2711_ml.jpg" description="So this is really hard to find, its the oils and things for a rebuild you could check S4 suspension but its hard to find and assemble everything" price=""/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "MTB"? <SubGifts title="Decals for my fork" image="https://i.etsystatic.com/21744159/r/il/23fb59/2505488380/il_794xN.2505488380_3bqg.jpg" description="just to add some stickers to my bike" price="32CAD" url="https://www.etsy.com/ca/listing/851147990/decals-for-fork-fox-36-metallized-2019?gpla=1&gao=1&utm_source=google&utm_medium=cpc&utm_campaign=shopping_ca_en_ca_b-toys_and_games-sports_and_outdoor_games-other&utm_custom1=_k_Cj0KCQiAs5eCBhCBARIsAEhk4r4wMBZnfQc5YNtcDr4xhC3WTFecGFtZSCGXe5-f8q8nAJl-Qczw0PAaAnXhEALw_wcB_k_&utm_content=go_319627965_19422853365_75223851885_aud-1184769867519%3Apla-106555126115_c__851147990enca_241830962&utm_custom2=319627965&gclid=Cj0KCQiAs5eCBhCBARIsAEhk4r4wMBZnfQc5YNtcDr4xhC3WTFecGFtZSCGXe5-f8q8nAJl-Qczw0PAaAnXhEALw_wcB&variation0=1530705479"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "MTB"? <SubGifts title="AngleSet to slacken" image="https://canecreek.com/wp-content/uploads/2017/12/DRS3491.jpg" description="allowed me to slacken and make my mtb more capable" price="174 CA" url="https://canecreek.com/product/angleset/"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Fashion"? <SubGifts id="test" title="Hair straightener" image="https://images-na.ssl-images-amazon.com/images/I/61n-SjXgUJL._SL1500_.jpg" description="I want to try straightening my hair from time to time lol" price=""/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "MTB" || choice === "Fashion"? <SubGifts title="Sports socks" image="https://cdn.shopify.com/s/files/1/1477/6714/products/mist_893477e4-9bb2-49ee-9b59-1dfa5df27d20_800x.png?v=1618248791" description="I like these socks because they allow me to look cool af" price="20 CAD" url="https://www.endurapparel.com/collections/best-sellers/products/mist"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Fashion"? <SubGifts title="Design a logo" image="https://www.mckinsey.com/~/media/McKinsey/Business%20Functions/Operations/Our%20Insights/The%20expanding%20role%20of%20design%20in%20creating%20an%20end%20to%20end%20customer%20experience/Expanding-role-of-design-1536x1536-400_Standard.jpg" description="I don't have a logo design for my website yet, But if you make one that's cool I am just gonne be blown away" price="Priceless"
                    url=""/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Fashion"? <SubGifts title="Custom Hat" image="https://m.media-amazon.com/images/I/919b9yYCaSL._SR500,500_.jpg" description="Honestly, A really cool hat with the comment VIIIIBES and a palm tree on the side would be really cool" price="30 CAD"
                    url="https://www.endurapparel.com/collections/shop-all-socks/products/breathe-performance-socks"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "MTB"? <SubGifts title="Truing Stand" category="Biking" image="https://images-na.ssl-images-amazon.com/images/I/71NJN70Y7KL._AC_SL1500_.jpg" description="I think I am gonna need a truing stand in the futur because I keep breaking all my wheels" price="200-400 CAD"
                    url="https://www.amazon.ca/-/fr/Park-Tool-Professional-Wheel-Truing/dp/B00NQAA7BS/ref=pd_lpo_200_img_1/132-6171209-4385110?_encoding=UTF8&pd_rd_i=B00NQAA7BS&pd_rd_r=4ef8bad4-4d54-43a1-8e9c-99db1924e57e&pd_rd_w=rFrEC&pd_rd_wg=x8wUj&pf_rd_p=256a14b6-93bc-4bcd-9f68-aea60d2878b9&pf_rd_r=T2RWWNWKS94S3NDGJ1Y2&psc=1&refRID=T2RWWNWKS94S3NDGJ1Y2"/> : <div style={{display:"none"}}></div>}


                    {choice === "All" || choice === "MTB"? <SubGifts title="Clip Pedals" category="Biking" image="https://images-na.ssl-images-amazon.com/images/I/81%2B6Hs254PL._AC_SL1500_.jpg" description="Honestly the best clipped pedals that I could dream LMAO" price="219 CAD (honestly check somewhere else for cheaper)"
                    url="https://www.amazon.ca/-/fr/Shimano-PD-M9120-p%C3%A9dale-crampons-inclus/dp/B07HF4Z2N2/ref=sr_1_4?__mk_fr_CA=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=GBEJQMIL8SZX&dchild=1&keywords=shimano+spd+pedals&qid=1611151300&s=sports&sprefix=shimano%2Csporting%2C183&sr=1-4"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Camera"? <SubGifts title="Sony Headset" image="https://images-na.ssl-images-amazon.com/images/I/51IdLe-%2B6kL._AC_SL1500_.jpg" description="litteraly the best headsets on the market, I am gonna be able to listen to music like a god, keep my ears warm and block the haters with soundresistance" price="450 CAD"
                    url="https://www.amazon.ca/-/fr/Sony-WH1000XM3-Canceling-Headphones-WH-1000XM3/dp/B07G4MNFS1/ref=sr_1_2?adgrpid=68387642398&dchild=1&gclid=Cj0KCQjw7Nj5BRCZARIsABwxDKIk0yxEB6mQfMvsEHwZcDguRO5kFJ1bqMBne7ylFeyXuNllqhOxH1kaAgEvEALw_wcB&hvadid=338544382722&hvdev=c&hvlocphy=9061022&hvnetw=g&hvqmt=e&hvrand=71443916581602365&hvtargid=kwd-504933943600&hydadcr=20609_10916060&keywords=wh1000xm3&qid=1597450947&sr=8-2&tag=googlefrenchd-20"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Camera"? <SubGifts title="NVM SSD" image="https://cdn.mos.cms.futurecdn.net/WCoUFqDWHCN7EJcxXLjpJX-970-80.jpg.webp" description="Just to have more space in my computer 1TB ssD" price="200 CAD"
                    url="https://www.amazon.ca/dp/B07MG119KG?tag=georiot-ca-default-20&th=1&psc=1&ascsubtag=trd-ca-4295775330065822700-20"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "MTB"? <SubGifts title="Bleed Kit" category="Biking" image="https://m.media-amazon.com/images/I/61AsDdm1PyL._SR500,500_.jpg" description="Bleed kit that allows me to dial in my brakes" price="40 CAD"
                    url="https://www.amazon.ca/slp/shimano-bleed-kit/2v3rgz7g9pkm5aq"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "MTB"? <SubGifts title="Instinc 29erXL" category="Biking" image="https://www.bikes.com/sites/default/files/styles/model_image_slider_hires3k/public/models/Web_MY21_Instinct_29_A30_C1_Profile.jpg?itok=VBpvIPsh" description="The perfect bike for me from the brand that I admire" price="3860 CAD" url="https://www.bikes.com/en/bikes/instinct/2021?tid=72" /> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "MTB"? <SubGifts title="Sight A3 29 XL" category="Biking" image="https://www.norco.com/cmsb/uploads/bikes/bikes/my21_sight_a3_29_silver_silver-full.webp" description="Honestly the most reasonable bike here on the list, It would be my one quiver killer" price="4199 CAD" url="https://www.norco.com/bikes/2021/mountain/all-mountain/sight/sight-a3/" /> : <div style={{display:"none"}}></div>}


                    {choice === "All" || choice === "MTB"? <SubGifts title="Kona 153 XL" category="Biking" image="https://images.konaworld.com/2021/med/process_153_29.jpg" description="Apparently funnest bike, not fastest" price="4200 CAD" url="https://www.konaworld.com/process_153_29.cfm" /> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "MTB"? <SubGifts title="MTB pants" category="Biking" image="https://s14761.pcdn.co/wp-content/uploads/2019/04/mtb-riding-pants-trousers-review-test-0568-1140x760.jpg" description="mountain bike pants that are unique, if you want you can even stitch a logo on it xD" price="70 Cad" url="https://enduro-mtb.com/en/best-mtb-pants/" /> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Fashion"? <SubGifts title="Watch Strap" image="https://fossil.scene7.com/is/image/FossilPartners/S221255_main?$sfcc_fos_large$" description="the leather strap on my watch is getting old might as well change it to make my watch look new" price="50 Cad" url="https://www.fossil.com/fr-ca/products/bracelet-de-montre-en-cuir-bleu-de-22%C2%A0mm/S221255.html" /> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Fashion"? <SubGifts title="Daishiki Shirt" image="http://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/0/8/08-04-1510deep-025.jpg" description="Just a very particulur shirt that I think is cool" price="70 Cad"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Camera"? <SubGifts title="Condenser Mick" image="https://consordini.com/wp-content/uploads/2019/07/blue-yeti-nano-condenser-usb-mic.jpg" description="Microphone to do clear voiceOver my Videos" price="250 Cad" url="https://www.amazon.ca/dp/B07DTTGZ7M/ref=as_li_ss_tl?language=en_US&ie=UTF8&linkCode=gs2&linkId=4e6b4649f54de27b27089d2cf56ad422&tag=consor0c-20" /> : <div style={{display:"none"}}></div>}

                    {choice === "All" ?<SubGifts title="Heated Insoles" image="https://canadiantire.scene7.com/is/image/CanadianTire/1750704_1?&layer=comp&fit=constrain,1&wid=45&hei=45&fmt=jpg" description="Heated insoles that can keep my feet warm during winter activity" price="100-200 CAD"
                    url="https://www.amazon.ca/-/fr/Park-Tool-Professional-Wheel-Truing/dp/B00NQAA7BS/ref=pd_lpo_200_img_1/132-6171209-4385110?_encoding=UTF8&pd_rd_i=B00NQAA7BS&pd_rd_r=4ef8bad4-4d54-43a1-8e9c-99db1924e57e&pd_rd_w=rFrEC&pd_rd_wg=x8wUj&pf_rd_p=256a14b6-93bc-4bcd-9f68-aea60d2878b9&pf_rd_r=T2RWWNWKS94S3NDGJ1Y2&psc=1&refRID=T2RWWNWKS94S3NDGJ1Y2"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Camera"? <SubGifts title="Amazon Gift Card" image="https://m.media-amazon.com/images/I/41owjUYFkeL._AC_UL480_FMwebp_QL65_.jpg" description="Amazon gift card So I can buy a book, or just buy a book on kindle store and send me the book" price="Variable" url="https://www.amazon.ca/kindle-Gift-Cards/s?k=kindle&rh=n%3A9230166011" /> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Camera"? <SubGifts title="256gb SD" image="https://multimedia.bbycastatic.ca/multimedia/products/1500x1500/147/14762/14762887.jpg" description="More space for my gopro" price="150CAD" url="https://www.bestbuy.ca/en-ca/product/sandisk-ultra-plus-256gb-130-mb-s-microsd-memory-card/14762887" /> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Camera"? <SubGifts title="extra go pro battery" image="https://multimedia.bbycastatic.ca/multimedia/products/500x500/139/13972/13972983.jpg" description="extra battery for go pro" price="30CAD" url="https://www.bestbuy.ca/fr-ca/produit/batterie-rechargeable-pour-gopro-hero7-8-black/13972983" /> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Fashion"? <SubGifts title="Orange NeckWarmer" image="https://cdn.shopify.com/s/files/1/2059/8303/products/15205105650_1_720x.jpg?v=1595605466" description="just to look cool. Either that Or just a really cool neckwarmer" price="20-30CAD" /> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Camera"? <SubGifts title="Beefier Laptop" image="https://assets3.razerzone.com/b3STQqtQQx8wdZs-xyjaHAL_v4M=/300x300/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh1a%2Fh6b%2F9004661932062%2Frz09-03289e21-r3u1.png" description="Video editing on the go, check. Glorious gamer graphics, Check" price="2000CAD" /> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Camera"? <SubGifts title="S20 Phone baby" image="https://images.samsung.com/is/image/samsung/p5/ca/smartphones/galaxy-s20/buy/Galaxy-S20FE-Color-KV_PC_001.jpg?$ORIGIN_JPG$" description="meh, might as well get a camera thats a phone xD" price="1000CAD" /> : <div style={{display:"none"}}></div>}

                    {choice === "All" ?<SubGifts title="SplitBoard" image="https://cdn.shopify.com/s/files/1/2059/8303/products/2021-Coda-Split_900x_e705fbd2-771d-4eac-8536-c4d21d332e6b_300x.jpg?v=1601492360" description="If I get this board, I am gonna go do some backcountry building and boarding bby." price="1000CAD" /> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "MTB"? <SubGifts title="Neck Brace" image="https://7fqlou1hs6.execute-api.us-east-1.amazonaws.com/dev/webhook/leatt-neckbrace-dbx6-5-carbonhologram-front-1020004010-.png?product?detail?webp" description="more protections means less fear when I am shreding down the mountain" price="300 CAD" url="https://leatt.com/shop/mtb/protection/neck-braces/neck-brace-dbx-6-5--sku-1020004010-W?selected-color=6816"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "MTB"? <SubGifts title="Mtb Googles" category="Biking" image="https://smithoptics.scene7.com/is/image/smithoptics/M0083101O991Y?$full$&defaultImage=image_not_available" description="just cool mtb googles" price="85 USD"  url="https://www.smithoptics.ca/ca/Root/Men%27s/Goggles/Off-Road/Fuel-V-2/p/M0083101O991Y"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "MTB"? <SubGifts title="Cushcore" category="Biking" image="https://www.primeauvelo.com/media/catalog/product/6/4/649862952104_3.jpg?width=560&height=560&canvas=560:560&quality=80&bg-color=255,255,255&fit=bounds" description="Tire inserts that will save my rim if i land on a rock too hard" price="229 CAD"  url="https://www.primeauvelo.com/en_ca/cushcore-plus-set-29-0026700?gclid=CjwKCAjw47eFBhA9EiwAy8kzNOUq6lPw4M3oS1ot8Ktcf_mbQog0swXIW4qvyNICwBbm4UxcEQQU1BoCAnAQAvD_BwE"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Fashion"? <SubGifts title="Silver Necklace" category="Fashion" image="data:image/jpeg;base64,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" description="Kinda getting sick of having to relace leather for a necklace, this should make everything chill for awhile"/> : <div style={{display:"none"}}></div>}

                </div>
                <hr />

                <div className="gifts">
                    <h2>Under this section its All the Lesson I want so I can learn some really cool stuff</h2>
                </div>

                <div className="gifts__area">
                    {choice === "All" ?<SubGifts title="Snowboarding" image="https://www.rei.com/dam/content_team_082817_18617_training_for_snowboarding.jpg" description="advanced, how to hit rails and getting my 360s dialed."/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "MTB"? <SubGifts title="BMX MTB" image="https://img.redbull.com/images/w_2000/q_auto,f_auto/redbullcom/2018/06/28/6f0dc1fa-8603-45a6-8cc0-e6cfcb2318dd/mtb-val-di-sole-golden-eagle-trail" description="mostly air control, prehop, scrubs" url='https://pmbia.org/' price='price varies'/> : <div style={{display:"none"}}></div>}

                    {choice === "All" ?<SubGifts title="Swimming" image="https://hhp-blog.s3.amazonaws.com/2019/06/GettyImages-526245433-300x193.jpg" description="how to kick , endurance and sprint"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" ?<SubGifts title="Hip Hop/dancing" image="https://fr.visittheusa.ca/sites/default/files/styles/16_9_660x371/public/images/hero_media_image/2018-03/7b32a222f39924187e00067230c62efc.jpeg?itok=-mMvDZF9" description="how to learn choreagrophy"
                    url="https://www.endurapparel.com/collections/shop-all-socks/products/breathe-performance-socks"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" || choice === "Fashion"? <SubGifts title="Bartending" image="https://www.dinemagazine.com/wp-content/uploads/2019/08/How-to-Improve-your-Bartending-Skills-and-Become-a-Pro-758x455.jpg" description="how to have swag and how to furnish my bar when I mix alcohol."/> : <div style={{display:"none"}}></div>}

                    {choice === "All" ?<SubGifts title="Ski Patrol " image="https://skigd.com/wp-content/uploads/2018/02/FullSizeRender-768x623.jpg" description="how to interact with people who are in pretty intense situation and also be a patrol for mountain biking"/> : <div style={{display:"none"}}></div>}

                    {choice === "All" ?<SubGifts title="Diving" image="https://www.swimoutlet.com/images/article/userfiles/Guide/image/Diving/Diving_RideTheBoard_01_300x350.jpg" description="getting my 203C and 403C dialied."/> : <div style={{display:"none"}}></div>}
                </div>
        </div>
    )
};

export default Gifts;