/*
 * サイトのデータ（論文・研究テーマ・学会発表など）
 * ------------------------------------------------------------
 * 論文を追加するときは PAPERS の先頭に1件追加するだけで、
 * 「研究」タブの論文解説と「論文・学会」タブのリストの両方に反映されます。
 *
 * PAPERS の各項目:
 *   id        : 一意なID（URLの #paper-<id> で直接リンクできます）
 *   year      : 出版年
 *   theme     : THEMES の id（研究タブの絞り込みに使用）
 *   authors   : 著者（自分の名前は <b></b> で囲む）
 *   title     : 論文タイトル（HTML可）
 *   journal   : 雑誌名
 *   volume    : 巻号・ページなど
 *   url       : 論文リンク
 *   oa        : オープンアクセスなら true
 *   links     : 追加リンク [{ label, url }]（プレスリリース等）
 *   award     : 受賞 { label, url }（任意）
 *   headline  : 日本語のひとこと解説（カードの見出し）
 *   summary   : 解説本文（HTML可、段落ごとに配列）
 *   points    : ポイント（箇条書き、任意）
 *   figure    : { src, alt, caption }（任意。無い場合は図なしで表示）
 *               図は img/figures/ に置くのがおすすめ（クリックで拡大表示されます）
 *
 * THEMES の imageFit: "contain" を指定すると、画像を切り抜かず全体を表示します。
 */

