const db = {
    // username: {
    //     name: "",
    //     foName: "",
    //     foVideoFile: "video/.mp4",
    //     voicelines: [{
    //         title: `About XXX:`,
    //         content: `<p></p>`,
    //     }, {
    //         title: `About XXX:`,
    //         content: `<p></p>`,
    //     }, {
    //         title: `About XXX: Our Relationship`,
    //         content: `<p></p>`,
    //     }]
    // },
    
    rowavolo: {
        name: "Rowan",
        foName: "neuvillette",
        foVideoFile: "video/neuvillette.mp4",
        voicelines: [{
            title: `About Rowan: An Endearing Presence`,
            content: `<p>Have you met Rowan yet? Yes, the person you just passed on your way in.</p><p>If he ever comes to you for help, Traveler, would you be as kind to inform me? I just wish I could be of more help to him.</p>`
        }, {
            title: `About Rowan: An Oddity`,
            content: `<p>Ah, Rowan... Despite several misunderstandings with the Gardes, he still chooses to remain here instead of returning to his home nation of Mondstadt. Whether that's because of tenacity, stubbornness, or a particularly strong friendship with the Melusine, nobody is quite sure.<p>`
        }, {
            title: `About Rowan: Our Relationship`,
            content: `Yes, I suppose you could say that Rowan is an... acquaintance of mine. We share a similar outlook on many subjects, so it is only natural that we would gravitate towards one another.`
        }]
    },
    lychniis: {
        name: "Aastha",
        foName: "zhongli",
        foVideoFile: "video/zhongli2.mp4",
        voicelines: [{
            title: `About Aastha: Suspicion`,
            content: `<p>Yes, I have seen the good doctor wander the streets of liyue for a while now. She seems rather...insistent on pursuing me for my knowledge on medicinal plants...though her questions do get strangely <i>personal</i>. If I didn't know any better, one would assume she suspects my true identity hahaha.</p>`,
        }, {
            title: `About Aastha: Our Relationship`,
            content: `<p>Every morning before she leaves for work, she always leaves me something to eat. It could be a liyuen dish she had just learned or a sumerian delicacy...thus I took into onto myself to start cooking her lunch. She's always so tired when she returns. Speaking of which...traveler could you spare an errand for me? I may need some bamboo shoots again.</p>`,
        }, {
            title: `About Aastha: Preferential Treatment`,
            content: `<p>Preferential treatment, you say? Hmm, I suppose I can't deny that I think fondly of her. Her presence is comforting and reassuring, so I tend to favor spending more time with her....</p><p>Oh, is that not her three stalls down the street? Why don't we greet our friendー</p><p>ーNo? I see. You must be quite busy with your commissions. Then I shall see you sometime later, Traveler. Have a safe journey.</p>`,
        }]
    },
    faesther: {
        name: "Althea",
        foName: "xiao",
        foVideoFile: "video/xiao.mp4",
        voicelines: [{
            title: `About Althea: Bizarre`,
            content: `<p>Althea is a bizarre character in her own sense; the first time she stepped foot in Liyue, she refused to shed her cloak, knowing the heat in Liyue is the opposite of the snowy mountains in Mondstadt. She mentioned then that her cryo vision kept her cool enough, but... <i>*Ahem*</i> Nevertheless, if it was her who told you to ask me this, then remind her to call out my name- for anything, that is. I will be there regardless of the situation.</p>`,
        }, {
            title: `About Althea: Approach`,
            content: `<p>The best way to approach her? Why would you ask me that? Are you trying to recruit her to join your travels?</p><p>.....</p><p>Well, I know of your nature, so just be yourself and I think she'll warm up to you eventually. I trust you won't harm her in any way... But know that she is a very capable individual.</p>`,
        }, {
            title: `About Althea: Our Relationship`,
            content: `<p>... <i>You</i> wish to know the status of our relationship? Truly..?</p><p>(Xiao sighs for a moment and thinks deeply.)</p><p>We've agreed not to hide it, in any case, so.. perhaps you would call us lovers. For me, this is more than enough.</p>`,
        }]
    },
    xianyoon: {
        name: "Ying",
        foName: "wriothesley",
        foVideoFile: "video/wriothesley2.mp4",
        voicelines: [{
            title: `About Ying: Mine`,
            content: `<p>ying? yeah, that's my girl. what about her?</p>"`,
        }, {
            title: `About Ying: Sunshine`,
            content: `<p>Haha, she's a really bright girl, isn't she? It's like she emits light wherever she goes... Makes you want to protect that shine, doesn't it? Traveler, if you ever think she might be in trouble or if you notice that she looks upset, promise me you'll inform me ASAP, alright?</p>`,
        }, {
            title: `About Ying: Our Relationship`,
            content: `<p>our relationship? i'd describe it as something akin to saccharine sweet. ask my younger self about us and he probably would have scoffed. i wouldn't trade it for anything else, though – being with her always brings me the reassurance that each tomorrow will be better than today. and i think she brings out another part of me. that's what clorinde said.</p>`,
        }]
    },
    "vennnnn-diagram": {
        name: "Joachim",
        foName: "wanderer",
        foVideoFile: "video/wanderer.mp4",
        voicelines: [{
            title: `About Joachim: Tolerable Fool`,
            content: `<p>A fool. But they're a tolerable fool. Naive, but they always offer a new perspective on such obscure topics, it's hard to not keep going back to them. Also... it's nice to be away from people. As long as I get to have time with them, everything else is void. A moment of peace in the long run, for us both.</p>`,
        }, {
            title: `About Joachim: Our Relationship`,
            content: `<p>Why are you asking? What goes on between me and them is none of your business, one would think. If you're so curious, you can stick your nose elsewhere. ...But if you really want to know, they told me themself that they like me and my company. So take that. And leave.</p>`,
        }, {
            title: `About Joachim: Travels`,
            content: `<p>Ugh, you sure are a persistent bunch to keep asking me this. So what if I can tolerate them better than most other pesky humans? Stop gossiping. Don't you have another nation to save or something?</p><p>.... Hah?</p><p>You plan to take them with you on your next journey? What kind of ridiculous bullshit-</p><p>.....</p><p><i>*sigh*</i></p><p><i>Fine. <b>Fine</b>.</i> I'll go with you then. What? Weren't you planning for this all along? Tch...</p>`,
        }]
    },

    "abyssmal-skies": {
        name: "Psyscio",
        foName: "ayaka",
        foVideoFile: "video/ayaka2.mp4",
        voicelines: [{
            title: `About Psyscio: Admiration`,
            content: `<p>You've met her? Oh, she's quite amazing, isn't she? The swordsmanship she uses is quite unique and still so beautiful....</p><p>Hmm? She asked you to give me something? These are her new pastries, i mentioned wanting to try them when i visit her next, but... it seems like she beat me to it.</p>`,
        }, {
            title: `About Psyscio: A letter`,
            content: `<p>The springtime blooms cover the region once more, but i am eagerly preparing for the spring festival. The longer we spend apart, the more my heart hopes that you can make it in time to celebrate with me, i await the moment that you and i can wander the festival stalls and bask in the calm moonlight once more... Yours truly, Ayaka.</p><p>O-oh, i didn't think you heard that... but since you're here... please deliver my letter to Psyscio.</p>`,
        }, {
            title: `About Psyscio: Favorite`,
            content: `<p>Hm? Oh, I see, you saw the others, I presume? Yes, my beloved does have several other lovers, which is only natural given her personality and prowess!</p><p>Still... Please don't tell this to the others, but she's told me several times that I'm her favorite, hehe.</p>`,
        }]
    },
    baizhusangel: {
        name: "Dresvi",
        foName: "baizhu",
        foVideoFile: "video/baizhu2.mp4",
        voicelines: [{
            title: `About Dresvi: My Angel`,
            content: `<p>It has a reason why I call her 'my angel' most of the time. She changed my life for the better, truly. Since the day she came into my life, I feel myself healing bit by bit with each day we get to spend together. She is my remedy, my angel,.. and also, my wife. I feel like the luckiest man alive. I love her so much.</p>`,
        }, {
            title: `About Dresvi: Our Relationship`,
            content: `<p>On the 14th of November, we both experienced a phenomena called 'Love at first sight'. Now, several years passed and everytime we see each other, we still fall all over again for the other one. Our relationship is harmonious and healing in my eyes, and it's everything I could've ever asked for.</p>`,
        }, {
            title: `About Dresvi: Blooming Flowers`,
            content: `<p>Hm? Flowers growing around the pharmacy? Ahaha... I suppose it's the abundance of dendro energy from me and my wife. Yes, she is also a fellow Dendro wielder... But please don't ask her to tag with you on dangerous commissions, Traveler. Given her health, as her husband, I worry for her wellbeing... You understand, don't you?</p>`,
        }]
    },
    silentmoths: {
        name: "Moth",
        foName: "Zhongli",
        foVideoFile: "video/zhongli.mp4",
        voicelines: [{
            title: `About Moth: Endearing`,
            content: `<p>Oh the moth? A rather darling little thing if i do say so... Ive not met something quite so charming in some time.</p>`,
        }, {
            title: `About Moth: Sustenance`,
            content: `<p>Traveler, could you do me a favor? I've heard that you have an acquaintance in Fontaine's fashion industry. Would you be able to enquire them for a reliable textile merchant who would ship their goods to Liyue? I wish to purchase a few fabrics.</p><p>What for? Well, let's just say a certain moth has been wanting to sample some delicacies from other nations...</p>`,
        }, {
            title: `About Moth: Our Relationship`,
            content: `<p>Some might look at Moth and think them strange, seldom speaking, seen and not heard as some would say. Yet when it comes down to it, they have a lot to say, they simply do not communicate in the way most expect...and if I am being completely honest...watching them communicate with their antennae and sign language...it is rather endearing.</p>`,
        }]
    },
    cerberuscaeli: {
        name: "Amy",
        foName: "wriothesley",
        foVideoFile: "video/wriothesley.mp4",
        voicelines: [{
            title: `About Amy: Illusion`,
            content: `<p>You want to know more about Amy? Don't let her shy exterior fool you, she's secretly a very sarcastic type of person with a tsundere personality though she would deny it. She can be a little devil hiding behind an innocent look hahaha.</p>`,
        }, {
            title: `About Amy: Our Relationship`,
            content: `<p>Our relationship? Well, I suppose it's like any other relationship. We match pretty well and aren't really hiding it if I have to be honest. Because why should we hide that we love each other, hmm?</p>`,
        }, {
            title: `About Amy: Commissions`,
            content: `<p>Huh? You're going to ask her to help with some commissions? What kind of commissions? Is it going to be within Fontaine? What are the nature of these tasks? How many people are you bringing?</p><p>Ah...</p><p>Ahem. Sorry, sorry, that was a lot of questions huh? Haha...</p><p>... Do you need a Cryo Vision wielder too, perchance?</p>`,
        }]
    },
    dustofthedailylife: {
        name: "Dust",
        foName: "Alhaitham",
        foVideoFile: "video/alhaitham2.mp4",
        voicelines: [{
            title: `About Dust: Information`,
            content: `<p>Dust? What about her? If you're trying to get information out of me, you won't. I'm afraid you will have to ask her yourself instead. All I will say is that I cherish her a lot. I'm sure you will see why, when you get to meet her, too.</p>`,
        }, {
            title: `About Dust: Our Relationship`,
            content: `<p>My relationship with Dust? Why does it matter to you? Do you perhaps plan to ask her out? Tch, good luck with that. <i>*mischievous smirk*</i></p>`,
        }, {
            title: `About Dust: Plants`,
            content: `<p>Why do I have so many potted plants in my office? ... Why don't you take a guess. Some say dendro vision wielders prefers to be surrounded by nature, hence they tend to furnish their environment to unconsciously surround themselves with it. If you have other theories, I'd be willing to listen.</p><p>... Hm? You've seen Dust carry one of them yesterday? .... Hmph. And here I was hoping you'd engage in a relaxing parley. How unamusing this turned out to be.</p>`,
        }]
    },

    silkjade: {
        name: "Jade",
        foName: "Alhaitham",
        foVideoFile: "video/alhaitham.mp4",
        voicelines: [{
            title: `About Jade: Delicate`,
            content: `<p>There's an old saying among gemologists regarding the durability of jade: that it will not shatter, even against the strike of a hammer. So don't be fooled by that delicate exterior — she's strong... and stubborn as well.</p>`,
        }, {
            title: `About Jade: Precious`,
            content: `<p>Few stones are as charming and precious as jade. In Liyue, it's often a symbol of virtue and beauty, termed as "the concentrated essence of love." I can't help but agree. Make do with that as you will, but I'm sure you can make your inferences from here.</p>`,
        }, {
            title: `About Jade: Our Relationship`,
            content: `<p><i>'You bicker like an old married couple'</i>.... Is that how outsiders see it? How amusing.</p><p>...</p><p>......</p><p>Hm? Did you perhaps wish to drag out more comments from me? This relationship is between the two of us, and seeing as we're both content with what we have, I'm not sure why I should care about other people's views on it.</p>`,
        }]
    },
    soleillunne: {
        name: "Alyssa",
        foName: "kazuha",
        foVideoFile: "video/kazuha.mp4",
        voicelines: [{
            title: `About Alyssa: Companion`,
            content: `<p>Oh, so you've heard of her? Haha she's quite wonderful isn't she? I'm sure everyone in Inazuma would agree as well. Beidou seems especially happy when she decides to visit aboard the Crux, thought I'm not sure if it's to tease me or to spend time with her.</p>`,
        }, {
            title: `About Alyssa: Our Relationship`,
            content: `<p>You wish to know about our relationship? Ah, Alyssa and I are lovers. She's always been dear to me, even when we were children, but we're as close as one can be now. Does that satisfy your curiosity? ... Haha, it's quite alright. I enjoy talking about my beloved, so feel free to ask any questions. I'll do my best to answer.</p>`,
        }, {
            title: `About Alyssa: Longing`,
            content: `<p>Of course I miss her whenever we have to be separated for a while. However, there's a certain charm and perks of writing letters to each other... At this point I'm proud to say that I'm able to discern her mood just by seeing her choice of paper, the way she folded the letter, and a mere glimpse of her handwriting, haha.</p>`,
        }]
    },
    "average-yandere-enjoyer": {
        name: "Crow",
        foName: "ayato",
        foVideoFile: "video/ayato.mp4",
        voicelines: [{
            title: `About Crow: Our Relationship`,
            content: `<p>You mean the bird? Oh, so you meant the young lady that visits on occasion? *He chuckles,* They are quite the interesting individual. They used to be quite the nuisance, too... A crow trying to steal mora or other shiny objects from the estate. Despite the several attempts, they never stole anything. Much to my surprise, during each attempt to escort them off, they spoke and started prophesying days of great misfortune for the clan before leaving and inevitably returning... Each prediction coming true with startling accuracy. Though I realized if we gave her a bit of what she wanted, well... There is a reason that I've decided to employ her.</p>`,
        }, {
            title: `About Crow: Bait`,
            content: `<p>Good day, Traveler. Be careful when you come in. Please don't touch anything on that pile.</p><p>... What are they for, you ask? ... You see, my retainer prophet hasn't been visiting me much lately, so you could say those are... <i>incentives</i>, for them to drop by.</p><p>Are they real, you ask? Why of course! Crows are highly intelligent animals, you know. If I try to lure them with imitation jewelries, I might lose a finger or two, haha.</p>`,
        }]
    },
    navxry: {
        name: "Navina",
        foName: "albedo",
        foVideoFile: "video/albedo.mp4",
        voicelines: [{
            title: `About Navina: Rebirth`,
            content: `<p>It seems that you've met them. ... How can I tell? I can see it in your expression. Furrowed brows, pursed lips... Tell me, have they told you something unusual? ... No? Hm. What a strange phenomenon. I suppose they meant it when they said they'd change for the better.</p>`,
        }, {
            title: `About Navina: Our Relationship`,
            content: `<p>You wish to know more about them? I'm afraid it's not my place to tell. The best advice I could give you is to tread carefully. Sometimes the most unassuming ones are those you must be most cautious about.</p><p>... Me? Haha... I assure you, I wish no one harm... Unless they threaten those I hold dear, of course.</p>`,
        }, {
            title: `About Navina: Irony`,
            content: `<p>'You're all I ever need'... To think I'll never find myself saying it so unironically until now, and with them, too...</p>`,
        }]
    },
    "the-travelling-witch": {
        name: "Holly",
        foName: "tartaglia",
        foVideoFile: "video/tartaglia.mp4",
        voicelines: [{
            title: `About Holly: Witch`,
            content: `<p>Ahaha, of course you'd have heard of Holly, her potions and spells have made quite the waves across Teyvat, huh? It's only natural you'd want to know more about the mysterious witch but... sorry, my lips are sealed. Even if you manage to defeat me in battle, I'm not sharing. Then again, I guess there's one thing I can let you in on. While she tries her best to blend in and appear unassuming, I'd advise you not to try your luck against her. It won't end well for you. Calm waters are deep and all that...</p>`,
        }, {
            title: `About Holly: Our Relationship`,
            content: `<p>Hm? Are Holly and I fighting? Did you hit your head or something?... Oh, you must have seen us sparing earlier. No no, I assure you it's all good between us. I just can't help test my strength against her before she gets absorbed in a new interest of hers again.<p>Hm, I should go check if she has already eaten today...</p><p>What, you're asking how often I've won against her already? Ah, c'mon, must you really embarrass a guy like that?</p>`,
        }, {
            title: `About Holly: Proposal`,
            content: `<p><i>*sigh*</i> Isn't she just so pretty? I can't believe I get to call her my wife... Did you know how nervous I was to propose to her? I kept making sure my mother's ring hadn't fallen out of my pocket, scrubbed all night to wash off all the bloodstains on my clothes, made sure the underlings scout the area and gatekeep the whole vicinity so no one would be able to disturb usー Hey, waitー Traveler, where are you going?? I haven't even gotten to the best part yet!</p>`,
        }]
    },

    "2broschlininahotub": {
        name: "Bryo",
        foName: "xiao",
        foVideoFile: "video/xiao2.mp4",
        voicelines: [{
            title: `About Bryo: A verse`,
            content: `<p>I wish we could hold this time in place. When I see into his head, I could see a million dreams that could change the world. His head is filled with the brightest colors and a heart that shines like the stars in the night sky.</p>`,
        }, {
            title: `About Bryo: Our Relationship`,
            content: `<p>I've observed that mortals like to put on labels to everything, but the complexity of our dynamics isn't something one can describe with one or two words. To keep it simple, he is someone I swore to protect and cherish. That is all you need to know.</p>`,
        }]
    },
    "mochinon-yah": {
        name: "Mochi",
        foName: "alhaitham",
        foVideoFile: "video/alhaitham2.mp4",
        voicelines: [{
            title: `About Mochi: Nomnom?`,
            content: `<p>Before you askー No, you can't eat her.</p><p>.... Paimon, wipe your drool. I was specifically informing you.</p>`,
        }, {
            title: `About Mochi: Surprise`,
            content: `<p>Mochi...? Ah, <i>Mochi</i>. She's my lover—so to speak, why do you ask? Heh. You're surprised? I find it very surprising as well. What do I mean by that? Well, I'd say you better ask her about our first meeting rather than asking me. She always says that I paint the occasion from a much better perspective than how it was. I don't believe her, though. It was a normal meeting on my end, albeit a little interesting.</p>`,
        }, {
            title: `About Mochi: Our Relationship`,
            content: `<p>What of it? It's doing well for both me and her. We don't need the presence of another person entering our relationship, so back off if you have that idea in mind; not that she or I would accept anybody else anyway.</p>`,
        }, {
            title: `About Mochi: Love...?`,
            content: `<p>Hm? Ah, you overheard her, I suppose. Yes, she seems inclined to do that sometimes. A nonsensical behaviour, but one that I find endearing nonetheless.</p><p>The next time you hear her say <i>'Alhaitham, I hate you'</i> or <i>'Alhaitham is a dumdum'</i>, just nod along and let her prattle to her heart's content. It's amusing to watch her cheeks puff up just like her name.</p>`,
        }]
    },
    "queen-belial": {
        name: "Belial",
        foName: "tartaglia",
        foVideoFile: "video/tartaglia.mp4",
        voicelines: [{
            title: `About Belial: Good Joke`,
            content: `<p>Oh, Comrade, how do you know that name? She isn't particularly well known by Outsiders. Hm? You ran into her on a commission and foolishly thought she needed saving? Hahahah... That is quite a good joke.</p>`,
        }, {
            title: `About Belial: Comrades`,
            content: `<p>We are comrades, just like you and I. When I joined the Fatui, She was already The Secretary and let me tell you, I don't know how she does it but every appointment with the different Harbingers, every paperwork... She is always on time. Over the years one thing lead to another and I am proud to call her a friend I can rely on. My siblings and even my parents really like her visits because she always has a different story to tell. It doesn't help that she can bring Capitano to sometimes spar with me.</p>`,
        }, {
            title: `About Belial: Admirer`,
            content: `<p>I suppose you could say I admire her. Capable hands and hard work deserves respect, don't you think so?</p><p>And as for how close we actually are... I think you're going to have to befriend her and see if she'll tell you. How much information they'll decide to divulge to you, that'll be my answer too, heh.</p>`,
        }]
    },
    
    zhongrin: {
        name: "Meirin",
        foName: "zhongli",
        foVideoFile: "video/zhongli.mp4",
        voicelines: [{
            title: `About Meirin: Wife`,
            content: `<p>Hm? Oh, yes, I do have a wife... Haha, why the surprise? Have I not told you this before? Oh dear... It must have slipped my mind...</p><p>Please don't misunderstand, the day I take her for granted would be the day the entirety of Teyvat crumbles to the smallest quarks. I suppose I thought you would have presumed that I was attached... Perhaps I should have worn the wedding band over my gloves after all...?</p>`,
        }, {
            title: `About Meirin: Children`,
            content: `<p>My utmost gratitude for taking the commission to babysit Liwei and Liwen the other day.</p><p>They're quite a handful, aren't they? Haha, I'd say you did your job very well. My apologies again for contacting you so abruptly, but given how my son is still unable to control his form and my daughter's prominent draconic features... The number of people we could ask for help are quite limited.</p><p>Nevertheless, I hope you had a good time with them yesterday. They seem to have taken a liking to you, in fact, and has been asking forー</p><p>.... <i>*chuckles*</i> An urgent business, you say? I see. Well then, you best be on your feet. See you around, Traveler.</p>`,
        }, {
            title: `About Meirin: Past`,
            content: `<p>You wish to hear a story? Very well... I suppose I have time to spare today.</p><p>The storytellers in Liyue do not tell this one tale often, for it has been lost with time... But to the adepti who knew of Rex Lapis back from his younger days, the dragon has always had a companion - one mortal woman. Some say she was the one who discovered and cared for Rex Lapis when he was but a mere hatchling. Ever since, it is said that the soul of that mortal has been reborn, again and again, and the contract between the two causes him to seek her out every single time. It is to this that scholars speculate how dragons mate for life, and why couples who wish for longevity in their relationship always incorporates cor lapis in their wedding rings.</p><p>Is it not a fascinating, fairytale-like story?</p><p>Why am I telling you this? Haha...</p><p>Perhaps I regretted not trying harder to keep this certain tale pass down the generations. But as the witness of this world, I suppose I was hoping someone else other than us two would remember that memory, even after our contract is ultimately fulfilled.</p><p>All journeys must come to an end. Her and I, too... will be but memories, one day.</p>`,
        }]
    },
}