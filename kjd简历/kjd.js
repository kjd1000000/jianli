var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    autoplay: "true",
    on: {
        slideChangeTransitionEnd: function () {
            n = this.activeIndex - 1; //切换结束时，告诉我现在是第几个slide

            switch (n) {
                case -1:
                    loading0(n)
                    setcion1()
                    section2Ctrlz()
                    break;
                case 0:
                    setcion1ctrz(n)
                    loading1(n)
                    section3Ctrlz(n)
                    break;
                case 1:
                    section4Ctrlz(3)
                    section2Ctrlz(n)
                    loading2(n)

                    break;
                case 2:
                    loading3(n)
                    section3Ctrlz(n)
                    section5Ctrlz(4)
                    break;
                case 3:

                    loading4(3)
                    section4Ctrlz(n)
                    break;
                case 4:

                    break;
                case 5:
                    break;
                default:
                    break;
            }
            console.log(n)
        },
    },
})

setcion1()
let i = 0

function music() {
    let $music = $('.music'),
        $audio = $('audio')[0]
    $audio.play();
    $music.on('click', function () {
        var $this = $(this);
        if ($this.hasClass('musicmove')) {
            //让音频停止 清掉定时器
            $audio.pause();
            $this.removeClass('musicmove');
        } else {
            $audio.play();
            $this.addClass('musicmove');
        }
    })
}
music()

function setcion1() {
    let $img = $(".nr1 li:nth-child(1) img"),
        $Resume = $('.Resume'),
        $jian = $('.nr1 li:nth-child(3) img'),
        $li = $('.nr1 li:nth-child(4) img'),
        $li5 = $('.nr1 li:nth-child(5) span'),
        $li6 = $('.nr1 li:nth-child(6) img'),
        $li7 = $('.nr1 li:nth-child(7) span'),
        $li8Img = $('.nr1 li:nth-child(8) img'),
        $navFoot = $('footer span'),
        i = 0



    setTimeout(() => {
        $img.css({
            transform: 'scale(1)'
        })
        $Resume.css({
            opacity: 0.5,
            transform: 'translateY(0)'
        })
        $jian.css({
            transform: 'translateY(0) rotateZ(360deg)',
            opacity: 1,

        })
        $li.css({
            transform: 'translateY(0) rotateZ(360deg)',
            opacity: 1,
        })
        $li5.css({
            transform: "scale(1)"
        })
        $li6.css({
            transform: "scale(1)"
        })
        $li7.css({
            transform: "scale(1)"
        })
        $navFoot.css({
            opacity: 1
        })
    }, 1300);



    // requestAnimationFrame(animate);
    let timer = setInterval(() => {

        $li8Img.get(i).style.display = "block"
        i += 1
        if (i >= 5) {
            clearInterval(timer)
        }

    }, 300);
}

function setcion1ctrz(index) {
    let $img = $(".nr1 li:nth-child(1) img"),
        $Resume = $('.Resume'),
        $jian = $('.nr1 li:nth-child(3) img'),
        $li = $('.nr1 li:nth-child(4) img'),
        $li5 = $('.nr1 li:nth-child(5) span'),
        $li6 = $('.nr1 li:nth-child(6) img'),
        $li7 = $('.nr1 li:nth-child(7) span'),
        $li8Img = $('.nr1 li:nth-child(8) img'),
        $navFoot = $('footer span'),
        i = 0,
        $loading = $(".loading").eq(index)




    $loading.css({
        opacity: 1
    })
    $img.css({
        transform: ''
    })
    $Resume.css({
        opacity: 0,
        transform: ''
    })
    $jian.css({
        transform: '',
        opacity: 0,

    })
    $li.css({
        transform: '',
        opacity: 0,
    })
    $li5.css({
        transform: ""
    })
    $li6.css({
        transform: ""
    })
    $li7.css({
        transform: ""
    })
    $navFoot.css({
        opacity: 0
    })




    // requestAnimationFrame(animate);
    for (let i = 0;  i < 5;i++) {
        $li8Img.get(i).style.display = "none"
    }




}

function loading0(index) {
    setcion1()
    loading(index)
}
loading0(-1)

function setcion2(index) {
    let $sect2Img = $(".nr2>img"),
        $bodyer = $(".nr2 .bodyer"),
        $lufei = $(".nr2 .lufei"),
        $personel = $(".nr2 .personel"),
        $hooby = $(".nr2 .hooby"),
        $sex = $(".nr2 .sex"),
        $leaf = $(".nr2 .leaf img"),
        i = 0
    imgAppear(index)
    setTimeout(() => {
        // $sect2Img.css({
        //     opacity: 1,
        //     transform: "translateY(0)"
        // })
        // $bodyer.css({
        //     opacity: 1,
        //     transform: "scale(1)"
        // })
        $lufei.css({
            opacity: 1,
            transform: "scale(1)"
        })
        $personel.css({
            opacity: 1,
            transform: "translateY(0)"
        })
        $hooby.css({
            opacity: 1,
            transform: "translateY(0)"
        })
        $sex.css({
            opacity: 1,
            transform: "translateY(0)"
        })

    }, 1000);
    let timer = setInterval(() => {

        $leaf.get(i).style.display = "block"
        i += 1
        if (i >= 5) {
            clearInterval(timer)
        }

    }, 1700);

}



