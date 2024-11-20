import{_ as o}from"./chunks/NotmyWork.DXp9xS4-.js";import{c as i,j as t,a as r,G as n,a3 as a,o as s}from"./chunks/framework.uL7cFZ_M.js";const h={class:"warning custom-block"},f=JSON.parse('{"title":"Getting to Benchy with the Ender 3","description":"A guide on how to achieve a successful Benchy print with the Ender 3, covering printer setup, calibration, and troubleshooting common issues.","frontmatter":{"title":"Getting to Benchy with the Ender 3","author":"WebWorxShop","source":"https://webworxshop.com/3d-printing-getting-to-benchy-with-the-ender-3/","description":"A guide on how to achieve a successful Benchy print with the Ender 3, covering printer setup, calibration, and troubleshooting common issues.","articleDate":"2019-11-13T00:00:00.000Z","tags":["Ender","Benchy","Print","Printer","Calibration","3dprinting"],"type":"Article","dateCreated":"2024-09-15 08:00","status":"Archive","category":"3d Printing","outline":"deep"},"headers":[],"relativePath":"3d-printing/benchy-ender-3.md","filePath":"3d-printing/benchy-ender-3.md","lastUpdated":1731953090000}'),l={name:"3d-printing/benchy-ender-3.md"},g=Object.assign(l,{setup(d){return(p,e)=>(s(),i("div",null,[e[1]||(e[1]=t("h1",{id:"getting-to-benchy-with-the-ender-3",tabindex:"-1"},[r("Getting to Benchy with the Ender 3 "),t("a",{class:"header-anchor",href:"#getting-to-benchy-with-the-ender-3","aria-label":'Permalink to "Getting to Benchy with the Ender 3"'},"​")],-1)),t("div",h,[e[0]||(e[0]=t("p",{class:"custom-block-title"},"Hey, this isn't my work.",-1)),n(o)]),e[2]||(e[2]=a('<hr><p>I recently bought a 3D printer in the form of a <a href="http://s.click.aliexpress.com/e/Ew0J8ezw" target="_blank" rel="noreferrer">Creality Ender 3</a>. I thought I would take the time to document how I got up and running, since this area is completely new to me. Hopefully this will be useful to those who are just starting out in 3D printing, specifically with the Ender 3. It’s not going to be a complete guide, but more of a high level overview of the steps I took. I’ll link to more detailed instructions where relevant.</p><h3 id="about-the-ender-3" tabindex="-1">About the Ender 3 <a class="header-anchor" href="#about-the-ender-3" aria-label="Permalink to &quot;About the Ender 3&quot;">​</a></h3><p>The Ender 3 is a budget 3D printer from Creality 3D. It has a pretty standard feature set, including a heated bed. Levelling of the bed must be performed manually, but there are several <a href="https://www.antclabs.com/bltouch" target="_blank" rel="noreferrer">addons</a> which can automate this. The whole design of the printer has been made <a href="https://github.com/Creality3DPrinting/Ender-3" target="_blank" rel="noreferrer">Open Source</a>, including the firmware. There are also a whole load of <a href="https://www.thingiverse.com/search?q=ender+3" target="_blank" rel="noreferrer">3D printed addons</a> that can be added to the printer to improve its design and performance.</p><p>I opted for the base model with a <a href="http://s.click.aliexpress.com/e/DwEAIZte" target="_blank" rel="noreferrer">glass bed</a> as an additional addon. This was because I’ve heard of people having issues with warping of the metal build plate over time (and heat). The glass bed will always remain flat and avoid this issue. When I actually received the unit I saw that with the bundle I purchased I got the original flexible build surface as well. So I have the choice between the two. I also purchased a Raspberry Pi to host an <a href="https://octoprint.org/" target="_blank" rel="noreferrer">Octoprint</a> setup (which I haven’t got around to setting up yet) and three rolls of <a href="http://s.click.aliexpress.com/e/2aIjA3He" target="_blank" rel="noreferrer">PLA filament</a>. My filament took ages to arrive. I’d probably advise you to grab try and grab a bundle that includes a roll of filament if you want to get going quickly. The available bundles are always changing, so have a search around for the best deal.</p><h3 id="putting-it-together" tabindex="-1">Putting it Together <a class="header-anchor" href="#putting-it-together" aria-label="Permalink to &quot;Putting it Together&quot;">​</a></h3><p>The printer arrived very quickly (just a few days). It comes in kit form and requires some assembly. This shouldn’t be difficult for anyone who’s put together anything moderately complex from a kit before. However, the instructions in the box leave something to be desired so I’d advise you to follow some of the <a href="https://letsprint3d.net/2018/04/18/how-to-assemble-creality-ender-3/" target="_blank" rel="noreferrer">3rd party</a> <a href="https://makersteve.com/2018/08/25/ultimate-build-guide-for-creality-ender-3-step-by-step-a-makersteve-special-report/" target="_blank" rel="noreferrer">instructions</a> available online. I was able to complete the build in 2-3 hours spread over a couple of weekday evenings.</p><h3 id="why-you-should-upgrade-the-firmware" tabindex="-1">Why You Should Upgrade the Firmware <a class="header-anchor" href="#why-you-should-upgrade-the-firmware" aria-label="Permalink to &quot;Why You Should Upgrade the Firmware&quot;">​</a></h3><p>The Ender 3 ships with an older version of the <a href="http://marlinfw.org/" target="_blank" rel="noreferrer">Marlin firmware</a>. This lacks some features available in newer versions. Most notable of these is the lack of thermal runaway protection in the stock firmware. This is an important safety feature, which will cut power to the heating elements of the printer if the firmware detects that something is wrong. This can happen if some part of the heating or feedback systems becomes loose. I think it’s really important to upgrade the firmware on the device to the latest Marlin, since the stock firmware may literally <a href="https://hackaday.com/2018/03/18/3d-printer-halts-and-catches-fire-analysis-finds-a-surprising-culprit/" target="_blank" rel="noreferrer">burn your house down!</a> Of course even with the latest firmware accidents can still happen, so this isn’t a substitute for taking other safety precautions!</p><p>The firmware upgrade process, whilst not trivial is easy enough for anyone whose programmed an Arduino or ESP8266. That’s because the Marlin firmware is itself an Arduino sketch! Basically, doing the update is a two step process. First we must flash the Arduino bootloader to the mainboard. This will then allow us to upload our new firmware (and any subsequent updates) via the printer’s USB port.</p><h3 id="performing-the-upgrade" tabindex="-1">Performing the Upgrade <a class="header-anchor" href="#performing-the-upgrade" aria-label="Permalink to &quot;Performing the Upgrade&quot;">​</a></h3><p><img src="https://webworxshop.com/wp-content/uploads/2019/11/firmware_update_setup.jpg" alt="ender 3 flashing bootloader"></p><p>The bootloader programming setup, note the resistors between 5V and reset (together these make 120ohm)</p><p>Flashing the bootloader is the most tricky part of this. It requires making some connections to the main board from another Arduino. This will act as the programming device (I used my old Arduino Duemilanove). I also found that I had to insert a 120 Ohm resistor between the 5V and ground pins of the Arduino to prevent it being reset when the IDE connected to it. This is because we want the reset to be passed through to the printer mainboard, not to reset the programming sketch on our Arduino. I couldn’t flash the bootloader from <a href="https://platformio.org/" target="_blank" rel="noreferrer">platformio</a>, which is my preferred tool for doing Arduino stuff, so I had to download the latest version of the <a href="https://www.arduino.cc/en/main/software" target="_blank" rel="noreferrer">Arduino IDE</a>.</p><p>Once the bootloader was flashed I cloned a copy of Marlin from <a href="https://github.com/MarlinFirmware/Marlin" target="_blank" rel="noreferrer">Github</a>, checked out the latest 1.x release and copied over the Ender 3 example configuration. I did a quick double check to make sure thermal runaway protection was enabled in the config. I was then able to build and flash the new firmware via platformio and the USB port on the printer.</p><p>This whole process is covered in much more detail in the following videos, which I used as a basis for getting this done:</p>',16)),e[3]||(e[3]=t("iframe",{title:"Ender 3: How to install a bootloader and update firmware",width:"500",height:"281",src:"https://www.youtube.com/embed/fIl5X2ffdyo?feature=oembed",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,-1)),e[4]||(e[4]=t("iframe",{title:"Ender 3 vanilla Marlin update: Concise guide",width:"500",height:"281",src:"https://www.youtube.com/embed/N7JLchsFRDU?feature=oembed",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,-1)),e[5]||(e[5]=t("h3",{id:"levelling-the-bed",tabindex:"-1"},[r("Levelling the Bed "),t("a",{class:"header-anchor",href:"#levelling-the-bed","aria-label":'Permalink to "Levelling the Bed"'},"​")],-1)),e[6]||(e[6]=t("p",null,"I found levelling the bed to be somewhat tricky. I think the main problem was that I kept getting the extruder too close to the bed which would inhibit the flow of plastic from the nozzle. However, after a few goes I was able to get it dialed in reasonably well. From the performance of the printer so far it looks like this doesn’t have to be perfect, just good enough. The following video shows the process that I followed:",-1)),e[7]||(e[7]=t("iframe",{loading:"lazy",title:"Creality Ender 3- Easy Way To Level Your Bed",width:"500",height:"281",src:"https://www.youtube.com/embed/_EfWVUJjBdA?feature=oembed",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:""},null,-1)),e[8]||(e[8]=a('<h3 id="first-prints" tabindex="-1">First Prints <a class="header-anchor" href="#first-prints" aria-label="Permalink to &quot;First Prints&quot;">​</a></h3><p>For my first print I just started one of the test gcode files that come on the SD card. This was supposed to be a pig. However, I knew that it wouldn’t complete because the only filament I had was the small amount which is supplied with the printer. I was mainly just wanting to see the printer running!</p><p><img src="https://webworxshop.com/wp-content/uploads/2019/11/half_pig.jpg" alt="ender 3 first print"></p><p>Well that’s half a pig, right?</p><p>I had to wait another two weeks for the first of my rolls of filament to arrive, which was pretty frustrating. Once that arrived I sliced the <a href="https://www.thingiverse.com/thing:763622" target="_blank" rel="noreferrer">3DBenchy</a> test model using <a href="https://ultimaker.com/software/ultimaker-cura" target="_blank" rel="noreferrer">Cura</a> and printed it. To my dismay it didn’t come out as I expected on the first try:</p><p><img src="https://webworxshop.com/wp-content/uploads/2019/11/failed_benchy.jpg" alt="ender 3 failed benchy"></p><p>Oops!</p><p>After a little bit of head scratching I realised that I had a Cura setting enabled from a previous model which I had been slicing. The specific setting was “Spiralize Outer Contour” A.K.A “Vase Mode”, which explains the issue. After disabling this setting and re-slicing, the resulting gcode produced a pretty nice Benchy in around 2 hours.</p><p><img src="https://webworxshop.com/wp-content/uploads/2019/11/successful_benchy.jpg" alt="ender 3 successful benchy"></p><p>Finally, success!</p><h3 id="conclusions" tabindex="-1">Conclusions <a class="header-anchor" href="#conclusions" aria-label="Permalink to &quot;Conclusions&quot;">​</a></h3><p>Since proving that the printer is functioning correctly with a decent benchy print, I’ve done a few other prints. I’ll probably cover some of these in future articles. For my regular readers – don’t worry! This isn’t going to turn into a 3D printing blog. However, there will be the occasional post on the subject (probably more than occasional in the next couple of months as I’m learning about it).</p><p>I’m actually really impressed with the whole 3D printing ecosystem and the Ender 3 specifically. I really like how my whole 3D printing pipeline is Open Source. This goes right from creating the models (with <a href="https://www.openscad.org/" target="_blank" rel="noreferrer">OpenSCAD</a>, <a href="https://www.freecadweb.org/" target="_blank" rel="noreferrer">FreeCAD</a> or <a href="https://www.blender.org/" target="_blank" rel="noreferrer">Blender</a>), through slicing (Cura) and down to the machine itself and the Marlin firmware (and Octoprint, eventually).</p><p>Coming back specifically to the Ender 3, I’m pleased with the print quality. So far I’ve only printed with a 0.2mm layer height, but it supports down to 0.1mm. The objects I’ve produced, whilst obviously 3D printed, are of good detail and finish and are very strong. Overall, I’d recommend this printer to anyone who has the technical know how to get it up and running and perform the required firmware update.</p><h3 id="next-steps" tabindex="-1">Next Steps <a class="header-anchor" href="#next-steps" aria-label="Permalink to &quot;Next Steps&quot;">​</a></h3><p>Print more things! I really love the feeling of holding an object which just didn’t exist a few hours before. I have a whole list of objects to print, including some upgrades to the printer. For some of these I’ve been waiting for my black filament to arrive, so I should be able to get on with them soon.</p><p>I also need to get my Octoprint setup completed. It’s actually mostly there, I just have a couple more configuration steps to go. I also want to print a case for the Pi, which will fit underneath the bed of the printer. I hope to report back on my progress with that pretty soon.</p>',17))]))}});export{f as __pageData,g as default};