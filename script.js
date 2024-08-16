let test = [
  "https://google.com/",
  "https://www.yahoo.com/"
];
let clinical = [
  "https://outlook.office.com/",
  "https://apw.swmed.edu/agentportal/#login",
  "https://resources.therigy.com/tas/1.0.0/saml2/utsouthwestern",
  "https://online.lexi.com/lco/action/home",
  "https://www.clinicalkey.com/pharmacology/",
  "https://www.micromedexsolutions.com/micromedex2/librarian?partner=true>"
]

function openMultiURL(links) {
  let urlLog = 'Log:';
  for (let i = 0; i < links.length; i++) {
    let n = window.open('', '_blank');
    n.document.write('Loading...');
    n.location.href = links[i];
    if (n != null) {
      urlLog += '<br>Open successfully: <a target="_blank" href="' + links[i] + '">' + links[i] +'</a>';
    } else {
      urlLog += '<br>Failed to open: <a target="_blank" href="' + links[i] + '">' + links[i] +'</a>';
    }
    document.getElementById('output').innerHTML = urlLog;
  }
}
