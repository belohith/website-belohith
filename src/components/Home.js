import Title from './Title';
import Subtitle from './Subtitle';
import SearchBar from './SearchBar';
import lohai from "./images/lohai.png";
import React, { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';


function Home() {

  const [color, setColor] = useState('white'); // set initial color to black
  
  useEffect(() => {
    const letters = document.querySelectorAll('.hover-color'); // select all elements with class "hover-color"
    
    // loop through each letter and add an event listener for hover
    letters.forEach(letter => {
      letter.addEventListener('mouseover', () => {
        setColor(getRandomColor()); // set color to a random hex color on hover
      });
      letter.addEventListener('mouseout', () => {
        setColor('white'); // set color back to black when hover ends
      });
    });
  }, []); // only run once on mount

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return <div>
    <div  className="flex-row" style={{margin: "100px 0 auto", alignItems: "center", justifyContent: "center"}}>
      <div>
      <Title/>
      </div>
      <div className='ml-200'>
      <p className='ascii-art font-80'>
        oool,.''..'....  ...':oooddddkO00KK00OOkOOOkxl;'......'.... ..................':cloooooooooooooooooo<br/>
ooooc;,,;,...    ..':dxkkkkkO0KKKXXXXXKKXXXXXKkoc,''.''.......'..........'....'',;cooooooooooooooooo<br/>
oooool:;,'...    .':lxkkOOOO00KKKXXXXNNXNNNNNXKOdlc:;;;'.......'''',;,,','.......'cooooooooooooloooo<br/>
oooooool;.      ..;coxxkOOO000KKXXXXXXXNNNNXXXX0kxdddol:;'......,,;:;,,;,'.......'cooooooooooooooooo<br/>
oooooooo,.      ..;coxxkOO000KKXXNNNNNNNNNNNXXXK0000Okddlc:;'.'',;;:;;:c;..... ..,cooooooooooooooooo<br/>
oooooodl'.      ..;codxkOO00KKXXNNWWWNNWWNNNXXXXXXKKKOOkxollccc:cllolllc;'.......'cooooooooooooooooo<br/>
oooooool:,.      .,cldxkkOO0KKXNNWWWWWWWWWWWWNNNNXNXXK0kdddddxdooodddol:,..  ....'cooooooooooooooooo<br/>
ooodddool;.      .,:ldxkOOO0KKXXXNNNWWWWWWWWWWNNXXXXKK0kxddxkkkxdodddlc;'..  ....':ooooooooooooooooo<br/>
oodddddooc..     .;lodxkO000KKKKKKKKXXXXXNNNNNXKKK0000OOkxdxxkOOkxddddl:'.   ....':ooooooooooooooooo<br/>
ooddddddddl.     'cdxxkkkxxxkkxxdoooddxkOO0KKK0OxxxxxxxxxxxxxxxkkOkkxxdo;.  .. ..'cooooooooooooooooo<br/>
oddddddddddc.   .;oxkxolc:;;;,,'.....';:codxkkxl::::;;,',,;;:ccccldxkkkxo,.     .,looooooooooooooooo<br/>
odddddddddddl,. .:dxdc;,,,,'............,;::cc:;''.............',,;:ldkkkc.   ..,coooooooooooooooooo<br/>
ooddodddddddoo' .cddo:,;;;,,,,'..........''',,,''..............,;::::lxkkd,...':loooooooooooooooooll<br/>
odddddddddoddo, .ldoc;,',;;,,'............,lxxo;'.............',;::ccldkkkl..':loooooodddoooooooooll<br/>
oodddddddddddo, 'oxdoc,'''..'............,xXWWNk;...............',,;:cdkOOo'.cooodddddddddddddooooll<br/>
ooddddodddddoc'.'oxkkdoc;'.';,''''.....,ckXNWMWXk:,'..........',,,:loxkOOOo,.'codddddddxxxddddooolll<br/>
ooddddoddddddl..,dkO00OOxl;,,''''.',;cdOKKXWWMWNK0Oxc;'.....',;;coxO0000Oko,.'cddddddddxxxddddooooll<br/>
oodddddddddodo:.,dk0KKXXKOxoc:;;:cok0KXXKKXNWMWNXXXXKOxol::;::ldkOKKXKK0Oxl,.,ldddddddddddddddooooll<br/>
ooddddddddooodl';dkO0KXXXXXK0000KXXNNNXXKKXNWMMWNXXXXXXXK000000KXXNNXXK0Oxc,,coddddddddxxxdddddoooll<br/>
ooddddooddddddo;;dkk00KKXXNNNNNWWWWNNXKKKKXNWMMWNNXXKXXNNWWWWWWWNNNXXK0Okxc,coddddddddddxxdddddoooll<br/>
ooddddddddddodo;;oxOOO00KXXNNWWWWWNNX0O0KXXNNWWWWNNNK0KXNWWWWWWWWNNXK00Okkl:lddddddddddddxddddooolll<br/>
oooooooooodoooo;;lxkkkkO0KXXNNNNNXXK0kOXXXXXNNNNNNNNXXKKKXNNNNNNNXXK0OOkkkocloddddddddddddddddooolll<br/>
oooodddooooddol;;clodxkkO0KKXXXXXK000000000KKKKKKKXKOkk0000KKKKKKKK0OOkkkxlloodddddddddxxdddddooolll<br/>
oooooddddddoddl:';ldxxkkkO000KK0KKKXXOl:;:cooooddddl::dKX0OkOOO0OOOkkkkkkdc:loddddddddddddddddooolll<br/>
ooooooooodooooo:',:odxkkkkOOOOO000KXXKd;....'',,;;;;:lx0K0Okxxdxxxxxkkkkxl::lodddddddddxddddddooolll<br/>
oooooooooooooool,',cldxxxxkkkkOO00KKK0kl,...........';cdxdoooooooodxxxxxoc:cloddddddxxxxdddddoooolll<br/>
oooooooooooooooo:,';:clddddddxkkOOOOkdl:,'............',;;:ccclolloddddo:;;cooddddddddddddddoooollll<br/>
ooooooooooooooooc,'',,;clllloddxddolc;'...................',;;looloollc;,,:looddoddddddddoooooolllll<br/>
ooooooooooooddoooc'..''',:cllolc:;'...........................;oolcc:,'.';clooooooooooooooooooolllll<br/>
oooooooooooooooooo:'......,;::;...........',::::ccc::;,''......;;;,,'...,:loooooooooooooooooolllllll<br/>
oooooooooooooooooooc,..............';::::;;:c:::;;;;,;:cc:,.......'....':looooooooooooooooolllllllll<br/>
ooooooooooooooooooooc;.............;loolc:;;;,''''',,,:lll:,..'.......,cooooooooooooooooolllllllllll<br/>
oooooooooooooooooooolc;...........':oddxdolc:;,;,'';codxxxl;.........,looooooooooooooooollllllllllll<br/>
oooooooooooooooooooool;..........';cdkO0Okxxl:,,;;;lkOOOkxo:,........:loooooooooooooooolllllllllllll<br/>
oooooooooooooooooooool:'.........',:oxkOOkkkxlcclooxkkxddoc,.........,cloooooooooooooooollllllllllll<br/>
oooooooooooooooloolc:,'............';coooooddlllllccoocclc:'........''.,;;:;;clloooooollllllllllllll<br/>
ooooooooooolc:;,;;;,,'.,:..........'',;;:cc:::;;;;;;:::,',,'.......,o:...',,.',;:cccclllllllllllllll<br/>
ooooolllc::;,'',',,,''.;dl'.......',,';;,;;;,'...',,'';;'.''......;okc..''''....,::;::ccllllllllllll<br/>
lllcc:::;;:,'',,'',,'..;ddl;.......,,,;;;;,'..........';,.......':okx;...''.....,:::;;;::ccclllllllc<br/>
cccc::cc::;'',,,..','..'oxdl:'.......';;,''...........,;,......,coxkl....''.....';::;,,;:;;;:cc::;;;<br/>
cc:::::cc:,',;;'..,;,...:xxol:,......................':,.... .;ldxxl'....''.....',::;,,,;,,;::::;;;;<br/>
::::::cc:,.';;,..',;,'...lkdoc;,'...........................,:ldxxl'....'''......,;;;,,,,',;:::;;;;;<br/>
::::::cc,..;:,.'',;;,'...;xkxoc;,'''....................'';clloddc'....'''''''...;::;,,,,,,;::;;,;;;<br/>
:c:::cc:..;c;'',,,;;,''..'lOkxoc;,''''................,;cclooddl;.....'',,,,,'...;c:::;,,,;;::;;;;;;<br/>
cc:ccc;..;c:,,;;,;;;,''...,lkkxoc:;,,'''''''........',;:cloodo:'...'',,',;;;;;,..;c:c:;,,;;::;;::::c<br/>
cc:cl:..,cc;,::;;;;;,'','...;dkkxolc:;,'''''''''''',,;::cllc;......',,,,;:;;:;;'';c:cc:;;;;;;;::::::<br/>
cccl:..,:::;:cc:;::;;,';;'....;codddoc:;,''''''',,,,,;;,,'........'',,';:::::::,':ccccc::::;;::c::::<br/>
:cc:..,:c:;:ccc::::::;',;;,'......,,;;;,,''''',,,,,,'.............'',,,;:::::::,';c:::cccc:;;:cc::;:<br/>
:c:..'::::;:ccc::cc::;,,;;;;,'...................................'',,;;::ccccc:;,;c:;;ccc::;;:c::;::<br/>
::'.';::::;:ccc::cc:::,,;;,,;;,'.................................',,,;:::cccccc;,;::;,;cc::::::::;:c<br/>
</p>
<p className='ascii-art font-100'>
      {/* split text into individual letters and add "hover-color" class */}
      {'This is an ASCII art generated from my project'.split('').map((letter, index) => (
        <span key={index} className="hover-color" style={{ color }}>
          {letter}
        </span>
      ))}
    </p>
    {/* <p className="tag-font"  style={{ cursor: "pointer"}}>original image - the project</p> */}
    </div>
 
    </div>
    
    <Subtitle/>
    
    <HashLink to="/tech/#uiux-projects" className="tag-font" style={{opacity: "1", color: "#e5e110", cursor: "pointer"}} smooth>Take a look at my UI/UX Projects</HashLink> <br/>
    <HashLink to="/tech/#skills" className="tag-font" style={{opacity: "1", color: "#e5e110", cursor: "pointer"}} smooth>here are all the skills that I bring to the table</HashLink>
  </div>;
}

export default Home;