function loading(index) {
    index += 1
    let $nr2 = $(".nr2")
    let i = 0;
    let $loading = $(".loading")
    let $topLi = $('.topLi')

    let $bottomLi = $('.bottomLi')
    $loading = $loading.eq(index)
    $topLi = $topLi.eq(index) //获取哪个加载$topLi
    $bottomLi = $bottomLi.eq(index)
    setTimeout(() => {
        setTimeout(() => {
            $nr2.css({
                opacity: 1
            })
            $loading.css({
                opacity: '0'
            })
        }, 1500);
        // setTimeout(() => {
        //     $loading.css({
        //         display:"none"
        //     })
        // }, 3000);
        $topLi.css({
            opacity: 0
        })
        $bottomLi.css({
            opacity: 0
        })
    }, 1);
    let n = 10

    let timer = setInterval(() => {


        $topLi.find('li')[i].style.animation = "loadingTop 1s linear"
        $topLi.find('li')[i].style.animationFillMode = "forwards"
        $topLi.find('li')[i].style.opacity = 1
        $topLi.find('li')[n].style.animation = "loadingTop 1s linear"
        $topLi.find('li')[n].style.opacity = 1
        $topLi.find('li')[n].style.animationFillMode = "forwards"
        $bottomLi.find('li')[i].style.transform = "translateY(0)"
        $bottomLi.find('li')[i].style.opacity = 1
        $bottomLi.find('li')[n].style.transform = "translateY(0)"
        $bottomLi.find('li')[n].style.opacity = 1
        i += 1
        n = 10 - i
        if (i >= 6) {
            clearInterval(timer)
        }
    }, 100);
    setTimeout(() => {
        loadCtrz(index)
    }, 2500);

} //加载条
function loading1(index) {
    loading(index)
    setcion2(index)
}

function loadCtrz(index) {
    // let i = 0;

    let $topLi = $('.topLi')
    let $bottomLi = $('.bottomLi')
    let $loading = $(".loading").eq(index)
    
        $topLi.css({
            opacity: 1
        })

        $bottomLi.css({
            opacity: 1
        })
        // $loading.css({
        //     opacity:1
        // })
   


    $topLi = $topLi.eq(index) //获取哪个加载$topLi
    $bottomLi = $bottomLi.eq(index)
    let n = 10

    for (let i = 0; i < 6; i++) {
        $topLi.find('li')[i].style.animation = ""
        $topLi.find('li')[i].style.animationFillMode = ""
        $topLi.find('li')[i].style.opacity = 0
        $topLi.find('li')[n].style.animation = ""
        $topLi.find('li')[n].style.opacity = 0
        $topLi.find('li')[n].style.animationFillMode = ""
        $bottomLi.find('li')[i].style.transform = ""
        $bottomLi.find('li')[i].style.opacity = 0
        $bottomLi.find('li')[n].style.transform = ""
        $bottomLi.find('li')[n].style.opacity = 0
        n = n - 1
    }


} //加载条取消 与复原
function section2Ctrlz() {
    let $sect2Img = $(".nr2>img"),
        $bodyer = $(".nr2 .bodyer"),
        $lufei = $(".nr2 .lufei"),
        $personel = $(".nr2 .personel"),
        $hooby = $(".nr2 .hooby"),
        $sex = $(".nr2 .sex"),
        $leaf = $(".leaf img")



    $sect2Img.css({
        opacity: 0,
        transform: ""
    })
    $bodyer.css({
        opacity: 0,
        transform: ""
    })
    $lufei.css({
        opacity: 0,
        transform: ""
    })
    $personel.css({
        opacity: 0,
        transform: ""
    })
    $hooby.css({
        opacity: 0,
        transform: ""
    })
    $sex.css({
        opacity: 0,
        transform: ""
    })
    let $loading = $(".loading")

    $loading.css({ //////////////////////////////////////////////全体加载条复原
        opacity: 1
    })

    // let timer = setInterval(() => {

    //     $leaf.get(i).style.display = "none"
    //     i += 1
    //     if (i >= 5) {
    //         clearInterval(timer)
    //     }

    // }, 1700);
}

