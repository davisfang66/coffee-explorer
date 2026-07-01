/* =========================
   Coffee Explorer Filter Map
   按最新数据库原文归类
========================= */

const cleanText = (...values) => {
    return values
      .filter(Boolean)
      .join(" ")
      .toLowerCase()
  }
  
  const hasAny = (text, keywords) => {
    return keywords.some(keyword =>
      text.includes(keyword.toLowerCase())
    )
  }
  
  /* =========================
     处理法分类
     一个咖啡豆可以同时属于多个类别
     例如 Anaerobic Natural = 厌氧发酵 + 日晒
  ========================= */
  
  const processGroups = [
    {
      label: "水洗",
      keywords: [
        "washed",
        "traditional washed",
        "classic washed",
        "advanced washed",
        "enzyflow washed",
        "fully washed",
        "wet process",
        "水洗"
      ]
    },
    {
      label: "日晒",
      keywords: [
        "natural",
        "advanced natural",
        "asd natural",
        "anoxic natural",
        "anaerobic natural",
        "mosto anaerobic natural",
        "special natural",
        "dry process",
        "日晒"
      ]
    },
    {
      label: "蜜处理",
      keywords: [
        "honey",
        "red honey",
        "carbonic maceration honey",
        "蜜处理",
        "红蜜"
      ]
    },
    {
      label: "半水洗/去果皮",
      keywords: [
        "pulped natural",
        "semi-washed",
        "semi washed",
        "depulped",
        "去果皮",
        "半水洗"
      ]
    },
    {
      label: "厌氧/缺氧发酵",
      keywords: [
        "anaerobic",
        "anoxic",
        "asd",
        "mosto",
        "oxygen-free",
        "oxygen free",
        "dry anaerobic",
        "厌氧",
        "缺氧"
      ]
    },
    {
      label: "碳浸",
      keywords: [
        "carbonic",
        "carbonic maceration",
        "二氧化碳",
        "碳浸"
      ]
    },
    {
      label: "共发酵/浸渍",
      keywords: [
        "co-fermented",
        "co fermented",
        "co-ferment",
        "co ferment",
        "co-fermentation",
        "grape co-fermented",
        "infused",
        "infusion",
        "mango and raspberry infused",
        "cherry co-ferment",
        "共发酵",
        "浸渍"
      ]
    },
    {
      label: "特殊发酵",
      keywords: [
        "induced fermentation",
        "assisted fermentation",
        "advanced",
        "enzyflow",
        "fermentation",
        "ferment",
        "特殊发酵"
      ]
    },
    {
      label: "低因",
      keywords: [
        "decaf",
        "decaffeinated",
        "ea decaf",
        "ethyl acetate",
        "sugarcane decaf",
        "sugar-cane decaffeination",
        "e.a. sugarcane",
        "低因",
        "脱因"
      ]
    },
    {
      label: "拼配/混合",
      keywords: [
        "blend",
        "mixed",
        "various",
        "seasonal",
        "blend / mixed",
        "mixed / seasonal",
        "拼配",
        "混合"
      ]
    },
    {
      label: "桶陈/后处理",
      keywords: [
        "barrel aged",
        "barrel",
        "aged",
        "桶陈",
        "陈化"
      ]
    }
  ]
  
  export const getProcessCategories = (coffee) => {
    const text = cleanText(coffee["Process/处理法"])
  
    return processGroups
      .filter(group => hasAny(text, group.keywords))
      .map(group => group.label)
  }
  
  /* =========================
     风味分类
     按手冲咖啡常见感官方向归类
     同一个咖啡豆可以进入多个风味类别
  ========================= */
  
  const flavorGroups = [
    {
      label: "白色花",
      keywords: [
        "jasmine",
        "orange blossom",
        "coffee blossom",
        "magnolia",
        "lime blossom",
        "elderflower",
        "honeysuckle",
        "white flower",
        "white flowers",
        "茉莉",
        "橙花",
        "咖啡花",
        "木兰",
        "椴树花",
        "接骨木花",
        "金银花",
        "白色花"
      ]
    },
    {
      label: "花香",
      keywords: [
        "floral",
        "florals",
        "flower",
        "violet",
        "cherry blossom",
        "chrysanthemum",
        "lavender",
        "hibiscus",
        "rose hip",
        "花香",
        "紫罗兰",
        "樱花",
        "菊花",
        "薰衣草",
        "洛神花",
        "玫瑰果"
      ]
    },
    {
      label: "柑橘",
      keywords: [
        "citrus",
        "orange",
        "mandarin",
        "clementine",
        "tangerine",
        "blood orange",
        "lemon",
        "lime",
        "yuzu",
        "pomelo",
        "grapefruit",
        "bergamot",
        "kumquat",
        "marmalade",
        "candied citrus",
        "柑橘",
        "橙",
        "橘",
        "血橙",
        "柠檬",
        "青柠",
        "柚子",
        "葡萄柚",
        "佛手柑",
        "金桔",
        "橘子酱",
        "糖渍柑橘"
      ]
    },
    {
      label: "热带水果",
      keywords: [
        "tropical",
        "mango",
        "pineapple",
        "passionfruit",
        "passion fruit",
        "papaya",
        "guava",
        "lychee",
        "coconut",
        "tutti frutti",
        "热带",
        "芒果",
        "菠萝",
        "百香果",
        "木瓜",
        "番石榴",
        "荔枝",
        "椰子",
        "什锦水果"
      ]
    },
    {
      label: "莓果",
      keywords: [
        "berry",
        "berries",
        "forest fruits",
        "strawberry",
        "raspberry",
        "blueberry",
        "cranberry",
        "red berry",
        "red berries",
        "莓",
        "森林莓果",
        "草莓",
        "覆盆子",
        "树莓",
        "蓝莓",
        "蔓越莓",
        "红莓",
        "红色莓果"
      ]
    },
    {
      label: "黑色水果",
      keywords: [
        "blackcurrant",
        "blackberry",
        "black cherry",
        "black grape",
        "dark fruit",
        "dark fruits",
        "damson",
        "黑加仑",
        "黑莓",
        "黑樱桃",
        "黑葡萄",
        "黑色水果",
        "西洋李"
      ]
    },
    {
      label: "红色水果",
      keywords: [
        "cherry",
        "sweet cherry",
        "candied cherry",
        "redcurrant",
        "red currant",
        "pomegranate",
        "red grape",
        "red grapes",
        "rhubarb",
        "red fruit",
        "red fruits",
        "樱桃",
        "甜樱桃",
        "糖渍樱桃",
        "红醋栗",
        "红加仑",
        "石榴",
        "红葡萄",
        "大黄",
        "红色水果"
      ]
    },
    {
      label: "核果",
      keywords: [
        "stone fruit",
        "stone fruits",
        "peach",
        "white peach",
        "apricot",
        "nectarine",
        "plum",
        "yellow plum",
        "red plum",
        "greengage",
        "核果",
        "桃",
        "白桃",
        "杏",
        "杏子",
        "油桃",
        "李子",
        "黄李子",
        "红李",
        "青李"
      ]
    },
    {
      label: "苹果梨",
      keywords: [
        "apple",
        "toffee apple",
        "red apple",
        "pink lady apple",
        "pear",
        "tinned pears",
        "pear drops",
        "苹果",
        "太妃苹果",
        "红苹果",
        "粉红佳人苹果",
        "梨",
        "糖水梨",
        "梨味糖"
      ]
    },
    {
      label: "葡萄",
      keywords: [
        "grape",
        "grapes",
        "green grapes",
        "white grape",
        "whitecurrant",
        "currant",
        "currants",
        "raisin",
        "golden raisin",
        "葡萄",
        "青葡萄",
        "白葡萄",
        "白醋栗",
        "葡萄干",
        "金葡萄干",
        "黑加仑干"
      ]
    },
    {
      label: "瓜类",
      keywords: [
        "melon",
        "honeydew",
        "honeydew melon",
        "watermelon",
        "蜜瓜",
        "哈密瓜",
        "西瓜"
      ]
    },
    {
      label: "巧克力/可可",
      keywords: [
        "chocolate",
        "dark chocolate",
        "milk chocolate",
        "chocolate mousse",
        "cocoa",
        "cacao",
        "chocolatey",
        "ferrero rocher",
        "巧克力",
        "黑巧克力",
        "牛奶巧克力",
        "巧克力慕斯",
        "可可",
        "费列罗"
      ]
    },
    {
      label: "焦糖/糖蜜",
      keywords: [
        "caramel",
        "toffee",
        "brown sugar",
        "muscovado",
        "molasses",
        "panela",
        "cane sugar",
        "fudge",
        "maple",
        "焦糖",
        "太妃糖",
        "红糖",
        "黑糖",
        "糖蜜",
        "甘蔗糖",
        "软糖",
        "枫糖"
      ]
    },
    {
      label: "蜂蜜/糖浆",
      keywords: [
        "honey",
        "honeycomb",
        "syrup",
        "syrupy",
        "floral honey",
        "蜂蜜",
        "蜂巢",
        "蜂巢蜜",
        "糖浆",
        "糖浆感",
        "花蜜"
      ]
    },
    {
      label: "坚果",
      keywords: [
        "nut",
        "nuts",
        "nutty",
        "almond",
        "roasted almond",
        "hazelnut",
        "pecan",
        "macadamia",
        "brazil nuts",
        "praline",
        "marzipan",
        "nougat",
        "frangipane",
        "坚果",
        "杏仁",
        "烤杏仁",
        "榛子",
        "山核桃",
        "澳洲坚果",
        "夏威夷果",
        "巴西坚果",
        "果仁糖",
        "杏仁膏",
        "牛轧糖",
        "杏仁奶油"
      ]
    },
    {
      label: "茶感",
      keywords: [
        "tea",
        "black tea",
        "earl grey",
        "sencha",
        "silver needle tea",
        "tea-like",
        "ice tea",
        "barley tea",
        "茶",
        "红茶",
        "伯爵茶",
        "煎茶",
        "银针茶",
        "茶感",
        "冰茶",
        "麦茶"
      ]
    },
    {
      label: "酒感/发酵",
      keywords: [
        "wine",
        "boozy",
        "rum",
        "dark rum",
        "liquor",
        "cherry liquor",
        "sake",
        "fermented",
        "酒",
        "酒感",
        "朗姆",
        "黑朗姆",
        "樱桃酒",
        "发酵感"
      ]
    },
    {
      label: "香料/草本",
      keywords: [
        "spice",
        "spices",
        "sweet spice",
        "baking spice",
        "nutmeg",
        "cardamom",
        "cinnamon",
        "clove",
        "ginger",
        "lemongrass",
        "eucalyptus",
        "rosemary",
        "vanilla",
        "chestnut",
        "香料",
        "甜香料",
        "烘焙香料",
        "肉豆蔻",
        "豆蔻",
        "肉桂",
        "丁香",
        "姜",
        "香茅",
        "桉树",
        "迷迭香",
        "香草",
        "栗子"
      ]
    },
    {
      label: "奶油/顺滑",
      keywords: [
        "cream",
        "creamy",
        "smooth",
        "silky",
        "velvety",
        "buttery",
        "medium body",
        "full body",
        "round body",
        "juicy body",
        "zesty body",
        "dense",
        "rich",
        "奶油",
        "奶油感",
        "顺滑",
        "丝滑",
        "丝绒感",
        "中等醇厚度",
        "厚实",
        "圆润",
        "多汁",
        "清爽口感",
        "浓郁"
      ]
    },
    {
      label: "糖果/甜点",
      keywords: [
        "candy",
        "candied",
        "jelly babies",
        "jam",
        "jammy",
        "coulis",
        "macaron",
        "bakewell",
        "gateau",
        "blackforest",
        "cake",
        "maltloaf",
        "digestive biscuit",
        "marshmallow",
        "french toast",
        "fruit cake",
        "soda",
        "sherbet",
        "糖",
        "糖果",
        "果冻糖",
        "软糖",
        "果酱",
        "莓果酱",
        "马卡龙",
        "杏仁挞",
        "黑森林蛋糕",
        "蛋糕",
        "麦芽蛋糕",
        "消化饼干",
        "棉花糖",
        "法式吐司",
        "水果蛋糕",
        "汽水",
        "冰沙"
      ]
    },
    {
      label: "果干",
      keywords: [
        "dried fruit",
        "dried fruits",
        "dried berries",
        "dried currants",
        "dried pineapple",
        "dates",
        "fig",
        "fruit cake",
        "果干",
        "干莓果",
        "黑加仑干",
        "菠萝干",
        "椰枣",
        "无花果",
        "水果蛋糕"
      ]
    }
  ]
  
  export const getFlavorCategories = (coffee) => {
    const text = cleanText(
      coffee["Flavor EN/英文风味"],
      coffee["Flavor CN/中文风味"]
    )
  
    return flavorGroups
      .filter(group => hasAny(text, group.keywords))
      .map(group => group.label)
  }
  
  /* =========================
     工具函数
  ========================= */
  
  export const uniqueList = (list) => {
    return [...new Set(list.filter(Boolean))]
  }