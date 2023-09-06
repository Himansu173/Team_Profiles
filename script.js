function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function himansu(){
    var show=document.getElementById('show');
    var ids = document.querySelectorAll('#gyana, #sudhansu, #subham, #banty, #sujit, #panda, #satya, #mukesh');
    ids.forEach(element=>{
        element.style.cssText='box-shadow: none; border-color: none; transition: 0.3s;';
    })
    document.getElementById('himansu').style.cssText=`box-Shadow: 0 0 25px #ff004f; border-color: #ff004f; transition: 0.2s;`;
    show.style.cssText=`transition: 0.35s ease-in-out; transform: translate(-50%, -50%) scale(0);`;
    await sleep(350);
    document.getElementById('photo').innerHTML=`<img src="himansu.jpg" alt="img">`;
    document.getElementById('name').innerText='HIMANSU S LENKA';
    document.getElementById('tag').innerText='THE PROGRAMMER';
    document.getElementById('links').innerHTML=`
    <a href="https://www.instagram.com/himansu__173/" target="blank"><img src="insta.png" alt="linkedin"></a>
    <a href="https://www.linkedin.com/in/himansu-sekhar-lenka-704333263" target="blank"><img src="linkedin.png" alt="linkedin"></a>
    <a href="https://github.com/Himansu173" target="blank"><img src="github.png" alt="linkedin"></a>
    <a href="https://www.facebook.com/himansus.lenka.9/" target="blank"><img src="facebook.png" alt="linkedin"></a>`;
    show.style.cssText=`transition: 0.35s ease-in-out;`;
}

async function gyana(){
    var show=document.getElementById('show');
    var ids = document.querySelectorAll('#himansu, #sudhansu, #subham, #banty, #sujit, #panda, #satya, #mukesh');
    ids.forEach(element=>{
        element.style.cssText='box-shadow: none; border-color: none; transition: 0.3s;';
    })
    document.getElementById('gyana').style.cssText=`box-Shadow: 0 0 25px #ff004f; border-color: #ff004f; transition: 0.2s`;
    show.style.cssText=`transition: 0.35s ease-in-out; transform: translate(-50%, -50%) scale(0);`;
    await sleep(350);
    document.getElementById('photo').innerHTML=`<img src="gyana.jpg" alt="img">`;
    document.getElementById('name').innerText='GYANA R JENA';
    document.getElementById('tag').innerText='THE INNOCENCE';
    document.getElementById('links').innerHTML=`
    <a href="https://instagram.com/gyana_0?utm_source=qr&igshid=OGU0MmVlOWVjOQ%3D%3D " target="blank"><img src="insta.png" alt="linkedin"></a>
    <a href="https://www.linkedin.com/in/gyana-ranjan-jena-53013b267" target="blank"><img src="linkedin.png" alt="linkedin"></a>
    <a href="https://github.com/gyana-jena" target="blank"><img src="github.png" alt="linkedin"></a>
    <a href="#" target="blank"><img src="facebook.png" alt="linkedin"></a>`;
    show.style.cssText=`transition: 0.35s ease-in-out;`;
}

async function sudhansu(){
    var show=document.getElementById('show');
    var ids = document.querySelectorAll('#himansu, #gyana, #subham, #banty, #sujit, #panda, #satya, #mukesh');
    ids.forEach(element=>{
        element.style.cssText='box-shadow: none; border-color: none; transition: 0.3s;';
    })
    document.getElementById('sudhansu').style.cssText=`box-Shadow: 0 0 25px #ff004f; border-color: #ff004f; transition: 0.2s`;
    show.style.cssText=`transition: 0.35s ease-in-out; transform: translate(-50%, -50%) scale(0);`;
    await sleep(350);
    document.getElementById('photo').innerHTML=`<img src="sudhansu.jpg" alt="img">`;
    document.getElementById('name').innerText='SUDHANSU SAHOO';
    document.getElementById('tag').innerText='THE LOVER';
    document.getElementById('links').innerHTML=`
    <a href=""><img src="insta.png" alt="linkedin"></a>
    <a href=""><img src="linkedin.png" alt="linkedin"></a>
    <a href=""><img src="github.png" alt="linkedin"></a>
    <a href=""><img src="facebook.png" alt="linkedin"></a>`;
    show.style.cssText=`transition: 0.35s ease-in-out;`;
}

