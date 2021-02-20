import {PageConfig} from "../../utils/interfaces";

const Config: PageConfig = {
  type: "home",
  cssList: [
    "client/styles/category-header.scss",
    "client/styles/carousel.scss",
    "client/styles/card.scss",
    "client/styles/footer.scss"
  ],
  cssLazyList: [],
  hydrationComponets: [
   /*  {
      name: "Demo",
      path: "client/components/Demo.tsx",
      domId: "home",
      isLazyLoad: true,
      attributes: {
        client:"client"
      },
    }, */
    {
      name: "Carousel",
      path: "client/components/carousel/Carousel.tsx",
      domId: "home-carousel",
      isLazyLoad: false,
      attributes: {
        slides:[
          {
            content:
              "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
              image: "banner.jpg"
          },
          {
            content:
              "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
              image: "banner2.jpg"
          },
          {
            content:
              "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
              image: "banner3.jpg"
          },
          {
            content:
              "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
              image: "banner4.jpg"
          },
          {
            content:
              "But it's not who you are underneath... it's what you do that defines you.",
              image: "banner5.jpg"
          },
          {
            content:
              "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
              image: "banner3.jpg"
          },
          {
            content:
              "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
              image: "banner4.jpg"
          },
        ]
      },
    }
  ],
};
if (typeof window !== "undefined") {
  window._pageConfig = [Config];
}

export default Config;