window.SITE_DATA = {
  themes: [
    {
      id: "terrestrial",
      title: "ポリプテルスの陸上適応",
      en: "Terrestrial adaptation of Polypterus",
      image: "img/Polypterus.png",
      imageAlt: "ポリプテルス",
      imageFit: "contain",
      lead: "肺呼吸ができ、陸上でも長期飼育が可能な古代魚ポリプテルス。陸上で体内の器官がどう変化するのかを遺伝子発現から明らかにしています。",
      body: [
        "魚と両生類の中間に位置する生物は絶滅しています。ただ、そうした初期の四肢動物に近い魚は現在でも何種か知られており、ハイギョなどが相当します。ハイギョはその名の通り肺呼吸できるため、陸上で生存可能ですが、一週間程で繭を作って乾眠(夏眠)してしまいます。乾眠してしまうと、陸上環境での生存というよりかは代謝を抑えて\"温存\"態勢に入ってしまうため、初期の陸上動物がどう陸上で生き延びたかを明らかにする上で障壁となってしまいます。",
        "もう少し遡って分岐した魚に「ポリプテルス」がいます。ポリプテルスはSpiracleと呼ばれる頭の上の穴で、初期の四肢動物と同じように肺呼吸をします(Graham et al., 2014)。そしてポリプテルスは陸上でも長期飼育が可能であることが知られています(Standen et al., 2014)。しかし陸上で長期生存可能であるにも関わらず、その遺伝的基盤などのメカニズムはまだ明らかではありません。私はこのポリプテルスという魚を陸上で飼育し、体内の器官(内臓)の遺伝子発現がどのような変化を見せるのか、そしてそれが陸上適応とどう関わりがあるのかを明らかにしています。",
        "また、最近になってポリプテルスやハイギョのゲノムが解読されました。これらの種のゲノムを解析することで、水中から陸上へと進出する際にどのような配列レベルでの変化が起きたのかを明らかにします。"
      ]
    },
    {
      id: "cilia",
      title: "ポリプテルスのエラの繊毛",
      en: "Motile cilia in the gills",
      image: "img/polypterus_land.jpg",
      imageAlt: "陸上環境で飼育されたポリプテルス",
      lead: "陸上飼育したポリプテルスのエラで、条鰭類では知られていなかった繊毛の存在と、その陸上での消失を発見しました。",
      body: [
        "人工的に陸上環境で飼育をしてやることで、ポリプテルスのエラに驚くべき変化を見つけました。そもそも条鰭類(一般的な魚)のエラに繊毛(非常に小さい毛のような構造体)が存在することは知られていませんでしたが、ポリプテルスのエラに繊毛が存在し、さらに陸上で消失することを発見しました。"
      ]
    },
    {
      id: "keratin",
      title: "水陸両生魚のケラチン",
      en: "Keratin genes of amphibious fishes",
      image: "img/Lungfish_aestivation.jpg",
      imageAlt: "乾眠するハイギョ",
      lead: "皮膚の保湿に関わるケラチンに着目し、魚類から両生類・哺乳類にかけて遺伝子重複や多様化が独立に何度も起きたことを示しました。",
      body: [
        "写真はハイギョが乾眠している様子です。ハイギョやポリプテルスは陸上適応能力を持っていますが、皮膚の保湿機構などはよくわかっていません。そこで私はケラチンに着目しました。ケラチンは私達の皮膚や髪の毛の構成成分です。",
        "ポリプテルスやハイギョのゲノムから、ケラチン遺伝子を分析し、魚類から両生類、哺乳類にかけて何度も独立に遺伝子重複や多様化が起きたことがわかってきました。"
      ]
    },
    {
      id: "genome",
      title: "ゲノム巨大化の進化",
      en: "Evolution of giant genomes",
      image: "img/large_genome_Transposon.png",
      imageAlt: "脊椎動物ゲノムのトランスポゾン組成",
      imageFit: "contain",
      lead: "ハイギョや有尾両生類がもつ20〜40Gb以上の巨大ゲノム。イモリのゲノム解読に参加し、トランスポゾンの観点から巨大化の過程を解析しています。",
      body: [
        "ハイギョや有尾両生類は他の一般的な脊椎動物(1〜3Gb)と比較してかなり大きな(20Gb〜40Gb以上)ゲノムを持つことで知られています。ゲノムが巨大化することは複製時の時間・リソースコストが高くなる上に、核、細胞の肥大化を伴います。一方でハイギョやイモリ・サンショウウオなどでは高い器官再生能力を持つことが知られており、再生医療のモデルとして注目されています。",
        "巨大ゲノムは反復配列(トランスポゾンなど)に富むことで知られており、私はハイギョゲノムが決定されるまでハイギョと四肢動物の共通祖先は巨大ゲノムを持っていたのではないかと考えていました。しかしハイギョゲノムの発表とともにその考えは否定されました(<a href=\"https://doi.org/10.1016/j.cell.2021.01.047\" target=\"_blank\" rel=\"noopener\">Wang et al., 2021</a>)。ハイギョと有尾両生類は独立にゲノム巨大化を辿ったというのです。",
        "当時は有尾両生類はアホロートル(ウーパールーパー)だけしか読まれておらず、より多種で比較するべきだと考え、イベリアトゲイモリのゲノム決定プロジェクトに参加し巨大ゲノムの構造の解析を実施しました。今後はトランスポゾンがどう巨大ゲノムの中で動いているのかを明らかにしたいと考えています(が、計算資源の予算がありません)。"
      ]
    },
    {
      id: "other",
      title: "その他",
      en: "Others",
      hidden: true
    }
  ],

  papers: [
    {
      id: "2026-ajp",
      year: 2026,
      theme: "terrestrial",
      authors: "<b>Kimura, Y.</b>, Ito, T., Konno, N., Kanda, S., Hyodo, S., & Nikaido, M.",
      title: "Homeostatic adaptations of the amphibious fish <i>Polypterus</i> in terrestrial environments",
      journal: "American Journal of Physiology-Regulatory, Integrative and Comparative Physiology",
      volume: "331(2)",
      url: "https://doi.org/10.1152/ajpregu.00338.2025",
      oa: true,
      headline: "エラが使えない陸上で、腎臓が体内の恒常性を支える",
      summary: [
        "陸上環境におけるポリプテルスの恒常性維持機構に関する研究です。水陸両生の魚、ポリプテルスは肺呼吸が可能で、陸上飼育が可能であることが知られています。淡水魚はエラを使ってNaの取り込みやアンモニアの排泄を行うことが知られていますが、ポリプテルスが陸上でどのようにこれらを維持しているかは不明でした。",
        "ポリプテルスを陸上で飼育し計測を行ったところ、エラが使えない陸上下においても血液中のイオン・浸透圧・アンモニアの恒常性が保たれていることが明らかになりました。主に腎臓でのENaCやアンモニア排泄に関わるチャネルの発現亢進により恒常性が維持されている可能性を示しました。これは、エラの機能が低下する陸上環境でも腎臓を可塑的に変化させることで水から陸への進出を支えた可能性を示唆しています。"
      ],
      points: [
        "陸上飼育下でも血中のイオン・浸透圧・アンモニアは一定に保たれる",
        "腎臓でENaCやアンモニア排泄に関わるチャネルの発現が上昇",
        "腎臓の可塑的な変化が水から陸への進出を支えた可能性"
      ],
      figure: {
        src: "img/figures/2026-ajp.svg",
        alt: "水中ではエラ、陸上では腎臓がイオンとアンモニアの調節を担うことを示す模式図",
        caption: "模式図：水中ではエラがNa⁺の取り込みやアンモニア排泄を担うが、陸上では腎臓のチャネル発現が上昇し恒常性を維持する。"
      }
    },
    {
      id: "2025-iscience",
      year: 2025,
      theme: "genome",
      authors: "<b>Kimura, Y.</b>, Suzuki, M., Okumura, M., Matsunami, M., Nishide, H., Mizuno, R., Bou, K., Uno, Y., Nakada, T., Hasunuma, I., Haramoto, Y., Fukui, A., Inoue, T., Sato, Y., Yamaguchi, K., Zhang, Z., Chihara, A., Takehara, M., Shibata, Y., Kitada, M., Moreno, N., Uchiyama, I., Suzuki, Y., Takeuchi, T., Nikaido, M., Agata, K., Toyoda, A., Shigenobu, S., Hayashi, T. & Suzuki K.",
      title: "The inbred newt genome unveils molecular mechanisms of behavior, development, and regeneration in urodele amphibians",
      journal: "iScience",
      volume: "Volume 28, Issue 10, 113535",
      url: "https://doi.org/10.1016/j.isci.2025.113535",
      oa: true,
      links: [
        { label: "プレスリリース", url: "https://www.isct.ac.jp/ja/news/8ffp8l3lg8kl" }
      ],
      headline: "近交系イベリアトゲイモリの巨大ゲノムを解読",
      summary: [
        "広島大とNBRPで提供している<a href=\"https://amphibian.hiroshima-u.ac.jp/provision-of-iiberian-ribbed-newt\" target=\"_blank\" rel=\"noopener\">近交系イベリアトゲイモリ</a>のゲノムを決定・解析をした論文です。イモリのゲノムはヒトと比べて約7倍と非常に大きなサイズであることが知られています。今回日本の研究者を中心にロングリードシーケンサを用いて繰り返し配列が多いイベリアトゲイモリのゲノムを決定しました。",
        "私はトランスポゾンの解析を担当し、イモリのゲノムがどのように巨大化したのか、肥大化した遺伝子やHoxクラスタなどにおけるトランスポゾンの挿入場所、どういった遺伝子が巨大化したのかなどを解析しました。その結果、イモリのゲノムはハイギョとはトランスポゾンのファミリーの構成が異なるものの、アホロートルともまた異なる、ということを明らかにしました。論文を通した統一感のある図の作成や多くの著者の原稿の取りまとめも行いました。"
      ],
      points: [
        "ロングリードシーケンサでヒトの約7倍のイモリゲノムを決定",
        "トランスポゾン組成はハイギョとも、アホロートルとも異なる",
        "Hoxクラスタや巨大化した遺伝子へのトランスポゾン挿入を解析"
      ],
      figure: {
        src: "img/large_genome_Transposon.png",
        alt: "脊椎動物ゲノムのトランスポゾン組成の比較",
        caption: "脊椎動物ゲノムのトランスポゾン組成の比較。イモリはハイギョ・アホロートルのいずれとも異なる構成をもつ。"
      }
    },
    {
      id: "2023-ggs",
      year: 2023,
      theme: "keratin",
      authors: "<b>Kimura, Y.</b> & Nikaido, M.",
      title: "Unveiling the expansion of keratin genes in lungfishes: a possible link to terrestrial adaptation",
      journal: "Genes & Genetic Systems",
      volume: "98(5), 249-257",
      url: "https://doi.org/10.1266/ggs.23-00188",
      oa: true,
      award: { label: "GGS Prize 2024 受賞", url: "https://gsj3.org/newslist/2024/news2893/" },
      headline: "ハイギョのゲノムでケラチン遺伝子が拡大していた",
      summary: [
        "2021年のケラチン遺伝子の研究において残されていた課題、「ハイギョのケラチン遺伝子」についてゲノムをもとに明らかにしました。加えて、陸上適応能力を持つハゼのケラチン遺伝子も解析しています。"
      ],
      points: [
        "ハイギョゲノムからケラチン遺伝子の拡大を明らかに",
        "陸上適応能力をもつハゼのケラチン遺伝子も解析"
      ],
      figure: {
        src: "img/Lungfish_aestivation.jpg",
        alt: "乾眠するハイギョ",
        caption: "繭をつくって乾眠(夏眠)するハイギョ。"
      }
    },
    {
      id: "2023-ecoevo",
      year: 2023,
      theme: "cilia",
      authors: "<b>Kimura, Y.</b>, Nakamuta, N. & Nikaido, M.",
      title: "Plastic loss of motile cilia in the gills of <i>Polypterus</i> in response to high CO2 or terrestrial environments",
      journal: "Ecology and Evolution",
      volume: "13(4), e9964",
      url: "https://onlinelibrary.wiley.com/doi/10.1002/ece3.9964",
      oa: true,
      headline: "エラの繊毛は陸上で消え、水に戻ると復活する",
      summary: [
        "ポリプテルスのエラに動繊毛が存在することを条鰭類で初めて発見しました。また、陸上環境や高CO2環境でその繊毛が消失し、再び元の水に戻すと復活する可塑性を明らかにしました。魚類から両生類にかけて失われたエラに関して、深い洞察をもたらします。"
      ],
      points: [
        "条鰭類のエラで初めて動繊毛を発見",
        "陸上・高CO2環境で繊毛が消失",
        "水に戻すと繊毛が復活する可塑性"
      ],
      figure: {
        src: "img/polypterus_land.jpg",
        alt: "陸上環境で飼育されたポリプテルス",
        caption: "陸上環境で飼育したポリプテルス。"
      }
    },
    {
      id: "2021-genomics",
      year: 2021,
      theme: "keratin",
      authors: "<b>Kimura, Y.</b> & Nikaido, M.",
      title: "Conserved keratin gene clusters in ancient fish: An evolutionary seed for terrestrial adaptation",
      journal: "Genomics",
      volume: "113(1, Part 2), 1120–1128",
      url: "https://www.sciencedirect.com/science/article/abs/pii/S0888754320320061",
      oa: true,
      headline: "ケラチン遺伝子クラスタは「生きた化石」の魚にまで遡る",
      summary: [
        "我々陸上脊椎動物においてケラチンは爪や髪の毛、表皮に存在し、表皮では保湿に関わっています。陸上脊椎動物ではケラチン遺伝子はゲノム上にクラスタを形成していますが、魚類ではこれまで見つかっていませんでした。",
        "今回我々は「生きた化石」と呼ばれるような魚であるシーラカンスのゲノムや、全ゲノム重複以前の条鰭類*、また軟骨魚類(ゾウギンザメ)などのゲノムを解析することで、ケラチン遺伝子クラスタがそれらの魚にまで遡って存在していることを初めて示しました。また、ポリプテルス目のアミメウナギという魚には既知のクラスタとは異なる場所にケラチン遺伝子のサブクラスタが存在し、両生類の成体表皮で発現するケラチン遺伝子と同様に多様化が進んでいることを明らかにしました。その他にも特定のシステイン残基と陸上適応の関連などを示しました。",
        "<small>* 私達が普段食卓で目にするような魚のほとんどは「真骨魚類」に分類される魚で、全ゲノムが倍加するという「全ゲノム重複」を共通祖先の段階で経験しています。</small>"
      ],
      points: [
        "シーラカンスや軟骨魚類などにケラチン遺伝子クラスタが存在",
        "アミメウナギでは別の場所にサブクラスタが存在し多様化",
        "特定のシステイン残基と陸上適応の関連を示唆"
      ],
      figure: {
        src: "img/シーラカンス.JPG",
        alt: "シーラカンス",
        caption: "解析対象のひとつ、シーラカンス。"
      }
    },
    {
      id: "2019-jb",
      year: 2019,
      theme: "other",
      authors: "Senga, A., Hantani, Y., Bekker, G. J., Kamiya, N., <b>Kimura, Y.</b>, Kawai, F., & Oda, M.",
      title: "Metal binding to cutinase-like enzyme from <i>Saccharomonospora viridis</i> AHK190 and its effects on enzyme activity and stability",
      journal: "The Journal of Biochemistry",
      volume: "166(2), 149-156",
      url: "https://academic.oup.com/jb/article-abstract/166/2/149/5368490",
      oa: false,
      headline: "PET分解酵素Cut190の活性と金属イオン",
      summary: [
        "学部生の頃、実験に携わっていた研究です。ポリエチレンテレフタレート(PET)を分解する放線菌由来の酵素、Cut190はカルシウムイオンと結合して活性と安定性が調整されます。カルシウムイオン以外の二価金属イオンについて、触媒活性を計測する実験を担当しました。"
      ]
    }
  ],

  /* 学会発表 */
  presentations: [
    { year: 2023, text: "木村優希, 神田真司, 兵藤晋, 二階堂雅人. 「水陸両生魚・ポリプテルスの陸上環境における恒常性維持機構 (Homeostatic mechanism in the terrestrial environment of Polypterus)」 日本動物学会第94回大会. 2023年9月7-9日. 山形大学 小白川キャンパス" },
    { year: 2023, text: "木村優希, 二階堂雅人. 「ハイギョゲノムから明らかにする水陸両生魚のケラチン遺伝子クラスタの拡大」 第3回日本遺伝学会春の分科会. 2023年3月27日. 国立遺伝学研究所" },
    { year: 2023, text: "木村優希, 神田真司, 兵藤晋, 二階堂雅人. 「肺呼吸する古代魚・ポリプテルスの陸上環境における恒常性維持機構」 日本動物学会関東支部第75回大会. 2023年3月18日. 明治大学 生田キャンパス" },
    { year: 2022, text: "木村優希, 二階堂雅人. 「ハイギョにおけるケラチン遺伝子クラスタの拡大」 第2回日本遺伝学会春の分科会. 2022年3月28日. オンライン" },
    { year: 2021, text: "木村優希, 中牟田信明, 神田真司, 兵藤晋, 二階堂雅人. 「水陸両生の古代魚・ポリプテルスの陸上飼育に伴う遺伝子発現および形態の変化 －エラの繊毛と浸透圧調節に着目して－」 日本動物学会第92回大会. 2021年9月2-4日. オンライン" },
    { year: 2021, text: "木村優希, 中牟田信明, 神田真司, 兵藤晋, 二階堂雅人. 「水陸両生魚・ポリプテルスは陸上環境でどのような変化を示すのか」 日本進化学会第23回東京大会. 2021年8月19-21日. オンライン" },
    { year: 2021, text: "Kimura, Y., Nakamuta, N., Kanda, S., Hyodo, S. and Nikaido, M. \"Changes in gene expression and morphology of amphibious fish in terrestrial environments\" The 2nd AsiaEvo Conference. 2021年8月16-19日. オンライン" },
    { year: 2020, text: "木村優希, 二階堂雅人. 「古代魚において保存されたケラチン遺伝子クラスタと陸上環境適応の関連」 日本進化学会第22回オンライン大会. 2020年9月6-9日. オンライン" },
    { year: 2020, text: "木村優希, 二階堂雅人. 「古代魚におけるケラチン遺伝子クラスタの保存と陸上適応との関連性」 日本遺伝学会第92回大会. 2020年9月16日. 熊本" },
    { year: 2020, text: "木村優希, 二階堂雅人. 「水陸両生の古代魚を用いた陸上飼育前後のエラ・腎臓の遺伝子発現の変動」 日本動物学会第91回大会. 2020年9月4-5日. オンライン" },
    { year: 2020, text: "木村優希, 二階堂雅人. 「魚はどのように陸に上がったか？ ～水陸両適応の古代魚を用いた器官可塑性の解析～」 日本動物学会関東支部第72回大会. 2020年3月14日. オンライン" },
    { year: 2020, text: "木村優希, 二階堂雅人. 「古代魚におけるケラチン遺伝子クラスタの保存と陸上適応との関連性」 第2回遺伝学会春季分科会. 2020年3月9日. 静岡" }
  ],

  /* ソフトウェア・制作物 */
  software: [
    { year: 2022, text: "Kimura, Y. <a href=\"https://github.com/kim2039/cTENOR/tree/main\" target=\"_blank\" rel=\"noopener\">cTENOR</a> — トランスポゾン自動分類パイプラインツール" },
    { year: 2021, text: "木村優希. \"Kimbio tools (旧 PhyloSeqStorage) / NCBI GeneID to FASTA\" (Webアプリケーション, 予算不足の為終了)" }
  ]
};