async function subham(){
    var show=document.getElementById('show');
    var ids = document.querySelectorAll('#himansu, #gyana, #sudhansu, #banty, #sujit, #panda, #satya, #mukesh');
    ids.forEach(element=>{
        element.style.cssText='box-shadow: none; border-color: none; transition: 0.3s;';
    })
    document.getElementById('subham').style.cssText=`box-Shadow: 0 0 25px #ff004f; border-color: #ff004f; transition: 0.2s`;
    show.style.cssText=`transition: 0.35s ease-in-out; transform: translate(-50%, -50%) scale(0);`;
    await sleep(350);
    document.getElementById('photo').innerHTML=`<img src="subham.jpg" alt="img">`;
    document.getElementById('name').innerText='SUBVAM S MISHRA';
    document.getElementById('tag').innerText='THE JOB-HUNTER';
    document.getElementById('links').innerHTML=`
    <a href="https://instagram.com/shuvam_mishra14?igshid=MzNlNGNkZWQ4Mg==" target="blank"><img src="insta.png" alt="linkedin"></a>
    <a href="https://www.linkedin.com/in/shuvam-sailendra-mishra-2b8182262" target="blank"><img src="linkedin.png" alt="linkedin"></a>
    <a href="https://github.com/ShuvamSailendraMishra" target="blank"><img src="github.png" alt="linkedin"></a>
    <a href="https://www.facebook.com/subhams.mishra.9?mibextid=b06tZ0" target="blank"><img src="facebook.png" alt="linkedin"></a>`;
    show.style.cssText=`transition: 0.35s ease-in-out;`;
}

async function sujit(){
    var show=document.getElementById('show');
    var ids = document.querySelectorAll('#himansu, #gyana, #sudhansu, #banty, #subham, #panda, #satya, #mukesh');
    ids.forEach(element=>{
        element.style.cssText='box-shadow: none; border-color: none; transition: 0.3s;';
    })
    document.getElementById('sujit').style.cssText=`box-Shadow: 0 0 25px #ff004f; border-color: #ff004f; transition: 0.2s`;
    show.style.cssText=`transition: 0.35s ease-in-out; transform: translate(-50%, -50%) scale(0);`;
    await sleep(350);
    document.getElementById('photo').innerHTML=`<img src="sujit.jpg" alt="img">`;
    document.getElementById('name').innerText='SUJIT K PALAI';
    document.getElementById('tag').innerText='THE COMEDIAN';
    document.getElementById('links').innerHTML=`
    <a href="https://www.instagram.com/invites/contact/?i=1xb8wo6bki61i&utm_content=5co3h3r" target="blank"><img src="insta.png" alt="linkedin"></a>
    <a href="http://linkedin.com/in/sujitkumarpalai" target="blank"><img src="linkedin.png" alt="linkedin"></a>
    <a href="https://github.com/5ujitkumar" target="blank"><img src="github.png" alt="linkedin"></a>
    <a href="https://www.facebook.com/profile.php?id=100025297639212&mibextid=ZbWKwL" target="blank"><img src="facebook.png" alt="linkedin"></a>`;
    show.style.cssText=`transition: 0.35s ease-in-out;`;
}

async function banty(){
    var show=document.getElementById('show');
    var ids = document.querySelectorAll('#himansu, #gyana, #sudhansu, #sujit, #subham, #panda, #satya, #mukesh');
    ids.forEach(element=>{
        element.style.cssText='box-shadow: none; border-color: none; transition: 0.3s;';
    })
    document.getElementById('banty').style.cssText=`box-Shadow: 0 0 25px #ff004f; border-color: #ff004f; transition: 0.2s`;
    show.style.cssText=`transition: 0.35s ease-in-out; transform: translate(-50%, -50%) scale(0);`;
    await sleep(350);
    document.getElementById('photo').innerHTML=`<img src="banty.jpg" alt="img">`;
    document.getElementById('name').innerText='KIRTINATH SAHOO';
    document.getElementById('tag').innerText='THE ALL-ROUNDER';
    document.getElementById('links').innerHTML=`
    <a href=""><img src="insta.png" alt="linkedin"></a>
    <a href=""><img src="linkedin.png" alt="linkedin"></a>
    <a href=""><img src="github.png" alt="linkedin"></a>
    <a href=""><img src="facebook.png" alt="linkedin"></a>`;
    show.style.cssText=`transition: 0.35s ease-in-out;`;
}