function imgAppear(index) {
    $sectImg = $(".picture").eq(index)
    $sectImg.css({
        opacity: 1,
        transform: "translateY(0)"
    })

    $sectBack = $(".bodyer").eq(index)
    $sectBack.css({
        opacity: 1,
        transform: "scale(1)"
    })
}

function imgAppearCtrz(index) {
    index = index - 1
    $sectImg = $(".picture").eq(index)
    $sectImg.css({
        opacity: 0,
        transform: ""
    })

    $sectBack = $(".bodyer").eq(index)
    $sectBack.css({
        opacity: 0,
        transform: ""
    })
}

function setcion3(index) {
    imgAppear(index)
    let $sectP = $(".nr3 .sectbody p")
    $sectP.css({
        opacity: 1,
        transform: 'translateX(0)'
    })

    let $sectUl = $(".sectbody ul")
    $sectUl.css({
        opacity: 1,
        transform: 'translateX(0)'
    })


}

function loading2(index) {
    loading(index)
    setcion3(index)
}

function section3Ctrlz(index) {
    index = index - 1
    let $sectP = $(".sectbody p")
    $sectP.css({
        opacity: 0,
        transform: ''
    })

    let $sectUl = $(".sectbody ul")
    $sectUl.css({
        opacity: 0,
        transform: ''
    })
    $sectImg = $(".picture").eq(index)
    $sectImg.css({
        opacity: 0,
        transform: ""
    })

    $sectBack = $(".bodyer").eq(index)
    $sectBack.css({
        opacity: 0,
        transform: ""
    })
    // imgAppearCtrz(index)
}

function setcion4(index) {
    $leaf = $(".nr4 .leaf img"),
        i = 0
    let timer = setInterval(() => {

        $leaf.get(i).style.display = "block"
        i += 1
        if (i >= 5) {
            clearInterval(timer)
        }

    }, 500);
    setTimeout(() => {
        let $sectP = $(".sectbody p")
        $sectP.css({
            opacity: 1,
            transform: 'translateX(0)'
        })

        let $sectUl = $(".sectbdbody")
        $sectUl.css({
            opacity: 1,
            transform: 'translateX(0.5rem)'
        })
        let $black1 = $(".black1")
        let $black2 = $(".black2")
        let $black3 = $(".black3")
        $black1.css({
            opacity: 1,
            transform: "translate(0)  rotate(0deg)"
        })
        $black2.css({
            opacity: 1,
            transform: "translate(0)  rotate(0deg)"
        })
        $black3.css({
            opacity: 1,
            transform: "translate(0)  rotate(0deg)"
        })
    }, 1500);
    imgAppear(index)
}

function loading3(index) {
    loading(index)
    setcion4(index)
}

function section4Ctrlz(index) {
    imgAppearCtrz(index)

    $leaf = $(".nr4 .leaf img"),
        i = 0
    for (let i = 0; i < 5; i++) {
        $leaf.get(i).style.display = "none"
    }
   
        let $sectP = $(".nr4 .sectbody p")
        $sectP.css({
            opacity: 0,
            transform: ''
        })

        let $sectUl = $(".nr4 .sectbdbody")
        $sectUl.css({
            opacity: 0,
            transform: ''
        })
        let $black1 = $(".black1")
        let $black2 = $(".black2")
        let $black3 = $(".black3")
        $black1.css({
            opacity: 0,
            transform: ""
        })
        $black2.css({
            opacity: 0,
            transform: ""
        })
        $black3.css({
            opacity: 0,
            transform: ""
        })
   
}

function setcion5(index) {
    imgAppear(index)
    let $thanks = $(".thanks"),
        $img = $(".nr5 img"),
        $phoning = $(".phoning"),
        $myplay = $(".myplay");
    setTimeout(function () {
        $phoning.css({
            transform: 'translateX(0.25rem) translateY(0.3rem)',
            opacity: 1
        })

        $myplay.css({
            opacity: 1,
            transform: 'translateX(1.5rem)'
        })
        $thanks.css({
            transform: 'scale(1)'
        })
        $img.css({
            transform: 'scale(1)'
        })
    }, 2000)
}

function loading4(index) {
    loading(3)
    setcion5(index)
}
loading4(3)

function section5Ctrlz(index) {
    $loading = $(".loading")
    imgAppearCtrz(index)
    let $thanks = $(".thanks"),
        $img = $(".nr5 img"),
        $phoning = $(".phoning"),
        $myplay = $(".myplay");
    
        $phoning.css({
            transform: '',
            opacity: 0
        })

        $myplay.css({
            opacity: 0,
            transform: ''
        })
        $thanks.css({
            transform: ''
        })
        $img.css({
            transform: ''
        })
    
    $loading.css({ //////////////////////////////////////////////全体加载条复原
        opacity: 1
    })
}