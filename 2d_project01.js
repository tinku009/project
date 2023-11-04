function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true ,
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
  
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
  
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
  }
  locomotive();
  
  
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  
  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });
  
  function files(index) {
    var data = `
    ./pro/male0001.png
    ./pro/male0002.png
    ./pro/male0003.png
    ./pro/male0004.png
    ./pro/male0005.png
    ./pro/male0006.png
    ./pro/male0007.png
    ./pro/male0008.png
    ./pro/male0009.png
    ./pro/male0010.png
    ./pro/male0011.png
    ./pro/male0012.png
    ./pro/male0013.png
    ./pro/male0014.png
    ./pro/male0015.png
    ./pro/male0016.png
    ./pro/male0017.png
    ./pro/male0018.png
    ./pro/male0019.png
    ./pro/male0020.png
    ./pro/male0021.png
    ./pro/male0022.png
    ./pro/male0023.png
    ./pro/male0024.png
    ./pro/male0025.png
    ./pro/male0026.png
    ./pro/male0027.png
    ./pro/male0028.png
    ./pro/male0029.png
    ./pro/male0030.png
    ./pro/male0031.png
    ./pro/male0032.png
    ./pro/male0033.png
    ./pro/male0034.png
    ./pro/male0035.png
    ./pro/male0036.png
    ./pro/male0037.png
    ./pro/male0038.png
    ./pro/male0039.png
    ./pro/male0040.png
    ./pro/male0041.png
    ./pro/male0042.png
    ./pro/male0043.png
    ./pro/male0044.png
    ./pro/male0045.png
    ./pro/male0046.png
    ./pro/male0047.png
    ./pro/male0048.png
    ./pro/male0049.png
    ./pro/male0050.png
    ./pro/male0051.png
    ./pro/male0052.png
    ./pro/male0053.png
    ./pro/male0054.png
    ./pro/male0055.png
    ./pro/male0056.png
    ./pro/male0057.png
    ./pro/male0058.png
    ./pro/male0059.png
    ./pro/male0060.png
    ./pro/male0061.png
    ./pro/male0062.png
    ./pro/male0063.png
    ./pro/male0064.png
    ./pro/male0065.png
    ./pro/male0066.png
    ./pro/male0067.png
    ./pro/male0068.png
    ./pro/male0069.png
    ./pro/male0070.png
    ./pro/male0071.png
    ./pro/male0072.png
    ./pro/male0073.png
    ./pro/male0073.png
    ./pro/male0074.png
    ./pro/male0075.png
    ./pro/male0076.png
    ./pro/male0077.png
    ./pro/male0078.png
    ./pro/male0079.png
    ./pro/male0080.png
    ./pro/male0081.png
    ./pro/male0082.png
    ./pro/male0083.png
    ./pro/male0084.png
    ./pro/male0085.png
    ./pro/male0086.png
    ./pro/male0087.png
    ./pro/male0088.png
    ./pro/male0089.png
    ./pro/male0091.png
    ./pro/male0092.png
    ./pro/male0093.png
    ./pro/male0094.png
    ./pro/male0095.png
    ./pro/male0096.png
    ./pro/male0097.png
    ./pro/male0098.png
    ./pro/male0099.png
    ./pro/male0100.png
    ./pro/male0101.png
    
 
   
    
    ./pro/male0101.png
    ./pro/male0102.png
    ./pro/male0103.png
    ./pro/male0104.png
    ./pro/male0105.png
    ./pro/male0106.png
    ./pro/male0107.png
    ./pro/male0108.png
    ./pro/male0109.png
    ./pro/male0110.png
    ./pro/male0111.png
    ./pro/male0112.png
    ./pro/male0113.png
    ./pro/male0114.png
    ./pro/male0115.png
    ./pro/male0116.png
    ./pro/male0117.png
    ./pro/male0118.png
    ./pro/male0119.png
    ./pro/male0120.png
    ./pro/male0121.png
    ./pro/male0122.png
    ./pro/male0123.png
    ./pro/male0124.png
    ./pro/male0125.png
    ./pro/male0126.png
    ./pro/male0127.png
    ./pro/male0128.png
    ./pro/male0129.png
    ./pro/male0130.png
    ./pro/male0131.png
    ./pro/male0132.png
    ./pro/male0133.png
    ./pro/male0134.png
    ./pro/male0135.png
    ./pro/male0136.png
    ./pro/male0137.png
    ./pro/male0138.png
    ./pro/male0139.png
    ./pro/male0140.png
    ./pro/male0141.png
    ./pro/male0142.png
    ./pro/male0143.png
    ./pro/male0144.png
    ./pro/male0145.png
    ./pro/male0146.png
    ./pro/male0147.png
    ./pro/male0148.png
    ./pro/male0149.png
    .pro//male0150.png
    ./pro/male0151.png
    ./pro/male0152.png
    ./pro/male0153.png
    ./pro/male0154.png
    ./pro/male0155.png
    ./pro/male0156.png
    ./pro/male0157.png
    ./pro/male0158.png
    ./pro/male0159.png
    ./pro/male0160.png
    ./pro/male0161.png
    ./pro/male0162.png
    ./pro/male0163.png
    ./pro/male0164.png
    ./pro/male0165.png
    ./pro/male0166.png
    ./pro/male0167.png
    ./pro/male0168.png
    ./pro/male0169.png
    ./pro/male0170.png
    ./pro/male0171.png
    ./pro/male0172.png
    ./pro/male0173.png
    ./pro/male0174.png
    ./pro/male0175.png
    ./pro/male0176.png
    ./pro/male0177.png
    ./pro/male0178.png
    ./pro/male0179.png
    ./pro/male0180.png
    ./pro/male0181.png
    ./pro/male0182.png
    ./pro/male0183.png
    ./pro/male0184.png
    ./pro/male0185.png
    ./pro/male0186.png
    ./pro/male0187.png
    ./pro/male0188.png
    ./pro/male0189.png
    ./pro/male0190.png
    ./pro/male0191.png
    ./pro/male0192.png
    ./pro/male0193.png
    ./pro/male0194.png
    ./pro/male0195.png
    ./pro/male0196.png
    ./pro/male0197.png
    ./pro/male0198.png
    ./pro/male0199.png
    ./pro/male0200.png
    ./pro/male0201.png
    ./pro/male0202.png
    ./pro/male0203.png
    ./pro/male0204.png
    ./pro/male0205.png
    ./pro/male0206.png
    ./pro/male0207.png
    ./pro/male0208.png
    ./pro/male0209.png
    ./pro/male0210.png
    ./pro/male0211.png
    ./pro/male0212.png
    ./pro/male0213.png
    ./pro/male0214.png
    ./pro/male0215.png
    ./pro/male0216.png
    ./pro/male0217.png
    ./pro/male0218.png
    ./pro/male0219.png
    ./pro/male0220.png
    ./pro/male0221.png
    ./pro/male0222.png
    ./pro/male0223.png
    ./pro/male0224.png
    ./pro/male0225.png
    ./pro/male0226.png
    ./pro/male0227.png
    ./pro/male0228.png
    ./pro/male0229.png
    ./pro/male0230.png
    ./pro/male0231.png
    ./pro/male0232.png
    ./pro/male0233.png
    ./pro/male0234.png
    ./pro/male0235.png
    ./pro/male0236.png
    ./pro/male0237.png
    ./pro/male0238.png
    ./pro/male0239.png
    ./pro/male0240.png
    ./pro/male0241.png
    ./pro/male0242.png
    ./pro/male0243.png
    ./pro/male0244.png
    ./pro/male0245.png
    ./pro/male0246.png
    ./pro/male0247.png
    ./pro/male0248.png
    ./pro/male0249.png
    ./pro/male0250.png
    ./pro/male0251.png
    ./pro/male0252.png
    ./pro/male0253.png
    ./pro/male0254.png
    ./pro/male0255.png
    ./pro/male0256.png
    ./pro/male0257.png
    ./pro/male0258.png
    ./pro/male0259.png
    ./pro/male0260.png
    ./pro/male0261.png
    ./pro/male0262.png
    ./pro/male0263.png
    ./pro/male0264.png
    ./pro/male0265.png
    ./pro/male0266.png
    ./pro/male0267.png
    ./pro/male0268.png
    ./pro/male0269.png
    ./pro/male0270.png
    ./pro/male0271.png
    ./pro/male0272.png
    ./pro/male0273.png
    ./pro/male0274.png
    ./pro/male0275.png
    ./pro/male0276.png
    ./pro/male0277.png
    ./pro/male0278.png
    ./pro/male0279.png
    ./pro/male0280.png
    ./pro/male0281.png
    ./pro/male0282.png
    ./pro/male0283.png
    ./pro/male0284.png
    ./pro/male0285.png
    ./pro/male0286.png
    ./pro/male0287.png
    ./pro/male0288.png
    ./pro/male0289.png
    ./pro/male0290.png
    ./pro/male0291.png
    ./pro/male0292.png
    ./pro/male0293.png
    ./pro/male0294.png
    ./pro/male0295.png
    ./pro/male0296.png
    ./pro/male0297.png
    ./pro/male0298.png
    ./pro/male0299.png
    ./pro/male0300.png
`;
       return data.split("\n")[index];
     }
     
     const frameCount = 300;
     
     const images = [];
     const imageSeq = {
       frame: 1,
     };
     
     for (let i = 0; i < frameCount; i++) {
       const img = new Image();
       img.src = files(i);
       images.push(img);
     }
     
     gsap.to(imageSeq, {
       frame: frameCount - 1,
       snap: "frame",
       ease: `none`,
       scrollTrigger: {
         scrub: 0.15,
         trigger: `#page>canvas`,
         start: `top top`,
         end: `600% top`,
         scroller: `#main`,
       },
       onUpdate: render,
     });
     
     images[1].onload = render;
     
     function render() {
       scaleImage(images[imageSeq.frame], context);
     }
     
     function scaleImage(img, ctx) {
       var canvas = ctx.canvas;
       var hRatio = canvas.width / img.width;
       var vRatio = canvas.height / img.height;
       var ratio = Math.max(hRatio, vRatio);
       var centerShift_x = (canvas.width - img.width * ratio) / 2;
       var centerShift_y = (canvas.height - img.height * ratio) / 2;
       ctx.clearRect(0, 0, canvas.width, canvas.height);
       ctx.drawImage(
         img,
         0,
         0,
         img.width,
         img.height,
         centerShift_x,
         centerShift_y,
         img.width * ratio,
         img.height * ratio
       );
     }
     ScrollTrigger.create({
       trigger: "#page>canvas",
       pin: true,
       // markers:true,
       scroller: `#main`,
       start: `top top`,
       end: `600% top`,
     });
     
     
     
     gsap.to("#page1",{
       scrollTrigger:{
         trigger:`#page1`,
         start:`top top`,
         end:`bottom top`,
         pin:true,
         scroller:`#main`
       }
     })
     gsap.to("#page2",{
       scrollTrigger:{
         trigger:`#page2`,
         start:`top top`,
         end:`bottom top`,
         pin:true,
         scroller:`#main`
       }
     })
     gsap.to("#page3",{
       scrollTrigger:{
         trigger:`#page3`,
         start:`top top`,
         end:`bottom top`,
         pin:true,
         scroller:`#main`
       }
     })