async function panda(){
    var show=document.getElementById('show');
    var ids = document.querySelectorAll('#himansu, #gyana, #sudhansu, #sujit, #subham, #banty, #satya, #mukesh');
    ids.forEach(element=>{
        element.style.cssText='box-shadow: none; border-color: none; transition: 0.3s;';
    })
    document.getElementById('panda').style.cssText=`box-Shadow: 0 0 25px #ff004f; border-color: #ff004f; transition: 0.2s`;
    show.style.cssText=`transition: 0.35s ease-in-out; transform: translate(-50%, -50%) scale(0);`;
    await sleep(350);
    document.getElementById('photo').innerHTML=`<img src="panda.jpg" alt="img">`;
    document.getElementById('name').innerText='ASHUTOSH PANDA';
    document.getElementById('tag').innerText='THE NONSENCE';
    document.getElementById('links').innerHTML=`
    <a href=""><img src="insta.png" alt="linkedin"></a>
    <a href=""><img src="linkedin.png" alt="linkedin"></a>
    <a href=""><img src="github.png" alt="linkedin"></a>
    <a href=""><img src="facebook.png" alt="linkedin"></a>`;
    show.style.cssText=`transition: 0.35s ease-in-out;`;
}

async function satya(){
    var show=document.getElementById('show');
    var ids = document.querySelectorAll('#himansu, #gyana, #sudhansu, #sujit, #subham, #banty, #panda, #mukesh');
    ids.forEach(element=>{
        element.style.cssText='box-shadow: none; border-color: none; transition: 0.3s;';
    })
    document.getElementById('satya').style.cssText=`box-Shadow: 0 0 25px #ff004f; border-color: #ff004f; transition: 0.2s`;
    show.style.cssText=`transition: 0.35s ease-in-out; transform: translate(-50%, -50%) scale(0);`;
    await sleep(350);
    document.getElementById('photo').innerHTML=`<img src="satya.jpg" alt="img">`;
    document.getElementById('name').innerText='SATYA S DAS';
    document.getElementById('tag').innerText='THE CINEPHILE';
    document.getElementById('links').innerHTML=`
    <a href=""><img src="insta.png" alt="linkedin"></a>
    <a href=""><img src="linkedin.png" alt="linkedin"></a>
    <a href=""><img src="github.png" alt="linkedin"></a>
    <a href=""><img src="facebook.png" alt="linkedin"></a>`;
    show.style.cssText=`transition: 0.35s ease-in-out;`;
}

async function mukesh(){
    var show=document.getElementById('show');
    var ids = document.querySelectorAll('#himansu, #gyana, #sudhansu, #sujit, #subham, #banty, #panda, #satya');
    ids.forEach(element=>{
        element.style.cssText='box-shadow: none; border-color: none; transition: 0.3s;';
    })
    document.getElementById('mukesh').style.cssText=`box-Shadow: 0 0 25px #ff004f; border-color: #ff004f; transition: 0.2s`;
    show.style.cssText=`transition: 0.35s ease-in-out; transform: translate(-50%, -50%) scale(0);`;
    await sleep(350);
    document.getElementById('photo').innerHTML=`<img src="mukesh.jpg" alt="img">`;
    document.getElementById('name').innerText='MUKESH K MALLIK';
    document.getElementById('tag').innerText='THE INFORMER';
    document.getElementById('links').innerHTML=`
    <a href="https://instagram.com/mukesh_mallick_?utm_source=qr&igshid=OGIxMTE0OTdkZA" target="blank"><img src="insta.png" alt="linkedin"></a>
    <a href="https://www.linkedin.com/in/mukesh-kumar-mallick-0b8482250" target="blank"><img src="linkedin.png" alt="linkedin"></a>
    <a href="https://github.com/MukeshKumarMallick" target="blank"><img src="github.png" alt="linkedin"></a>
    <a href="https://www.facebook.com/profile.php?id=100054624485148" target="blank"><img src="facebook.png" alt="linkedin"></a>`;
    show.style.cssText=`transition: 0.35s ease-in-out;`;
}