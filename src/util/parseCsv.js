export default () => {

    const toParse = `CH01,MIDGAR TRAIN STATION,バレット,BARRET,「行くぞ、新入り！ オレに続け！」
    CH01,MIDGAR TRAIN STATION,INFO,INFO,＜戦闘：元ソルジャーＡ&Ｂ＞ /n ＜元ソルジャーを撃破＞/n  ＜戦闘終了＞
    CH01,MIDGAR REACTOR AREA,ビッグス,BIGGS,「さすが、ソルジャー！でもよ、反神羅（しんら）グループ【アパランチ】にソルジャーが参加するなんてスゲェよな！」
    CH01,MIDGAR REACTOR AREA,ジェシー,JESSIE,「その話って本当だったの？ ソルジャーって言ったら 私たちの敵でしょ？」
    CH01,MIDGAR REACTOR AREA,ジェシー,JESSIE,「どうして、そのソルジャーが私たちアバランチに協力するわけ？」
    CH01,MIDGAR REACTOR AREA,ビッグス,BIGGS,「早とちりするな、ジェシー。元、ソルジャーなんだってさ」
    CH01,MIDGAR REACTOR AREA,ビッグス,BIGGS,「今はもう神羅（しんら）をやめちまって 俺たちの仲間ってわけさ」
    CH01,MIDGAR REACTOR AREA,ビッグス,BIGGS,「まだ名前聞いてなかったよな。教えてくれ」
    CH01,MIDGAR REACTOR AREA,INFO,CLOUD,＜クラウドの名前入力画面＞
    CH01,MIDGAR REACTOR AREA,クラウド,CLOUD,「……クラウドだ」
    CH01,MIDGAR REACTOR AREA,ビッグス,BIGGS,「クラウドか、おれは……」
    CH01,MIDGAR REACTOR AREA,クラウド,CLOUD,「あんたたちの名前なんて興味ないね。どうせこの仕事が終わったらお別れだ」
    CH01,MIDGAR REACTOR AREA,バレット,BARRET,「なにやってんだオマエたち！ かたまって行動するなって言ってんだろ！」
    CH01,MIDGAR REACTOR AREA,バレット,BARRET,「ターゲットは壱番魔晄炉（まこうろ）。魔晄炉前のブリッジに集合だぞ」
    CH01,MIDGAR REACTOR AREA,バレット,BARRET,「元ソルジャー……。チッ、信用できねえな」
    CH01,MIDGAR REACTOR AREA,INFO,BARRET,＜バレットの名前入力画面＞
    CH01,MIDGAR NO 1 REACTOR,INFO,INFO, ＜１番魔胱炉＞
    CH01,MIDGAR NO 1 REACTOR,バレット,BARRET,「……おい。おまえ魔晄炉（まこうろ）は初めてじゃないんだろ？」
    CH01,MIDGAR NO 1 REACTOR,クラウド,CLOUD,「まあな。ソルジャー…… 神羅（しんら）カンパニーの人間だったからな」
    CH01,MIDGAR NO 1 REACTOR,バレット,BARRET,「この星は魔晄（まこう）エネルギーに満ちている。住民はその魔晄エルネギーを使って日々生活している」
    CH01,MIDGAR NO 1 REACTOR,バレット,BARRET,「でも誰も魔晄の本質を知らねえんだ。おまえ、知ってるか？」
    CH01,MIDGAR NO 1 REACTOR,バレット,BARRET,「魔晄はこの星を流れる血だ。それを神羅（しんら）って会社はガンガン吸い出していやがる。このへんちくりんなスクラップでな……」
    CH01,MIDGAR NO 1 REACTOR,クラウド,CLOUD,「能書きはいい。先を急ごう」
    CH01,MIDGAR NO 1 REACTOR,バレット,BARRET,「クッ……」
    CH01,MIDGAR NO 1 REACTOR,バレット,BARRET,「よし、ここからはオレといっしょに行動してもらうぜ」
    CH01,MIDGAR NO 1 REACTOR,ビッグス,BIGGS,「コード解除」
    CH01,MIDGAR NO 1 REACTOR,ビッグス,BIGGS,「ここの暗号を入手するために何人の仲間が犠牲になったことか……」
    CH01,MIDGAR NO 1 REACTOR,ジェシー,JESSIE,「コード解除」
    CH01,ELEVATOR,INFO,INFO,＜エレベータへ＞
    CH01,ELEVATOR,ジェシー,JESSIE,「さ、そこのボタンを押して！」
    CH01,ELEVATOR,バレット,BARRET,「魔晄炉（まこうろ）のせいで、この星の命は毎日けずられていく。そしていつの日か……ゼロだ」
    CH01,ELEVATOR,クラウド,CLOUD,「悪いけど興味がないな」
    CH01,ELEVATOR,バレット,BARRET,「星が死んじまうんだぞ。えっ、クラウドさんよ！」
    CH01,ELEVATOR,クラウド,CLOUD,「俺が考えてるのは、さっさと仕事を終わらせたいってことだけだ。警備兵やガードロボットが来ないうちにな」
    CH01,ELEVATOR,INFO,CLOUD,＜エレベータを降りる＞
    CH01,MIDGAR REACTOR AREA,ジェシー,JESSIE,「はしごの前では【決定ボタン】を押して。そうすればはしごにつかまるわ。後は【方向キー】の上下で、のぼりおりするの」
    CH01,MIDGAR REACTOR AREA,バレット,BARRET,「ここもブッ壊しちまえば ただのガラクタだぜ」
    CH01,MIDGAR REACTOR AREA,バレット,BARRET,「クラウドさんよ この爆弾をセットしてくれ」
    CH01,MIDGAR REACTOR AREA,クラウド,CLOUD,「あんたがやったほうが いいんじゃないのか？」
    CH01,MIDGAR REACTOR AREA,バレット,BARRET,「オレ？　オレは見張らせてもらう。おまえさんがおかしなマネをしないようにな」
    CH01,MIDGAR REACTOR AREA,クラウド,CLOUD,「……好きにしてくれ」
    CH01,MIDGAR REACTOR AREA,INFO,CLOUD'S EGO,＜すると、クラウドの脳裏から謎の声が…＞
    CH01,MIDGAR REACTOR AREA,謎の声,MYSTERY VOICE,『目をさませ！』
    CH01,MIDGAR REACTOR AREA,謎の声,MYSTERY VOICE,『ここはただの発電所じゃない！！』
    CH01,MIDGAR REACTOR AREA,バレット,BARRET,「…………うした？」
    CH01,MIDGAR REACTOR AREA,クラウド,CLOUD,「え？」
    CH01,MIDGAR REACTOR AREA,バレット,BARRET,「どうしたクラウドさんよ？ 早くしてくれ！」
    CH01,MIDGAR REACTOR AREA,クラウド,CLOUD,「……ああ、すまない」
    CH01,MIDGAR REACTOR AREA,INFO,CLOUD,＜爆弾をセットすると、警報が鳴る＞
    CH01,MIDGAR REACTOR AREA,バレット,BARRET,「本格的にやってくるぜ」
    CH01,MIDGAR REACTOR AREA,INFO,INFO,＜戦闘：ガードスコーピオン＞
    CH01,MIDGAR REACTOR AREA,クラウド,CLOUD,「バレット、気をつけろ」
    CH01,MIDGAR REACTOR AREA,クラウド,CLOUD,「しっぽをあげている間に攻撃すると レーザーで反撃してくるぞ」
    CH01,MIDGAR REACTOR AREA,INFO,INFO,＜ガードスコーピオンを撃破＞ /n ＜戦闘終了＞
    CH01,MIDGAR REACTOR AREA,クラウド,CLOUD,「さあ、脱出だ」
    CH01,MIDGAR REACTOR AREA,INFO,CLOUD,＜“爆破10分前”のカウントダウンが開始される＞
    CH01,MIDGAR REACTOR AREA,クラウド,CLOUD,「だいじょうぶか？」
    CH01,MIDGAR REACTOR AREA,ジェシー,JESSIE,「うかつ！！　足がはさまって……」
    CH01,MIDGAR REACTOR AREA,INFO,JESSIE,＜クラウド、ジェシーの足にはさまっている鉄をどける＞
    CH01,MIDGAR REACTOR AREA,ジェシー,JESSIE,「サンキュー！」
    CH01,MIDGAR REACTOR AREA,ジェシー,JESSIE,「コード解除」
    CH01,MIDGAR REACTOR AREA,ジェシー,JESSIE,「さ、あせらないで」
    CH01,MIDGAR REACTOR AREA,ビッグス,BIGGS,「コード解除」
    CH01,MIDGAR REACTOR EXPLOSION,INFO,INFO,＜壱番魔晄炉爆破＞
    CH01,MIDGAR REACTOR SUBWAY PIPE,ビッグス,BIGGS,「星の命……ちょっとはのびたかな」
    CH01,MIDGAR REACTOR SUBWAY PIPE,ウェッジ,WEDGE,「そうっすね」
    CH01,MIDGAR REACTOR SUBWAY PIPE,バレット,BARRET,「…………」
    CH01,MIDGAR REACTOR SUBWAY PIPE,ジェシー,JESSIE,「出来た！ 下がって」
    CH01,MIDGAR REACTOR SUBWAY PIPE,INFO,JESSIE,＜爆弾で穴を開ける＞
    CH01,MIDGAR SECTOR 8 STREET EXIT,バレット,BARRET,「さあ、引き上げるぞ」
    CH01,MIDGAR SECTOR 8 STREET EXIT,バレット,BARRET,「ランデブー地点は８番街ステーション！ 各自単独行動、列車に乗りこむんだ！」
    CH01,MIDGAR SECTOR 8 STREET EXIT,クラウド,CLOUD,「お、おい！」
    CH01,MIDGAR SECTOR 8 STREET EXIT,バレット,BARRET,「金の話なら 無事にアジトに帰ってからだ」
    CH01,MIDGAR SECTOR 8 STREET,花売り,AERITH,「ねえ」
    CH01,MIDGAR SECTOR 8 STREET,花売り,AERITH,「何があったの？」
    CH01,MIDGAR SECTOR 8 STREET,INFO,CLOUD,＜選択肢：「逃げた方がいい」or「気にするな……それより」/n →「気にするな……それより」を選択＞
    CH01,MIDGAR SECTOR 8 STREET,クラウド,CLOUD,「……」
    CH01,MIDGAR SECTOR 8 STREET,INFO,CLOUD,＜選択肢：「花なんて、めずらしいな」or「いや、なんでもないんだ」→「花なんて、めずらしいな」を選択＞
    CH01,MIDGAR SECTOR 8 STREET,花売り,AERITH,「あっ、これね。気に入ってくれた？ １ギルなんだけど、どう？」
    CH01,MIDGAR SECTOR 8 STREET,INFO,CLOUD,＜選択肢：「もらおう」or「やめとくよ」/n →「もらおう」を選択＞
    CH01,MIDGAR SECTOR 8 STREET,花売り,AERITH,「わあ、ありがとう！」
    CH01,MIDGAR SECTOR 8 STREET,花売り,AERITH,「はい！」
    CH01,MIDGAR SECTOR 8 STREETS,INFO,INFO,＜８番街＞
    CH01,MIDGAR SECTOR 8 STREETS,兵士,SOLDIER 1ST CLASS,「おい！　そこの男！！」
    CH01,MIDGAR SECTOR 8 STREETS,クラウド,CLOUD,「神羅兵か……」
    CH01,MIDGAR SECTOR 8 STREETS,INFO,CLOUD,＜選択肢：「やってやる！」or「めんどくさいから逃げる」 /n →「やってやる！」を選択＞
    CH01,MIDGAR SECTOR 8 STREETS,INFO,INFO,＜戦闘：警備兵Ａ&Ｂ＞ /n ＜警備兵を撃破＞ /n ＜戦闘終了＞
    CH01,MIDGAR SECTOR 8 STREETS,兵士,SOLDIER 1ST CLASS 2,「なにごとだ！」
    CH01,MIDGAR SECTOR 8 STREETS,クラウド,CLOUD,「チッ！」
    CH01,MIDGAR SECTOR 8 STREETS,INFO,CLOUD,＜選択肢：「やってやる！」or「めんどくさいから逃げる」 /n →「やってやる！」を選択＞
    CH01,MIDGAR SECTOR 8 STREETS,INFO,INFO,＜戦闘：警備兵（３人）＞ /n ＜警備兵を撃破＞ /n ＜戦闘終了＞
    CH01,MIDGAR SECTOR 8 STREETS,兵士,SOLDIER 1ST CLASS 3,「いたぞ！！」
    CH01,MIDGAR SECTOR 8 STREETS,クラウド,CLOUD,「チッ！」
    CH01,MIDGAR SECTOR 8 STREETS,INFO,CLOUD,＜選択肢：「やってやる！」or「めんどくさいから逃げる」→「やってやる！」を選択＞
    CH01,MIDGAR SECTOR 8 STREETS,INFO,INFO,＜戦闘：警備兵Ａ&Ｂ&Ｃ＞ /n ＜警備兵を撃破＞ /n ＜戦闘終了＞
    CH01,MIDGAR SECTOR 8 STREETS,兵士,SOLDIER 1ST CLASS 4,「こっちだ！！」
    CH01,MIDGAR SECTOR 8 STREETS,クラウド,CLOUD,「チッ！」
    CH01,MIDGAR SECTOR 8 STREETS,兵士,SOLDIER 1ST CLASS 4,「ここまでだな」
    CH01,MIDGAR SECTOR 8 STREETS,クラウド,CLOUD,「残念だが、おまえらの相手をしてるほどヒマじゃないんでな」
    CH01,MIDGAR SECTOR 8 STREETS,兵士,SOLDIER 1ST CLASS 4,「たわごとを…… よし捕らえろ！！」
    CH01,MIDGAR SECTOR 8 STREETS,INFO,CLOUD,＜クラウド、下の列車に飛び移る＞
    CH01,MIDGAR TRAIN,INFO,INFO,＜ミッドガル発最終列車＞
    CH01,MIDGAR TRAIN,ウェッジ,WEDGE,「クラウドさん こなかったっすね」
    CH01,MIDGAR TRAIN,ビッグス,BIGGS,「クラウド…… やられちまったのかな」
    CH01,MIDGAR TRAIN,バレット,BARRET,「ケッ……！！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「あの野郎が金ももらわねえで いなくなるわけねえだろ！！」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「クラウド……」
    CH01,MIDGAR TRAIN,ビッグス,BIGGS,「なあ、クラウドってさ…」
    CH01,MIDGAR TRAIN,ビッグス,BIGGS,「最後まで、おれたち… アバランチのために戦ってくれんのか？」
    CH01,MIDGAR TRAIN,バレット,BARRET,「さあな…… 知らねえよ」
    CH01,MIDGAR TRAIN,バレット,BARRET,「チッ！！ おまえらがもうすこし たよりになりゃよ……」
    CH01,MIDGAR TRAIN,バレット,BARRET,「あんな野郎、やとわねえでも いいんだがな…」
    CH01,MIDGAR TRAIN,ウェッジ,WEDGE,「あ、バレットさん 俺たちの給料……」
    CH01,MIDGAR TRAIN,ウェッジ,WEDGE,「や、なんでもないっす…」
    CH01,MIDGAR TRAIN,アバランチの面々,AVALANCHE,「ふっ～～……」
    CH01,MIDGAR TRAIN,INFO,CLOUD,＜そこへ、クラウドが飛び込んで来る＞
    CH01,MIDGAR TRAIN,ビッグス,BIGGS,「クラウド！！」
    CH01,MIDGAR TRAIN,ウェッジ,WEDGE,「クラウドさんっ！」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「クラウド……」
    CH01,MIDGAR TRAIN,クラウド,CLOUD,「約束の時間に 遅れたようだ」
    CH01,MIDGAR TRAIN,バレット,BARRET,「おい！　遅刻野郎！！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「ずいぶん派手な おでましじゃねぇか」
    CH01,MIDGAR TRAIN,クラウド,CLOUD,「そうでもない。ふつうだ」
    CH01,MIDGAR TRAIN,バレット,BARRET,「ケッ！！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「心配させやがって 勝手な野郎だ！」
    CH01,MIDGAR TRAIN,クラウド,CLOUD,「ほう……？ 心配してくれたのか」
    CH01,MIDGAR TRAIN,バレット,BARRET,「なにっ！！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「チッ……遅刻のぶんは 報酬からひくからな」
    CH01,MIDGAR TRAIN,バレット,BARRET,「おい、おめえら！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「場所変えるぞ。ついてこい！」
    CH01,MIDGAR TRAIN,ウェッジ,WEDGE,「あっ、クラウドさん！！ おつかれっす！」
    CH01,MIDGAR TRAIN,ビッグス,BIGGS,「へへ……クラウド！ 次の作戦もがんばろうな」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「あぶないから 閉めとくね」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「やだ！　クラウド！！ 顔、まっくろ……」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「はい、できあがり！」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「ね、魔胱炉で助けてくれて ありがとう！」
    CH01,MIDGAR TRAIN,アナウンス,TRAIN SPEAKER,「ミッドガル８番街ステーション発最終列車～」
    CH01,MIDGAR TRAIN,アナウンス,TRAIN SPEAKER,「終点、スラム７番街列車墓場駅～」
    CH01,MIDGAR TRAIN,アナウンス,TRAIN SPEAKER,「到着予定時刻はミッドガル時０時23分……」
    CH01,MIDGAR TRAIN,神羅課長,SHINRA MIDDLE MANAGER,「これだから終電はまいるよ…。 はあ……」
    CH01,MIDGAR TRAIN,バレット,BARRET,「子供じゃねえんだ。じっとしてろよ」
    CH01,MIDGAR TRAIN,車掌,CONDUCTOR,「たのみますよぅ！！ 他のお客さんの迷惑になりますから…」
    CH01,MIDGAR TRAIN,ビッグス,BIGGS,「まだ列車の非常警備体制には 移行してないみたいだな」
    CH01,MIDGAR TRAIN,ビッグス,BIGGS,「明日はそうはいかないだろうけどな」
    CH01,MIDGAR TRAIN,ウェッジ,WEDGE,「アバランチで名をあげて いつか俺だって……っす！」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「ね、クラウド。いっしょに見ない？」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「ミッドガル列車路線図ディスプレイ。二人で見ればきっと楽しいと思うの。私、説明してあげるね」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「私、こういうの好きなのよ。爆弾とかモニタ画像とかハイテク関係」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「さ、はじめるわよ」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「これが魔晄炉都市ミッドガルの全景フレームモデルね」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「スケールはだいたい１／10000ってとこかな」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「上のプレートは、地上から約50M離れているの」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「プレートを支えてるのは中心の大きな支柱と 各区画に建てられた柱……。柱は、機械塔とも呼ばれてるわ」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「ヒソヒソ…… （爆破した壱番魔晄炉が北のはずれにあるの）」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「そこから順番に２、３……８番魔晄炉まで８つの魔晄炉がミッドガルの電力供給を支えているのよ」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「それぞれの街には、名前もあったんだけど ミッドガルに住む人は誰も覚えちゃいないわ」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「名前なんかより、番号で呼ぶの。そういうところなのよ、ここは」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「ふぅ…、次はこれ！ ほら、見て」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「私たちがいま乗ってる列車のルートがこれよ」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「プレートを支えている大きな柱に 螺旋状にレールが通っているの。いまは柱のちょうど真ん中のあたりね」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「各通過ポイントの中にはID検知エリアが設置されてるの」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「乗客すべての身分やなにから全部！ 神羅ビルのホストコンピュータと連動してチェックされちゃうわけよ」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「ひそひそ…… （私たちはどう見たって不審人物だからニセのIDで通過してるの）」
    CH01,MIDGAR TRAIN,INFO,JESSIE,＜ID検知エリア、突入＞
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「噂をすれば、ね」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「この光がID検知エリア通過のサインなの」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「ひそひそ…… （暗くなるからチカンが多いのよ。ID検知エリアは……）」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「ま、それはさておき、もうすぐ地上に帰れるってわけ。なんだか、ホッとするね」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「そうだ、クラウド」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「今度、私の手作り作品を プレゼントしちゃおうかな」
    CH01,MIDGAR TRAIN,INFO,CLOUD,＜選択肢：「えんりょしとくよ」or「楽しみにしてるよ」→「楽しみにしてるよ」を選択＞
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「うん、じゃ、腕によりをかけて ドッカ～ンと制作するわ」
    CH01,MIDGAR TRAIN,ウェッジ,WEDGE,「目がチカチカしたっす。俺、暗いのだめっす。苦手っす」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「もうすぐ駅に着くね。クラウドといっぱい話せて燃えたわ。私、導火線に火がついたかもよ」
    CH01,MIDGAR TRAIN,車掌,CONDUCTOR,「たのみますよぅ！！ 他のお客さんの迷惑になりますから…」
    CH01,MIDGAR TRAIN,ビッグス,BIGGS,「スースー……ムニャムニャ…。（バレット、いばってんじゃねえぞ…）」
    CH01,MIDGAR TRAIN,ビッグス,BIGGS,「見ろよ…地上が見えてきたぜ。ひるも夜もねえ、オレたちの街がよ」
    CH01,MIDGAR TRAIN,バレット,BARRET,「ミッドガルのプレートさえなけりゃなぁ…。でっけえ空がおがめんのになあ」
    CH01,MIDGAR TRAIN,クラウド,CLOUD,「空中に浮かぶ都市か……。おちつかない風景だな」
    CH01,MIDGAR TRAIN,バレット,BARRET,「はあ？ あんたがそんなふうに感じるとはな」
    CH01,MIDGAR TRAIN,バレット,BARRET,「……意外だぜ」
    CH01,MIDGAR TRAIN,バレット,BARRET,「上の世界……プレート都市……」
    CH01,MIDGAR TRAIN,バレット,BARRET,「あのくさったピザのせいで 下の人間がどんなに苦しんでることか……」
    CH01,MIDGAR TRAIN,バレット,BARRET,「下の世界は今じゃあ 汚された空気のたまり場だ」
    CH01,MIDGAR TRAIN,バレット,BARRET,「おまけに魔晄炉はどんどんエネルギーをくみ上げちまう」
    CH01,MIDGAR TRAIN,バレット,BARRET,「おかげで土地は枯れる一方だ。空気をきれいにする力もなくしちまった」
    CH01,MIDGAR TRAIN,クラウド,CLOUD,「どうしてみんな上へ移らないんだろう……」
    CH01,MIDGAR TRAIN,バレット,BARRET,「さあな。金がないからだろ。いや、それとも……」
    CH01,MIDGAR TRAIN,バレット,BARRET,「どんなに汚されていても 地ベタが好きなのかもな」
    CH01,MIDGAR TRAIN,クラウド,CLOUD,「わかってるさ…。好きでスラムに住んでるやつなどいない」
    CH01,MIDGAR TRAIN,クラウド,CLOUD,「みんな、この列車とおなじ。敷かれたレールには逆らえないんだ」
    CH01,MIDGAR SECTOR 7 SLUMS,INFO,INFO,＜列車、７番街スラムへ到着＞
    CH01,MIDGAR SECTOR 7 SLUMS,バレット,BARRET,「おう！！ みんな、集まれ！！」
    CH01,MIDGAR SECTOR 7 SLUMS,バレット,BARRET,「今回の作戦は成功だ。だがな、気を抜くなよ」
    CH01,MIDGAR SECTOR 7 SLUMS,バレット,BARRET,「本番はこれからだ！ あんな爆発でびびるな！」
    CH01,MIDGAR SECTOR 7 SLUMS,バレット,BARRET,「次はもっと派手にかますぞ！」
    CH01,MIDGAR SECTOR 7 SLUMS,バレット,BARRET,「アジトに集合だ！！ いくぞ！」
    CH01,MIDGAR SECTOR 7 SLUMS,INFO,INFO,＜７番街スラム＞
    CH01,MIDGAR SECTOR 7 SLUMS,バレット,BARRET,「へへ……」
    CH01,MIDGAR SECTOR 7 SLUMS,バレット,BARRET,「幼なじみにはやく会いてえか？」
    CH01,MIDGAR SECTOR 7 SLUMS,INFO,CLOUD,＜選択肢：「幼なじみ？」or「そこ、どいてくれ」 /n →「幼なじみ？」を選択＞
    CH01,MIDGAR SECTOR 7 SLUMS,バレット,BARRET,「へッ！！ とぼけちゃってよ」
    CH01,MIDGAR SECTOR 7 SLUMS,バレット,BARRET,「いいのかねえ…」
    CH01,MIDGAR SECTOR 7 SLUMS,バレット,BARRET,「よし！ 先に入ってろ」
    CH01,MIDGAR 7TH HEAVEN,マリン,MARLENE,「とうちゃん！！」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「ほら、マリン！ クラウドに おかえりなさいは？」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「おかえりなさい、クラウド。作戦はうまくいったみたいね」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「バレットとはケンカしなかった？」
    CH01,MIDGAR 7TH HEAVEN,INFO,CLOUD,＜選択肢 ：「やっちゃった」or「ガマンした」 /n →「ガマンした」を選択＞
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「ふ～ん。クラウドもおとなになったのね。子供のころ、すぐケンカだったのに」
    CH01,MIDGAR 7TH HEAVEN,INFO,TIFA,＜ティファの名前入力画面＞
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「あら？ お花なんてめずらしいわね」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「スラムじゃ、めったにさかないのよ」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「でも……」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「プレゼントに、お花なんて クラウド、そうなんだ～」
    CH01,MIDGAR 7TH HEAVEN,クラウド,CLOUD,「そんなんじゃないさ」
    CH01,MIDGAR 7TH HEAVEN,INFO,CLOUD,＜選択肢：「ティファ、あげる」or「マリン、あげる」 /n →「ティファ、あげる」を選択＞
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「ありがとう、クラウド。ん～、いいかおり！」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「お店を花でいっぱいにしちゃおうかな」
    CH01,MIDGAR 7TH HEAVEN,ウェッジ,WEDGE,「あ、クラウドさん！」
    CH01,MIDGAR 7TH HEAVEN,ウェッジ,WEDGE,「ティファちゃんの料理って おいしいっすねえ。パクパク……」
    CH01,MIDGAR 7TH HEAVEN,ウェッジ,WEDGE,「でも、聞いてくれます？」
    CH01,MIDGAR 7TH HEAVEN,INFO,CLOUD,＜選択肢：「なにを」or「お前の話なんて興味ないね」 /n →「なにを」を選択＞
    CH01,MIDGAR 7TH HEAVEN,ウェッジ,WEDGE,「ティファちゃんって いつも俺に、料理の味見させるっすよ」
    CH01,MIDGAR 7TH HEAVEN,ウェッジ,WEDGE,「おかげでほら、俺、こんなまるっこくなっちゃって」
    CH01,MIDGAR 7TH HEAVEN,ウェッジ,WEDGE,「うれしいやら、悲しいやら。おいしい料理とお酒が評判で お店ははんじょうしてるんですけどね」
    CH01,MIDGAR 7TH HEAVEN,ジェシー,JESSIE,「う☆か☆つ☆…… なんだか、ドキドキしてる」
    CH01,MIDGAR 7TH HEAVEN,ジェシー,JESSIE,「なぜなの……？」
    CH01,MIDGAR 7TH HEAVEN,ビッグス,BIGGS,「ああ～！！ 仕事の後の一杯はこたえらんねぇなぁ」
    CH01,MIDGAR 7TH HEAVEN,ビッグス,BIGGS,「ヒック！！」
    CH01,MIDGAR 7TH HEAVEN,ビッグス,BIGGS,「クラウドさんも、おひとつどうですか？」
    CH01,MIDGAR 7TH HEAVEN,INFO,CLOUD,＜選択肢：「いらないな」or「そうだな、もらおうか」 /n →「そうだな、もらおうか」を選択＞
    CH01,MIDGAR 7TH HEAVEN,ビッグス,BIGGS,「おっ！！ いい心がけじゃねぇか！！」
    CH01,MIDGAR 7TH HEAVEN,ビッグス,BIGGS,「元ソルジャーでもここじゃおめえも新人だ。新人にとっちゃ先輩の言うことは 絶対だからな！」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「クラウド、ごめんね。マリン、てれちゃってるみたい」
    CH01,MIDGAR 7TH HEAVEN,マリン,MARLENE,「…………」
    CH01,MIDGAR 7TH HEAVEN,マリン,MARLENE,「とうちゃん、おかえり！」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「バレット、ごくろうさま」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「おう！！」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「おめえら！！ 会議をはじめっぞ！！」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,INFO,INFO,＜アバランチのメンバー、下の会議室へ向かう＞
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ティファ,TIFA,「どうぞ、すわって」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ティファ,TIFA,「ねえ……」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ティファ,TIFA,「何かのむ？」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,INFO,CLOUD,＜選択肢：「いまはそんな気分じゃないな」or「キツイの、くれないか？」 /n →「キツイの、くれないか」を選択＞
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ティファ,TIFA,「まってて。いまつくるから」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,INFO,TIFA,＜ティファ、すぐにつくり、クラウドにわたす＞
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ティファ,TIFA,「なんだか、ほっとしちゃった。クラウドが無事もどってきて」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,クラウド,CLOUD,「急にどうした？ あのていどの仕事、なんでもないさ」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ティファ,TIFA,「そうね……」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ティファ,TIFA,「クラウド、ソルジャーになったんだもんね」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ティファ,TIFA,「……今回の報酬なんだけど バレットからもらってね」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,クラウド,CLOUD,「そうするよ。報酬をもらえば、また、お別れだな」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ティファ,TIFA,「ねえ、クラウド。気分はどう？」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,クラウド,CLOUD,「……ふつうさ。どうしてそんなことを聞く？」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ティファ,TIFA,「ううん、なんでもない。ただ、つかれてないのかなって…」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ジェシー,JESSIE,「うかつ……」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ジェシー,JESSIE,「見てよ、このニュース……。こんなに爆発してる」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ジェシー,JESSIE,「やっぱり、私の爆弾のせい？ でも、このコンピュータの指示通り 作っただけなのに」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ジェシー,JESSIE,「やだ！ どっかで計算まちがったかしら」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,INFO,PRESIDENT SHINRA TV,＜テレビモニターから＞
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA TV,「……壱番魔晄炉破壊事件に関して アバランチと名乗る組織から 犯行声明が出されています。
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA TV,「声明によるとアバランチは 今後も同様のテロを続けることを 予告しております。
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA TV,「しかし、ミッドガルの市民のみなさん 安心して下さい」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA TV,「我々神羅カンパニーはこのような暴力からみなさんを守るために ソルジャーの投入を決定しました。これで……」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,バレット,BARRET,「おい、クラウドさんよ。聞きたいことがあるんだ」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,バレット,BARRET,「きょう、オレたちが戦った相手に ソルジャーはいたのか？」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,クラウド,CLOUD,「いや、いなかった。それは確実だ」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,バレット,BARRET,「ずいぶんと自信たっぷりじゃねえか」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,クラウド,CLOUD,「もしソルジャーと戦っていたら あんたたちが生きてるはずないからな」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,バレット,BARRET,「自分が元ソルジャーだからって えらそうに言うんじゃねえよ！」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,クラウド,CLOUD,「…………」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,バレット,BARRET,「確かにおまえは強い」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,バレット,BARRET,「おそらくソルジャーってのは みんな強いんだろうさ」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,バレット,BARRET,「でもな、おまえは 反乱組織アバランチにやとわれてる身だ。神羅のかたを持つんじゃねえ！」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,クラウド,CLOUD,「神羅のかたをもつ？ 俺はあんたの質問に答えただけだ」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,クラウド,CLOUD,「俺は上で待っている。報酬の話がしたい」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,バレット,BARRET,「チッ！！ ………………ほ、報酬かよ…」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,マリン,MARLENE,「とうちゃ～ん かっこいい！」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,INFO,TIFA,＜ティファ、駆けつける＞
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,ティファ,TIFA,「待って、クラウド！」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,バレット,BARRET,「ティファ！ そんなヤツ放っておけ！」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,バレット,BARRET,「どうやら神羅に 未練タラタラらしいからな！」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,クラウド,CLOUD,「だまれ！」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,クラウド,CLOUD,「俺は神羅にもソルジャーにも 未練はない！」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,クラウド,CLOUD,「でも、かんちがいするな！」
    CH01,MIDGAR 7TH HEAVEN CONFERENCE ROOM,クラウド,CLOUD,「星の命も おまえたちアバランチの活動にも興味はない！」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「クラウド、おねがい。力をかして」
    CH01,MIDGAR 7TH HEAVEN,クラウド,CLOUD,「ティファ……わるいけどさ」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「星が病んでるの。このままじゃ死んじゃう」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「誰かがなんとかしなくちゃならないの」
    CH01,MIDGAR 7TH HEAVEN,クラウド,CLOUD,「バレットたちがなんとかするんだろ？ 俺には関係ないさ」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「あ～あ！ 本当に行っちゃうんだ！」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「かわいい幼なじみのたのみも きかずに行っちゃうんだ！」
    CH01,MIDGAR 7TH HEAVEN,クラウド,CLOUD,「ん……？」
    CH01,MIDGAR 7TH HEAVEN,INFO,CLOUD,＜選択肢：「よくいうぜ！」or「……わるいな」 /n →「……わるいな」を選択＞
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「……約束も忘れちゃったんだ」
    CH01,MIDGAR 7TH HEAVEN,クラウド,CLOUD,「約束？」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「やっぱり忘れてる」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「思い出して……クラウド。あれは７年前よ……」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「ほら、村の給水塔」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「覚えてる？」
    CH01,MIDGAR 7TH HEAVEN,クラウド,CLOUD,「ああ……あの時か」
    CH01,MIDGAR 7TH HEAVEN,クラウド,CLOUD,「ティファ、なかなか来なくて ちょっと寒かったな」
    CH01,NIBELHEIM WATER TOWER,INFO,INFO,＜回想＞
    CH01,NIBELHEIM WATER TOWER,ティファ,TIFA YOUNG,「お・ま・た・せ」
    CH01,NIBELHEIM WATER TOWER,INFO,TIFA YOUNG,＜ティファ、クラウドの横に座る＞
    CH01,NIBELHEIM WATER TOWER,ティファ,TIFA YOUNG,「な～に？ 話があるって」
    CH01,NIBELHEIM WATER TOWER,クラウド,CLOUD YOUNG,「俺……春になったら村を出て ミッドガルに行くよ」
    CH01,NIBELHEIM WATER TOWER,ティファ,TIFA YOUNG,「……男の子たちって み～んな村を出てっちゃうのね」
    CH01,NIBELHEIM WATER TOWER,クラウド,CLOUD YOUNG,「俺はみんなとはちがう。ただ仕事をさがすだけじゃない」
    CH01,NIBELHEIM WATER TOWER,クラウド,CLOUD YOUNG,「俺、ソルジャーになりたいんだ」
    CH01,NIBELHEIM WATER TOWER,クラウド,CLOUD YOUNG,「セフィロスみたいな 最高のソルジャーに」
    CH01,NIBELHEIM WATER TOWER,ティファ,TIFA YOUNG,「セフィロス…… 英雄セフィロス、か」
    CH01,NIBELHEIM WATER TOWER,ティファ,TIFA YOUNG,「ソルジャーになるのって 難しいんでしょ？」
    CH01,NIBELHEIM WATER TOWER,クラウド,CLOUD YOUNG,「……しばらくのあいだ 村にはもどれないな、きっと」
    CH01,NIBELHEIM WATER TOWER,クラウド,CLOUD YOUNG,「……うん？」
    CH01,NIBELHEIM WATER TOWER,ティファ,TIFA YOUNG,「大活躍したら 新聞にものるかな？」
    CH01,NIBELHEIM WATER TOWER,クラウド,CLOUD YOUNG,「がんばるよ」
    CH01,NIBELHEIM WATER TOWER,ティファ,TIFA YOUNG,「ね、約束しない？」
    CH01,NIBELHEIM WATER TOWER,ティファ,TIFA YOUNG,「あのね、クラウドが有名になって その時、私が困ってたら……」
    CH01,NIBELHEIM WATER TOWER,ティファ,TIFA YOUNG,「クラウド、私を助けに来てね」
    CH01,NIBELHEIM WATER TOWER,クラウド,CLOUD YOUNG,「はぁ？」
    CH01,NIBELHEIM WATER TOWER,ティファ,TIFA YOUNG,「私がピンチのときに ヒーローがあらわれて助けてくれるの」
    CH01,NIBELHEIM WATER TOWER,ティファ,TIFA YOUNG,「一度くらいは経験したいじゃない？」
    CH01,NIBELHEIM WATER TOWER,クラウド,CLOUD YOUNG,「はぁ？」
    CH01,NIBELHEIM WATER TOWER,ティファ,TIFA YOUNG,「いいじゃないのよ～！ 約束しなさい～！」
    CH01,NIBELHEIM WATER TOWER,クラウド,CLOUD YOUNG,「わかった……約束するよ」
    CH01,NIBELHEIM WATER TOWER,INFO,INFO,＜回想終了＞
    CH01,MIDGAR 7TH HEAVEN,クラウド,CLOUD,「俺は英雄でも有名でもない。約束は……守れない」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「でも子供のころの夢を実現したでしょ？ ちゃんとソルジャーになったんだもの」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「だから、ねっ！ 今度こそ約束を……」
    CH01,MIDGAR 7TH HEAVEN,INFO,BARRET,＜そこへバレットが来る＞
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「おいちょっと待て！ ソルジャーさんよ」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「約束は約束だからな！ ほら、金だ！！」
    CH01,MIDGAR 7TH HEAVEN,INFO,BARRET,＜バレットのへそくり1500ギルを受け取る＞
    CH01,MIDGAR 7TH HEAVEN,クラウド,CLOUD,「こんな、しけた報酬 じょうだんじゃないな」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「え？それじゃ！！」
    CH01,MIDGAR 7TH HEAVEN,クラウド,CLOUD,「次のミッションはあるのか？ 倍額の3000でうけてやってもいい」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「なんだと！……！」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「いいからいいから」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「ヒソヒソ…… （人手に困ってるってのが本音でしょ？）」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「う……ぐぅ…… （残りのへそくりはマリンの学費だぞ……）」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「2000だ！」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「ありがとう、クラウド」
    CH01,MIDGAR 7TH HEAVEN,INFO,INFO,＜翌朝＞
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「おはよ！　クラウド！」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「よく、眠れた？」
    CH01,MIDGAR 7TH HEAVEN,INFO,CLOUD,＜選択肢：「バレットのイビキがうるさくて…」or「ティファがそばにいたから…」 /n →「ティファがそばにいたから…」を選択＞
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「それはどういう意味かしら？」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「今回は私も行くね！」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「標的は【五番魔晄炉】だ。まず、駅に行く」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「くわしい作戦は列車の中でな」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「おう、クラウド！」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「作戦の前にひとつ おまえさんに聞きたいことがある！」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「じつはな…… オレはマテリアの使い方をよくしらねえ！」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「ひろったマテリアはおまえにくれてやる。だから、教えろ！」
    CH01,MIDGAR 7TH HEAVEN,クラウド,CLOUD,「さて……」
    CH01,MIDGAR 7TH HEAVEN,INFO,CLOUD,＜選択肢：「面倒だが説明しよう」or「面倒くさい……」 /n →「面倒だが説明しよう」を選択＞ /n ＜ここでメニュー画面が開かれ、チュートリアル形式でマテリアの使い方などが説明される＞
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「ケッ！　なにが…… 『それほど、むずかしくはないだろう』だ！」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「ぜんぜんわかんねえ……」
    CH01,MIDGAR 7TH HEAVEN,バレット,BARRET,「まあ、いいだろう。マテリアはおまえが管理しとけ！」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「クラウド！ 武器屋２階のおじさんから伝言よ」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「あげたいものがあるからお店によって ……だって。わすれないでね！」
    CH01,MIDGAR 7TH HEAVEN,ティファ,TIFA,「マリン、お店たのむね！」
    CH01,MIDGAR 7TH HEAVEN,マリン,MARLENE,「うん！！ お仕事がんばってね」
    CH01,MIDGAR TRAIN,INFO,CLOUD,＜クラウド一行、列車に乗り込む＞
    CH01,MIDGAR TRAIN,バレット,BARRET,「おう！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「こいつぁ、貸し切り列車じゃねえぞ！！ 散れ散れ！！」
    CH01,MIDGAR TRAIN,神羅課長,SHINRA MIDDLE MANAGER,「また危ない人たちといっしょか。私もつくづく運がないな」
    CH01,MIDGAR TRAIN,バレット,BARRET,「んっ～！？」
    CH01,MIDGAR TRAIN,バレット,BARRET,「んんっ～！？」
    CH01,MIDGAR TRAIN,バレット,BARRET,「おいっ！！ ずいぶんすいてやがるな」
    CH01,MIDGAR TRAIN,バレット,BARRET,「どうなってる？」
    CH01,MIDGAR TRAIN,神羅課長,SHINRA MIDDLE MANAGER,「ヒッ！！」
    CH01,MIDGAR TRAIN,神羅課長,SHINRA MIDDLE MANAGER,「き、きみたちみたいなのがいるから す、すいてるんじゃないか…」
    CH01,MIDGAR TRAIN,神羅課長,SHINRA MIDDLE MANAGER,「ヒ～～ッ！！」
    CH01,MIDGAR TRAIN,神羅課長,SHINRA MIDDLE MANAGER,「ニュ、ニュースぐらい見てるだろ？ アバランチの爆弾テロ予告が あったんだ」
    CH01,MIDGAR TRAIN,神羅課長,SHINRA MIDDLE MANAGER,「こんな日にミッドガルに出かけるのは サラリーマン神羅ぐらいさ」
    CH01,MIDGAR TRAIN,バレット,BARRET,「きっさま、神羅のもんか？」
    CH01,MIDGAR TRAIN,神羅課長,SHINRA MIDDLE MANAGER,「わ、私は暴力にはくっしないぞ～。こ、この席だって、ゆずらない」
    CH01,MIDGAR TRAIN,ティファ,TIFA,「バレット！！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「チッ！！ あんた、ついてるぜ」
    CH01,MIDGAR TRAIN,クラウド,CLOUD,「さて、どうするんだ？」
    CH01,MIDGAR TRAIN,バレット,BARRET,「ケッ！ 落ちついた野郎だぜ！ こっちのペースがくるっちまう…」
    CH01,MIDGAR TRAIN,INFO,INFO,＜列車が突如音をたてて揺れる＞
    CH01,MIDGAR TRAIN,ティファ,TIFA,「列車の接続がすんだみたい。出発するわ」
    CH01,MIDGAR TRAIN,クラウド,CLOUD,「今回の作戦について 聞かせてくれ」
    CH01,MIDGAR TRAIN,バレット,BARRET,「へッ！　仕事熱心だな。クラウドさんよ！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「しかたねえ…… せ、説明してやるっ！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「ジェシーから聞いただろうが 上のプレートとの境界には検問がある。列車ごとIDスキャンするシステムだ」
    CH01,MIDGAR TRAIN,ティファ,TIFA,「神羅じまんのね」
    CH01,MIDGAR TRAIN,バレット,BARRET,「今までのニセのIDは もう使えねえ…」
    CH01,MIDGAR TRAIN,アナウンス,TRAIN SPEAKER,「本日も御乗車ありがとうございます～」
    CH01,MIDGAR TRAIN,アナウンス,TRAIN SPEAKER,「４番街ステーション到着予定時刻は」
    CH01,MIDGAR TRAIN,アナウンス,TRAIN SPEAKER,「ミッドガル時11時45分～」
    CH01,MIDGAR TRAIN,ティファ,TIFA,「ID検知エリアまで あと３分ってところね」
    CH01,MIDGAR TRAIN,バレット,BARRET,「よし、あと３分たったら 列車から飛び降りる」
    CH01,MIDGAR TRAIN,バレット,BARRET,「いいな！」
    CH01,MIDGAR TRAIN,ティファ,TIFA,「クラウド、こっち！ 路線図モニタでも見てよ」
    CH01,MIDGAR TRAIN,バレット,BARRET,「へッ！　元ソルジャーの物知りさんよ！ 五番魔晄炉のあたりは、くわしいんだろ！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「おまえさんの知ったかぶり説明が 聞きてえもんだな！」
    CH01,MIDGAR TRAIN,神羅課長,SHINRA MIDDLE MANAGER,「ヒッ……！！」
    CH01,MIDGAR TRAIN,神羅課長,SHINRA MIDDLE MANAGER,「わ、私にはかまわないでくれたまえ。（ヒッヒッ…… 会社のみんなにじまんしちゃおう…）」
    CH01,MIDGAR TRAIN,ティファ,TIFA,「あら、もう何度も見たって顔してるのね」
    CH01,MIDGAR TRAIN,ティファ,TIFA,「ま、いいわ。もっとそばにきて」
    CH01,MIDGAR TRAIN,INFO,TIFA,＜そこへ、いきなりID検知エリア突入の警報がなる＞
    CH01,MIDGAR TRAIN,ティファ,TIFA,「おかしいわね。ID検知エリアはもっと先なのに」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「Ａ式非常警戒体制を発動」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「列車内に未確認のIDを検知」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「各車両緊急チェックに入ります」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「くりかえします」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「Ａ式非常警戒体制を発動」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「列車内に未確認のIDを検知」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「各車両緊急チェックに入ります」
    CH01,MIDGAR TRAIN,ティファ,TIFA,「どういうこと？」
    CH01,MIDGAR TRAIN,バレット,BARRET,「どうなってんだ！！」
    CH01,MIDGAR TRAIN,INFO,JESSIE,＜そこへ、慌ててジェシーが来る＞
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「まっずいことになっちゃったわ」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「説明はあと。はやく！　こっちの車両に！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「チッ！ しくじりやがったな…」
    CH01,MIDGAR TRAIN,バレット,BARRET,「いくぜ！ モタモタすんな！」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「車両１に未確認ID検知」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「警戒レベル１」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「車両１をロックします」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「車両１ロック完了」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「警戒レベル２に移行」
    CH01,MIDGAR TRAIN,ビッグス,BIGGS,「いそぐんだ！」
    CH01,MIDGAR TRAIN,ウェッジ,WEDGE,「扉ロックされるっす！」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「とにかく、走って！」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「作戦２にチェンジよ！」
    CH01,MIDGAR TRAIN,サラリーマン,SHINRA MIDDLE MANAGER,「やぁ…… あんたたち、そうぞうしいねえ」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「車両２に未確認ID検知」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「ドアロック準備」
    CH01,MIDGAR TRAIN,サラリーマン,SHINRA MIDDLE MANAGER,「まあまあ、おちついて」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「警戒レベル２」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「車両２をロックします」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「車両２ロック完了」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「警戒レベル３に移行」
    CH01,MIDGAR TRAIN,バレット,BARRET,「よし！！ ぬけたか！？」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「まだよ、すぐ次の検知がはじまるわ。バレたらアウトよ！」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「でも、心配しないで。前の車両に順々にうつっていけば やりすごせるわ！」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「未確認IDは列車前半部に移動中」
    CH01,MIDGAR TRAIN,ギザギザ頭の男,SPIKY HAIR GUY,「ニヒニヒ！！」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「現在位置の再確認に入ります」
    CH01,MIDGAR TRAIN,ギザギザ頭の男,SPIKY HAIR GUY,「シュタッ！！」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「警戒レベル３」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「車両３ロック完了」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「警戒レベル４に移行」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「車両４に未確認IDを検知」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「警戒レベル４」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「車両４をロックします」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「車両４ロック完了」
    CH01,MIDGAR TRAIN,警報アナウンス,ANNOUNCEMENT ALARM,「警戒レベルMAXに移行」
    CH01,MIDGAR TRAIN,バレット,BARRET,「よしっ！！ うまくいったな！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「おう！！ こっちだ！！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「いくぜ！！ こっからダイブだ！！」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「私、ジェシーよ。どう、クラウド？」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「神羅の制服、似合ってるかな」
    CH01,MIDGAR TRAIN,INFO,CLOUD,＜選択肢：「そうだな……」or「いまはそれどころじゃない」 /n →「そうだな……」を選択＞
    CH01,MIDGAR TRAIN,クラウド,CLOUD,「……すてきだよ、男勝りで」
    CH01,MIDGAR TRAIN,ジェシー,JESSIE,「エッ！！ うれしいっ ……のかしら？」
    CH01,MIDGAR TRAIN,ティファ,TIFA,「……こわいね」
    CH01,MIDGAR TRAIN,クラウド,CLOUD,「いまさらなんだよ。だいたい、どうして来たんだ？」
    CH01,MIDGAR TRAIN,ティファ,TIFA,「だって……」
    CH01,MIDGAR TRAIN,バレット,BARRET,「おふたりさん 時間がないぞ！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「おう！！ 時間がねえ！！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「……なんとかしてやれ！」
    CH01,MIDGAR TRAIN,ティファ,TIFA,「うん！！ 決めた！」
    CH01,MIDGAR TRAIN,ティファ,TIFA,「よっく、見てて。私、飛ぶから！！」
    CH01,MIDGAR TRAIN,INFO,TIFA,＜ティファ、飛び降りる＞
    CH01,MIDGAR TRAIN,クラウド,CLOUD,「さきにいくが かまわないな？」
    CH01,MIDGAR TRAIN,バレット,BARRET,「リーダーは最後まで 残るもんだ」
    CH01,MIDGAR TRAIN,バレット,BARRET,「いいから、はやくいけ！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「おう！ けがすんなよ！」
    CH01,MIDGAR TRAIN,バレット,BARRET,「作戦はこっからが 本番だぞ！」
    CH01,MIDGAR TRAIN,INFO,CLOUD,＜クラウド、飛び降りる＞
    CH01,MIDGAR TRAIN,バレット,BARRET,「じゃな！ あとしまつはたのんだっ！
    CH01,MIDGAR TRAIN,INFO,BARRET,＜バレット、飛び降りる＞
    CH01,MIDGAR TRAIN TUNNEL,INFO,INFO,＜螺旋トンネル＞
    CH01,MIDGAR TRAIN TUNNEL,バレット,BARRET,「よし、ここまでは予定通りだ」
    CH01,MIDGAR TRAIN TUNNEL,バレット,BARRET,「しかし、五番魔晄炉にたどり着くまでは 油断は禁物だぜ」
    CH01,MIDGAR TRAIN TUNNEL,バレット,BARRET,「ビッグス、ウェッジ、ジェシーが先行している手はずになってる。行くぞ、おまえら」
    CH01,MIDGAR TRAIN TUNNEL,バレット,BARRET,「さぁて、五番魔晄炉は このトンネルの奥だ！」
    CH01,MIDGAR TRAIN TUNNEL,クラウド,CLOUD,「この光の帯は、神羅の警報センサー。これ以上、奥には進めないな」
    CH01,MIDGAR TRAIN TUNNEL,クラウド,CLOUD,「ここまで来て警報センサーの世話になるなんてのは、シロウトだけだ」
    CH01,MIDGAR TRAIN TUNNEL,バレット,BARRET,「か～っ、せまっちい穴だな。ここからプレートの下にもぐれってのか？ たまんねぇぜ」
    CH01,MIDGAR TRAIN TUNNEL,バレット,BARRET,「どうする、クラウドさんよぉ？」
    CH01,MIDGAR TRAIN TUNNEL,INFO,CLOUD,＜選択肢：「中をよく見てみる」or「おりる」or「おりない」 /n →「中をよく見てみる」を選択＞
    CH01,MIDGAR TRAIN TUNNEL,ティファ,TIFA,「……ダクトの中に 足がかりになりそうなものはないわね」
    CH01,MIDGAR TRAIN TUNNEL,クラウド,CLOUD,「ああ。このダクトをおりたら ここには、もどってこれないぞ」
    CH01,MIDGAR TRAIN TUNNEL,バレット,BARRET,「のんびりしてるヒマはないぜ。いつ神羅のやつらにおれたちの行動がばれないとも限らないからな」
    CH01,MIDGAR TRAIN TUNNEL,バレット,BARRET,「クラウド、行くしかないぜ」
    CH01,MIDGAR TRAIN TUNNEL,INFO,CLOUD,＜選択肢：「おりる」or「おりない」 /n →「おりる」を選択＞
    CH01,MIDGAR TRAIN TUNNEL,バレット,BARRET,「でもよ、ゾッとしねぇな」
    CH01,MIDGAR SECTOR 4 PLATE,INFO,INFO,＜四番街プレート内部＞
    CH01,MIDGAR SECTOR 4 PLATE,ジェシー,JESSIE,「ごめんなさい」
    CH01,MIDGAR SECTOR 4 PLATE,ジェシー,JESSIE,「列車のIDスキャンのミス 私のせいなの」
    CH01,MIDGAR SECTOR 4 PLATE,ジェシー,JESSIE,「クラウドのIDカード。私の特別製にしたから…… あんなことに」
    CH01,MIDGAR SECTOR 4 PLATE,ジェシー,JESSIE,「心をこめたつもりだったんだけどね。失敗しちゃった」
    CH01,MIDGAR SECTOR 4 PLATE,ジェシー,JESSIE,「こんどはもっとましなもの プレゼントするわ」
    CH01,MIDGAR SECTOR 4 PLATE,ジェシー,JESSIE,「先にアジトに帰って研究開発に はげんでるからね」
    CH01,MIDGAR SECTOR 4 REACTOR,INFO,INFO,＜四番街プレート下部＞
    CH01,MIDGAR SECTOR 4 REACTOR,ビッグス,BIGGS,「おれたちは、これで引き上げる。アジトで落ち合おうぜ」
    CH01,MIDGAR SECTOR 4 REACTOR,ビッグス,BIGGS,「クラウド、五番街魔晄炉の爆破 よろしくたのむぜ！」
    CH01,MIDGAR SECTOR 4 REACTOR,INFO,INFO,＜五番魔晄炉＞
    CH01,MIDGAR SECTOR 4 REACTOR,INFO,CLOUD'S EGO,＜クラウド、頭を押さえ、うずくまる＞
    CH01,NIBELHEIM REACTOR,INFO,INFO,＜回想＞
    CH01,NIBELHEIM REACTOR,INFO,TIFA REACTOR,＜父親の亡骸を見てうずくまる15歳くらいのティファ＞
    CH01,NIBELHEIM REACTOR,ティファ_REACTOR,TIFA REACTOR,「パパ……」
    CH01,NIBELHEIM REACTOR,ティファ_REACTOR,TIFA REACTOR,「セフィロスね！」
    CH01,NIBELHEIM REACTOR,ティファ_REACTOR,TIFA REACTOR,「セフィロスがやったのね！」
    CH01,NIBELHEIM REACTOR,ティファ_REACTOR,TIFA REACTOR,「セフィロス……ソルジャー…… 魔晄炉……神羅……ぜんぶ！」
    CH01,NIBELHEIM REACTOR,ティファ_REACTOR,TIFA REACTOR,「ぜんぶ大キライ！」
    CH01,NIBELHEIM REACTOR,INFO,TIFA REACTOR,＜ティファ、剣を持ち、奥へと進む＞
    CH01,NIBELHEIM REACTOR,INFO,INFO,＜回想終了＞
    CH01,MIDGAR SECTOR 4 REACTOR,バレット,BARRET,「おい、しっかりしてくれよ！」
    CH01,MIDGAR SECTOR 4 REACTOR,ティファ,TIFA,「だいじょうぶ？」
    CH01,MIDGAR SECTOR 4 REACTOR,クラウド,CLOUD,「……ティファ」
    CH01,MIDGAR SECTOR 4 REACTOR,ティファ,TIFA,「ん？」
    CH01,MIDGAR SECTOR 4 REACTOR,クラウド,CLOUD,「い……いや…… 気にするな。さあ、先を急ごう！」
    CH01,MIDGAR SECTOR 4 REACTOR,ティファ,TIFA,「３人同時にボタンを押せって ジェシーが言ってたわ」
    CH01,MIDGAR SECTOR 4 REACTOR,INFO,TIFA,＜同時押し失敗＞
    CH01,MIDGAR SECTOR 4 REACTOR,ティファ,TIFA,「失敗ね、もう一度」
    CH01,MIDGAR SECTOR 4 WALKWAY,INFO,TIFA,＜成功。 /n → 扉が開く＞
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「こっちだ！」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「神羅兵！？」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「くそっ！ どうなってんだ？」
    CH01,MIDGAR SECTOR 4 WALKWAY,クラウド,CLOUD,「……ワナ、か」
    CH01,MIDGAR SECTOR 4 WALKWAY,INFO,PRESIDENT SHINRA,＜そこで、プレジデント神羅、登場＞
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「プ、プレジデント神羅？」
    CH01,MIDGAR SECTOR 4 WALKWAY,ティファ,TIFA,「なぜ、プレジデントが ここにいるの？」
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「ほほう。君たちがアレかね。……なんて言ったかな？」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「アバランチだ！　覚えておけ！ おまえはプレジデント神羅だな」
    CH01,MIDGAR SECTOR 4 WALKWAY,クラウド,CLOUD,「ひさしぶりだな、プレジデント」
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「……ひさしぶり？ ああ、君がアレかね」
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「アバランチとやらに参加しているという元ソルジャー。たしかにその目の輝きは 魔晄を浴びた者……」
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「その裏切り者の名前は なんといったかな？」
    CH01,MIDGAR SECTOR 4 WALKWAY,クラウド,CLOUD,「クラウド、だ」
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「すまないがソルジャーの名前なんて いちいち覚えとらんのでな」
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「せめてセフィロスぐらいには なってもらわんと」
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「そう、セフィロス……。優秀なソルジャーであった。そう、優秀すぎる……な」
    CH01,MIDGAR SECTOR 4 WALKWAY,クラウド,CLOUD,「セフィロスだと……？」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「んなこたぁ、どうでもいい！ もうすぐここはドッカン！！だぜ！ ざまあみあがれ！」
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「そうだな。キミたちウジ虫を始末するには 高価すぎる花火ではあるが……」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「ウジ虫だと！？ 言うに事欠いて、ウジ虫だと！」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「キサマら神羅は、この星を死に追いやろうとする寄生虫じゃねェか！ その親玉であるキサマが 何をえらそうにホザく！」
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「……そろそろキミたちの相手をするのにもあきたよ」
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「わしは多忙な男なのでな。もう、失礼させてもらうか。今日は、会食の予定があるものでな」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「会食だと！？　ふざけやがって！ おまえには言いたいことが まだまだあるんだ！」
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「キミたちの遊び相手は 別に用意させてもらった」
    CH01,MIDGAR SECTOR 4 WALKWAY,ティファ,TIFA,「！？　何の音？」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「な、なんだコイツは！！」
    CH01,MIDGAR SECTOR 4 WALKWAY,INFO,INFO,＜エアバスター、現る＞
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「我が社の兵器開発部が試行した機動兵『エアバスター』だ」
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「君たちとの戦闘データは 今後の開発の貴重なサンプルとして利用させてもらうよ」
    CH01,MIDGAR SECTOR 4 WALKWAY,クラウド,CLOUD,「……機動兵？」
    CH01,MIDGAR SECTOR 4 WALKWAY,プレジデント神羅,PRESIDENT SHINRA,「では、失礼」
    CH01,MIDGAR SECTOR 4 WALKWAY,INFO,PRESIDENT SHINRA,＜プレジデント神羅、やってきたヘリコプターに乗り込んで、さっそうと去る＞
    CH01,MIDGAR SECTOR 4 WALKWAY,クラウド,CLOUD,「待て、プレジデント！」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「おい、クラウド！ とりあえずコイツをなんとかするぞ！」
    CH01,MIDGAR SECTOR 4 WALKWAY,ティファ,TIFA,「助けて、クラウド！」
    CH01,MIDGAR SECTOR 4 WALKWAY,ティファ,TIFA,「これ、ソルジャーなの？」
    CH01,MIDGAR SECTOR 4 WALKWAY,クラウド,CLOUD,「まさか！　ただの機械さ」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「なんでもいい！ ぶっこわしてやるぜ！」
    CH01,MIDGAR SECTOR 4 WALKWAY,INFO,INFO,＜戦闘：エアバスター＞ /n ＜エアバスターを撃破＞ /n ＜戦闘終了＞
    CH01,MIDGAR SECTOR 4 WALKWAY,INFO,INFO,＜エアバスターの爆発とともに路面が破壊され、クラウドが落ちそうになる＞
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「もうすぐ爆発する！ 行くぞ、ティファ！」
    CH01,MIDGAR SECTOR 4 WALKWAY,ティファ,TIFA,「バレット！ 何とかならないの？」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「どうしようもねえな」
    CH01,MIDGAR SECTOR 4 WALKWAY,ティファ,TIFA,「クラウド！ なんとかして生きて！　死んじゃダメ！ 話したいことたくさんあるの！」
    CH01,MIDGAR SECTOR 4 WALKWAY,クラウド,CLOUD,「わかってる、ティファ」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「おい、なんとかなりそうか？」
    CH01,MIDGAR SECTOR 4 WALKWAY,INFO,CLOUD,＜選択肢：（つよがる）or（ダメかもしれない……） /n →（つよがる）を選択＞
    CH01,MIDGAR SECTOR 4 WALKWAY,クラウド,CLOUD,「…………」
    CH01,MIDGAR SECTOR 4 WALKWAY,クラウド,CLOUD,「自分の心配でもしてろ！ 俺はいいからティファを！」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「……そうか。いろいろ悪かったな」
    CH01,MIDGAR SECTOR 4 WALKWAY,クラウド,CLOUD,「これで終わりみたいな言いかたは やめてくれ！」
    CH01,MIDGAR SECTOR 4 WALKWAY,バレット,BARRET,「じゃ、あとでな」
    CH01,MIDGAR SECTOR 4 WALKWAY,INFO,CLOUD,＜そしてクラウド、落っこちる＞
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『……大丈夫か？』,779,,,
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『……聞こえるか？』,698,,,
    CH02,DARKNESS,クラウド,CLOUD,「…………ああ」,593,,,
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『あの時は…… ヒザすりむいただけですんだけど……』,2070,,,
    CH02,DARKNESS,クラウド,CLOUD,「……あの時？」
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『今度はどうかな？ 起きられるか？』
    CH02,DARKNESS,クラウド,CLOUD,「……あの時？ ……今度は？」
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『……気にするな。今は身体のことだけ考えるんだ』
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『……身体、動かせるか？』
    CH02,DARKNESS,クラウド,CLOUD,「……やってみる」
    CH02,DARKNESS,花売り,AERITH,「あっ！　動いた！」
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『……どうだ？』
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『ゆっくりな。少しずつ少しずつ……』
    CH02,DARKNESS,花売り,AERITH,「もしもし？」
    CH02,DARKNESS,クラウド,CLOUD,「……わかってるさ」
    CH02,DARKNESS,クラウド,CLOUD,「なあ……あんた、誰だ？」
    CH02,DARKNESS,花売り,AERITH,「もしも～し！」
    CH02,AERITH'S CHURCH,INFO,CLOUD,＜目が覚めると、そこは教会（五番街）の中であった＞,"＜'When I woke up, I was in a church [on Fifth Avenue].",,,
    CH02,AERITH'S CHURCH,花売り,AERITH,「だいじょうぶ？」
    CH02,AERITH'S CHURCH,花売り,AERITH,「ここ、スラムの教会。５番街よ」
    CH02,AERITH'S CHURCH,花売り,AERITH,「いきなり、落ちてくるんだもん。おどろいちゃった」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「……落ちてきた」
    CH02,AERITH'S CHURCH,花売り,AERITH,「屋根と、花畑、クッションになったのかな。運、いいね」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「花畑……あんたの花畑？」
    CH02,AERITH'S CHURCH,INFO,CLOUD,＜クラウド、起き上がる＞,"＜Cloud, get up.",,,
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「それは悪かったな」
    CH02,AERITH'S CHURCH,花売り,AERITH,「気にしないで。お花、けっこう強いし ここ、特別な場所だから」
    CH02,AERITH'S CHURCH,花売り,AERITH,「ミッドガルって 草や花、あまり育たないでしょ？ でも、ここだけ花、さくの」
    CH02,AERITH'S CHURCH,花売り,AERITH,「好きなんだ、ここ」
    CH02,AERITH'S CHURCH,花売り,AERITH,「……また、会えたね」
    CH02,AERITH'S CHURCH,花売り,AERITH,「……おぼえてないの？」
    CH02,AERITH'S CHURCH,INFO,CLOUD,＜選択肢：（会ったことある）or（たしか、初対面だ）→（会ったことある）を選択＞,"<Option: (We have met) or (I think, we have never met) -> Select (We have met) >.",,,
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「ああ、覚えてるさ」
    CH02,AERITH'S CHURCH,INFO,CLOUD,＜選択肢：「花を売ってたな」or「スラムの酔っぱらい」→「花を売ってたな」を選択＞,<Options: 'You sold flowers' or 'Drunks in the slums' -> Select 'You sold flowers'.,,,
    CH02,AERITH'S CHURCH,花売り,AERITH,「あっ！　うれしいな～！」
    CH02,AERITH'S CHURCH,花売り,AERITH,「あのときは、お花、買ってくれて ありがと」
    CH02,AERITH'S CHURCH,花売り,AERITH,「ね、マテリア、持ってるんだね」
    CH02,AERITH'S CHURCH,花売り,AERITH,「わたしも持ってるんだ」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「今はマテリアはめずらしくもなんともない」
    CH02,AERITH'S CHURCH,花売り,AERITH,「わたしのは特別。だって、何の役にも立たないの」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「……役に立たない？ 使い方を知らないだけだろ？」
    CH02,AERITH'S CHURCH,花売り,AERITH,「そんなこと、ないけど…… でも、役に立たなくていいの」
    CH02,AERITH'S CHURCH,花売り,AERITH,「身につけると安心できるし お母さんが残してくれた……」
    CH02,AERITH'S CHURCH,花売り,AERITH,「ね、いろいろ、お話したいんだけど どうかな？」
    CH02,AERITH'S CHURCH,花売り,AERITH,「せっかく、こうして また、会えたんだし……ね？」
    CH02,AERITH'S CHURCH,INFO,CLOUD,＜選択肢：「ああ、かまわない」or「話すことなどない」→「ああ、かまわない」を選択＞,"<Options: 'Oh, I don't mind' or 'I have nothing to say' -> Select 'Oh, I don't mind' >.",,,
    CH02,AERITH'S CHURCH,花売り,AERITH,「じゃ、待ってて。お花の手入れ、すぐ終わるから」
    CH02,AERITH'S CHURCH,INFO,AERITH,＜エアリス、しばらく花の手入れに没頭＞,"＜Aeris, immersed in flower care for a while.",,,
    CH02,AERITH'S CHURCH,花売り,AERITH,「も～すこし待ってて」
    CH02,AERITH'S CHURCH,花売り,AERITH,「あ！」
    CH02,AERITH'S CHURCH,花売り,AERITH,「そういえば、まだだった」
    CH02,AERITH'S CHURCH,花売り,AERITH,「おたがい、名前、知らないね」
    CH02,AERITH'S CHURCH,花売り,AERITH,「わたしは……」
    CH02,AERITH'S CHURCH,INFO,AERITH,＜エアリスの名前入力画面＞,<Aeris name input screen>.,,,
    CH02,AERITH'S CHURCH,エアリス,AERITH,「わたし、花売りのエアリス。よろしくね」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「俺はクラウドだ」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「仕事は…… 仕事は『なんでも屋』だ」
    CH02,AERITH'S CHURCH,エアリス,AERITH,「はぁ……なんでも屋さん」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「なんでもやるのさ」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「何がおかしい！ どうして笑う！」
    CH02,AERITH'S CHURCH,エアリス,AERITH,「ごめんなさい……でも、ね」
    CH02,AERITH'S CHURCH,INFO,RENO,＜そこへ、レノが現れる＞,＜Then Leno appears.,,,
    CH02,AERITH'S CHURCH,エアリス,AERITH,「タイミング、悪いなぁ」
    CH02,AERITH'S CHURCH,エアリス,AERITH,「クラウド！ かまっちゃダメ！」
    CH02,AERITH'S CHURCH,レノ,RENO,「オレにかまうな、だと」
    CH02,AERITH'S CHURCH,エアリス,AERITH,「ねえ、クラウド。ボディガードも仕事のうち？」
    CH02,AERITH'S CHURCH,エアリス,AERITH,「何でも屋さん、でしょ？」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「……そうだけどな」
    CH02,AERITH'S CHURCH,エアリス,AERITH,「ここから連れ出して。家まで、連れてって」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「お引き受けしましょう。しかし、安くない」
    CH02,AERITH'S CHURCH,エアリス,AERITH,「じゃあねえ……」
    CH02,AERITH'S CHURCH,エアリス,AERITH,「デート、１回！」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「どこの誰だか知らないが……」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「知らない……？」
    CH02,AERITH'S CHURCH,謎の声,MYSTERY VOICE,『……知ってるよ』
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「そうだ……俺は知っている」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「その制服は……」
    CH02,AERITH'S CHURCH,レノ,RENO,「……おねえちゃん こいつ、なんだか変だぞ、と」
    CH02,AERITH'S CHURCH,クラウド,CLOUD,「だまれ！　神羅のイヌめ！」
    CH02,AERITH'S CHURCH,兵士,SOLDIER 1ST CLASS,「レノさん！ やっちまいますか？」
    CH02,AERITH'S CHURCH,レノ,RENO,「考え中だぞ、と」
    CH02,AERITH'S CHURCH,エアリス,AERITH,「ここで戦ってほしくない！ お花、ふまないでほしいの！」
    CH02,AERITH'S CHURCH,エアリス,AERITH,「出口、奥にあるから」
    CH02,AERITH'S CHURCH,レノ,RENO,「あれは……魔晄の目」
    CH02,AERITH'S CHURCH,レノ,RENO,「ま、いいかぁ。お仕事お仕事、と」
    CH02,AERITH'S CHURCH,レノ,RENO,「あっ！」
    CH02,AERITH'S CHURCH,レノ,RENO,「お花、ふまないでね…だと」
    CH02,AERITH'S CHURCH,３人の兵士たち,SOLDIER 1ST CLASS GROUP,「レノさん、ふんだ！」
    CH02,AERITH'S CHURCH,３人の兵士たち,SOLDIER 1ST CLASS GROUP,「花、ぐしゃぐしゃ！」
    CH02,AERITH'S CHURCH,３人の兵士たち,SOLDIER 1ST CLASS GROUP,「怒られる～！」
    CH02,AERITH'S CHURCH BACK,INFO,INFO,＜教会奥＞,<In the back of the church.,,,
    CH02,AERITH'S CHURCH BACK,レノ,RENO,「いたぞ、あそこだ！」
    CH02,AERITH'S CHURCH BACK,エアリス,AERITH,「クラウド、あれ！」
    CH02,AERITH'S CHURCH BACK,クラウド,CLOUD,「わかっている。どうやら見逃すつもりはないようだな」
    CH02,AERITH'S CHURCH BACK,エアリス,AERITH,「どうしよう？」
    CH02,AERITH'S CHURCH BACK,クラウド,CLOUD,「つかまるわけにはいかないんだろ？ それなら、答えはひとつさ」
    CH02,AERITH'S CHURCH BACK,INFO,INFO,＜クラウド、通路の切れ端からジャンプ。→向こう側へ着地＞,＜Cloud jumps from the end of the passage. →He lands on the other side.,,,
    CH02,AERITH'S CHURCH BACK,クラウド,CLOUD,「さあ、エアリス。こっちだ」
    CH02,AERITH'S CHURCH BACK,クラウド,CLOUD,「だいじょうぶだ。俺が受け止めてやる」
    CH02,AERITH'S CHURCH BACK,エアリス,AERITH,「わかったわ。しっかり受け止めてね」
    CH02,AERITH'S CHURCH BACK,レノ,RENO,「古代種が逃げるぞ！ 撃て、撃て！　あ、撃つな！」
    CH02,AERITH'S CHURCH BACK,INFO,INFO,＜兵士はもうすでに銃を撃ってしまう＞,<Soldiers would already be firing their guns.,,,
    CH02,AERITH'S CHURCH BACK,エアリス,AERITH,「きゃあ！」
    CH02,AERITH'S CHURCH BACK,INFO,INFO,＜エアリス、下へ落っこちる＞
    CH02,AERITH'S CHURCH BACK,クラウド,CLOUD,「エアリス！」
    CH02,AERITH'S CHURCH BACK,レノ,RENO,「やっちまったかな、と。抵抗するからだぞ、と」
    CH02,AERITH'S CHURCH BACK,エアリス,AERITH,「クラウド、助けて！」
    CH02,AERITH'S CHURCH BACK,クラウド,CLOUD,「くそっ！」
    CH02,AERITH'S CHURCH BACK,クラウド,CLOUD,「あれは……？」
    CH02,AERITH'S CHURCH BACK,クラウド,CLOUD,「エアリス！」
    CH02,AERITH'S CHURCH BACK,INFO,CLOUD,＜選択肢：「しばらく待っていろ！」or「戦え」or「逃げるんだ」→「しばらく待っていろ」を選択（この選択肢がタルを落とすごとに３回出てくる）＞,"<Options: ""Wait a while!"" OR ""Fight"" OR ""Run away"" -> Select ""Wait a while"" (this option appears three times for each dropped tar) >.",,,
    CH02,AERITH'S CHURCH BACK,INFO,CLOUD,＜ここからクラウド「しばらく待っていろ」を３回とも選択し、上のタルを落として兵士にぶつけようとする。しかし、３回とも失敗（汗）＞,"<From here, choose Cloud ""Wait for a while"" all three times, drop the top talons and try to hit the soldier. However, all three times he fails (sweat)>.",,,
    CH02,AERITH'S CHURCH BACK,エアリス,AERITH,「もう、クラウド なにやってるのよ！」
    CH02,AERITH'S CHURCH BACK,INFO,AERITH,＜失敗すると、一回ずつエアリス自ら兵士との戦闘になる＞,<Each failure results in a battle with Aeris herself against the soldiers.,,,
    CH02,AERITH'S CHURCH ATTIC,INFO,INFO,＜教会屋根裏＞,<Church attic.,,,
    CH02,AERITH'S CHURCH ATTIC,クラウド,CLOUD,「エアリス、こっちだ」
    CH02,AERITH'S CHURCH ATTIC,エアリス,AERITH,「フフフ…… まださがしてるね」
    CH02,AERITH'S CHURCH ATTIC,クラウド,CLOUD,「初めてじゃないな？ やつらが襲ってきたのは？」
    CH02,AERITH'S CHURCH ATTIC,エアリス,AERITH,「……まあ、ね」
    CH02,AERITH'S CHURCH ATTIC,クラウド,CLOUD,「タークスだよ、あいつらは」
    CH02,AERITH'S CHURCH ATTIC,エアリス,AERITH,「ふ～ん……」
    CH02,AERITH'S CHURCH ATTIC,クラウド,CLOUD,「タークスは神羅の組織。ソルジャーの人材をみつけだし スカウトするのが役目だ」
    CH02,AERITH'S CHURCH ATTIC,エアリス,AERITH,「こんな乱暴なやりかたで？ まるで人さらいみたい」
    CH02,AERITH'S CHURCH ATTIC,クラウド,CLOUD,「それにウラじゃ 汚いことをやっている」
    CH02,AERITH'S CHURCH ATTIC,クラウド,CLOUD,「スパイ、殺し屋…… いろいろだ」
    CH02,AERITH'S CHURCH ATTIC,エアリス,AERITH,「そんな顔してるね」
    CH02,AERITH'S CHURCH ATTIC,クラウド,CLOUD,「でも、どうして あんたがねらわれる？ 何かわけがあるんだろ？」
    CH02,AERITH'S CHURCH ATTIC,エアリス,AERITH,「う～ん……べつに。あ、わたしソルジャーの素質があるのかも！」
    CH02,AERITH'S CHURCH ATTIC,クラウド,CLOUD,「そうかもな。なりたいのか？」
    CH02,AERITH'S CHURCH ATTIC,エアリス,AERITH,「どうかな～。でも、あんなヤツらにつかまるのはイヤ！」
    CH02,AERITH'S CHURCH ATTIC,クラウド,CLOUD,「それじゃ、行くぞ！」
    CH02,ACROSS THE WASTE,エアリス,AERITH,「待って…… ちょっと待ってってば！」
    CH02,ACROSS THE WASTE,エアリス,AERITH,「ハア…… ハア……」
    CH02,ACROSS THE WASTE,エアリス,AERITH,「ひとりで……さきに…… 行っちゃうんだもん……」
    CH02,ACROSS THE WASTE,クラウド,CLOUD,「おかしいな……」
    CH02,ACROSS THE WASTE,クラウド,CLOUD,「ソルジャーの素質があるんじゃなかったか？」
    CH02,ACROSS THE WASTE,エアリス,AERITH,「もう！　いじわる！」
    CH02,ACROSS THE WASTE,INFO,AERITH,＜二人、微笑する＞,<The two of them smile>.,,,
    CH02,ACROSS THE WASTE,エアリス,AERITH,「ねえ……クラウド。あなた、もしかして…… ソルジャー？」
    CH02,ACROSS THE WASTE,クラウド,CLOUD,「…………」
    CH02,ACROSS THE WASTE,クラウド,CLOUD,「……元ソルジャーだ。どうしてわかった？」
    CH02,ACROSS THE WASTE,エアリス,AERITH,「あなたの目。その不思議な輝き……」
    CH02,ACROSS THE WASTE,クラウド,CLOUD,「そう、これは魔晄を浴びた者…… ソルジャーのあかし」
    CH02,ACROSS THE WASTE,クラウド,CLOUD,「だが、どうして、あんたがそれを？」
    CH02,ACROSS THE WASTE,エアリス,AERITH,「……ちょっと、ね」
    CH02,ACROSS THE WASTE,クラウド,CLOUD,「ちょっと……？」
    CH02,ACROSS THE WASTE,エアリス,AERITH,「そ、ちょっと！」
    CH02,ACROSS THE WASTE,エアリス,AERITH,「さ、行きましょ！ ボディーガードさん！」
    CH02,SECTOR 5 SLUMS,INFO,INFO,＜五番街スラム＞,<Fifth Avenue Slum>.,,,
    CH02,SECTOR 5 SLUMS,エアリス,AERITH,「フ～！　やっとおりられた！ さて、と……」
    CH02,SECTOR 5 SLUMS,エアリス,AERITH,「こっちよ、わたしの家は。あの人たちが来ないうちに急ぎましょ」
    CH02,SECTOR 5 SLUMS,エアリス,AERITH,「ここの人、病気みたいなの」
    CH02,SECTOR 5 SLUMS,エアリス,AERITH,「近くで倒れていたのを 誰かが助けたんだって」
    CH02,SECTOR 5 SLUMS,みすぼらしい男,THIS GUY ARE SICK,「う……あ……あぁ……」
    CH02,SECTOR 5 SLUMS,エアリス,AERITH,「この人なの…… ね、助けてあげられない？」
    CH02,SECTOR 5 SLUMS,みすぼらしい男,THIS GUY ARE SICK,「う……あ……あぁ……」
    CH02,SECTOR 5 SLUMS,クラウド,CLOUD,「悪いが俺は医者じゃない」
    CH02,SECTOR 5 SLUMS,エアリス,AERITH,「そう……そうよね……」
    CH02,SECTOR 5 SLUMS,エアリス,AERITH,「あら？　この人、イレズミしてる。数字の２、かな」
    CH02,AERITH'S HOUSE,INFO,INFO,＜エアリスの家＞,<Aerith's house>.,,,
    CH02,AERITH'S HOUSE,エアリス,AERITH,「ただいま、お母さん」
    CH02,AERITH'S HOUSE,INFO,ELMYRA,＜エルミナ、むかえる＞,"<Elmina, mukumu>.",,,
    CH02,AERITH'S HOUSE,エアリス,AERITH,「この人、クラウド。わたしのボディーガードよ」
    CH02,AERITH'S HOUSE,エルミナ,ELMYRA,「ボディーガードって…… おまえ、また狙われたのかい？」
    CH02,AERITH'S HOUSE,エルミナ,ELMYRA,「体は！？　ケガはないのかい！？」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「だいじょうぶ。今日はクラウドもいてくれたし」
    CH02,AERITH'S HOUSE,エルミナ,ELMYRA,「ありがとうね、クラウドさん」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「ねえ、これからどうするの？」
    CH02,AERITH'S HOUSE,クラウド,CLOUD,「……７番街は遠いのか？ ティファの店に行きたいんだ」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「ティファって……女の人？」
    CH02,AERITH'S HOUSE,クラウド,CLOUD,「ああ」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「彼女？」
    CH02,AERITH'S HOUSE,クラウド,CLOUD,「彼女？
    CH02,AERITH'S HOUSE,INFO,CLOUD,＜選択肢：「そんなんじゃない！」or「そんなところだ」→「そんなんじゃない！」を選択＞,"<Option: 'It's not like that!' OR ""That's about it"" -> ""It's not like that!"" Choice >.",,,
    CH02,AERITH'S HOUSE,エアリス,AERITH,「ふふふ」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「そ～んなにムキにならなくても いいと思うけど」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「でも、まあ、いいわ」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「７番街だったわね。私が案内してあげる」
    CH02,AERITH'S HOUSE,クラウド,CLOUD,「冗談じゃない。また危ない目にあったら どうするんだ？」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「なれてるわ」
    CH02,AERITH'S HOUSE,クラウド,CLOUD,「なれてる！？」
    CH02,AERITH'S HOUSE,クラウド,CLOUD,「……まあ、そうだとしても 女の力をかりるなんて…」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「女！！ 女の力なんて！？」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「そういう言い方されて だまってるわけにはいかないわね」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「お母さん！ わたし、７番街まで クラウドをおくっていくから」
    CH02,AERITH'S HOUSE,エルミナ,ELMYRA,「やれやれ。言いだしたら聞かないからね」
    CH02,AERITH'S HOUSE,エルミナ,ELMYRA,「でも、明日にしたらどうだい？ 今日はもう遅くなってきたし」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「うん、わかった、お母さん」
    CH02,AERITH'S HOUSE,エルミナ,ELMYRA,「エアリス、ベッドの準備をしておくれ」
    CH02,AERITH'S HOUSE,エルミナ,ELMYRA,「あんたのその目の輝きは…… ソルジャーなんだろ？」
    CH02,AERITH'S HOUSE,クラウド,CLOUD,「ああ。しかし、むかしの話だ…」
    CH02,AERITH'S HOUSE,エルミナ,ELMYRA,「………。言いにくいんだけど…」
    CH02,AERITH'S HOUSE,エルミナ,ELMYRA,「今夜のうちに出ていってくれないかい？ エアリスにはないしょでさ」
    CH02,AERITH'S HOUSE,エルミナ,ELMYRA,「ソルジャーなんて…… またエアリスが悲しい思いをすることになる……」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「７番街へは６番街を抜けていくの。６番街、ちょっと危険なところだから 今夜はゆっくり休んでね」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「クラウド」
    CH02,AERITH'S HOUSE,エアリス,AERITH,「おやすみ」
    CH02,AERITH'S HOUSE,クラウド,CLOUD,「まいったな……」
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『……かなり、アレだな。つかれてるみたいだぞ』
    CH02,DARKNESS,クラウド,CLOUD,「…………！？」
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『こんなキチンとしたベッド ……ひさしぶりだ』
    CH02,DARKNESS,クラウド,CLOUD,「……ああ、そうだな」
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『あれ以来、かな』
    CH02,CLOUD'S HOME,INFO,INFO,＜回想＞,<Recollection.,,,
    CH02,CLOUD'S HOME,クラウドの母親,CLOUD'S  MOTHER,「本当に立派になってぇ」
    CH02,CLOUD'S HOME,クラウドの母親,CLOUD'S  MOTHER,「そんなんじゃ、あれだね。女の子もほっとかないだろ？」
    CH02,CLOUD'S HOME,クラウド,CLOUD,「……べつに」,NOTE: It's a recollection but it's a dream and simply Cloud is the current aged/dressed cloud,,,
    CH02,CLOUD'S HOME,クラウドの母親,CLOUD'S  MOTHER,「心配なんだよ」
    CH02,CLOUD'S HOME,クラウドの母親,CLOUD'S  MOTHER,「都会にはいろいろ誘惑が多いんだろ？」
    CH02,CLOUD'S HOME,クラウドの母親,CLOUD'S  MOTHER,「ちゃんとした彼女がいれば 母さん、すこしは安心できるってもんだ」
    CH02,CLOUD'S HOME,クラウド,CLOUD,「……俺はだいじょうぶだよ」
    CH02,CLOUD'S HOME,クラウドの母親,CLOUD'S  MOTHER,「あんたにはねぇ……」
    CH02,CLOUD'S HOME,クラウドの母親,CLOUD'S  MOTHER,「ちょっとお姉さんで あんたをグイグイ引っ張っていく」
    CH02,CLOUD'S HOME,クラウドの母親,CLOUD'S  MOTHER,「そんな女の子が ぴったりだと思うんだけどね」
    CH02,CLOUD'S HOME,クラウド,CLOUD,「……興味ないな」
    CH02,CLOUD'S HOME,INFO,INFO,＜回想終了＞,<End of recollection>.,,,
    CH02,AERITH'S HOUSE,クラウド,CLOUD,「……いつのまにか 眠ってしまったのか」
    CH02,AERITH'S HOUSE,クラウド,CLOUD,「６番街をこえて７番街へ、か。１人でなんとかなりそうだな」
    CH02,AERITH'S HOUSE,INFO,CLOUD,＜クラウド、廊下で音をたててしまい、エアリスに見つかる＞,＜Cloud makes a noise in the corridor and Aeris finds him.,,,
    CH02,AERITH'S HOUSE,エアリス,AERITH,「もう！　またタークス、来たのかと思ったじゃない！ おとなしく休んで！」
    CH02,AERITH'S HOUSE,クラウド,CLOUD,「次はみつからないように……」
    CH02,SECTOR 5 SLUMS,INFO,INFO,＜五番街スラム＞,<Fifth Avenue Slum>.,,,
    CH02,SECTOR 5 SLUMS,INFO,AERITH,＜エアリス、先回りしていたらしく、出口で仁王立ちしている＞,"＜Aeris, who seems to have been ahead of us, is standing on the exit.",,,
    CH02,SECTOR 5 SLUMS,エアリス,AERITH,「お早い出発、ね」
    CH02,SECTOR 5 SLUMS,クラウド,CLOUD,「危険だとわかっているのに あんたにたよるわけにはいかないさ」
    CH02,SECTOR 5 SLUMS,エアリス,AERITH,「言いたいことはそれだけ？」
    CH02,SECTOR 5 SLUMS,エアリス,AERITH,「ティファさんのいる【セブンスヘブン】は この先のスラム【６番街】を通らないといけないの」
    CH02,SECTOR 5 SLUMS,エアリス,AERITH,「案内してあげる。さ、行きましょ！」
    CH02,KIDS PARK,INFO,INFO,＜六番街公園＞,<Rokubangai Park>.,,,
    CH02,KIDS PARK,エアリス,AERITH,「この奥に７番街へのゲートがあるの」
    CH02,KIDS PARK,クラウド,CLOUD,「わかった。じゃあ、ここで別れようか。ひとりで帰れるか？」
    CH02,KIDS PARK,エアリス,AERITH,「いや～ん、帰れない～！！ って言ったらどうするの？」
    CH02,KIDS PARK,INFO,CLOUD,＜選択肢：「家までおくる」or「７番街までいっしょに」→「家までおくる」を選択＞,＜Option: 'Take me home' or 'Come with me to 7th Avenue' >> Select 'Take me home'.,,,
    CH02,KIDS PARK,エアリス,AERITH,「それってなんだかおかしくない？」
    CH02,KIDS PARK,エアリス,AERITH,「ちょっと休もっか」
    CH02,KIDS PARK,INFO,AERITH,＜エアリス、すべり台を見上げる＞,"＜Aeris, looking up the slide.",,,
    CH02,KIDS PARK,エアリス,AERITH,「なつかしい、まだあったんだ」
    CH02,KIDS PARK,INFO,AERITH,＜するとエアリス、すべり台の天辺に上がる＞,＜Then Aeris goes up to the top of the slide.,,,
    CH02,KIDS PARK,エアリス,AERITH,「クラウド、こっち！」
    CH02,KIDS PARK,INFO,CLOUD,＜クラウド、エアリスの隣に座る＞,＜クラウド、エアリスの隣に座る＞,,,
    CH02,KIDS PARK,エアリス,AERITH,「あなた、クラスは？」
    CH02,KIDS PARK,クラウド,CLOUD,「クラス？」
    CH02,KIDS PARK,エアリス,AERITH,「ソルジャーのクラス」
    CH02,KIDS PARK,クラウド,CLOUD,「ああ、俺は……」
    CH02,KIDS PARK,クラウド,CLOUD,「クラス…… １ST（ファースト）だ」
    CH02,KIDS PARK,エアリス,AERITH,「ふ～ん。　おんなじだ」
    CH02,KIDS PARK,クラウド,CLOUD,「誰と同じだって？」
    CH02,KIDS PARK,エアリス,AERITH,「初めて好きになった人」
    CH02,KIDS PARK,クラウド,CLOUD,「……つきあってた？」
    CH02,KIDS PARK,エアリス,AERITH,「そんなんじゃないの。ちょっと、いいなって思ってた」
    CH02,KIDS PARK,クラウド,CLOUD,「もしかしたら知ってるかもしれないな。そいつの名前は？」
    CH02,KIDS PARK,エアリス,AERITH,「もう、いいの」
    CH02,KIDS PARK,INFO,INFO,＜そこへ、ゲートが開いてチョコボ車が通る。その後部には……＞,<Then the gate opens and a chocobo vehicle passes through. At the rear of it is a ......>,,,
    CH02,KIDS PARK,クラウド,CLOUD,「ん？　あの後ろ……」）
    CH02,KIDS PARK,クラウド,CLOUD,「ティファ！？」
    CH02,KIDS PARK,エアリス,AERITH,「あれに乗っていた人がティファさん？ どこいくのかしら？ それに、様子が変だったわね……」
    CH02,KIDS PARK,INFO,AERITH,＜エアリス、ぴょんぴょん飛び跳ねて、一人でチョコボ車が向かった先へ向かう＞,"＜Aeris, jumping up and down and heading off on her own towards where the chocobo car was headed.",,,
    CH02,KIDS PARK,クラウド,CLOUD,「まて！」
    CH02,KIDS PARK,クラウド,CLOUD,「俺ひとりでいい！ あんたは帰れ！」
    CH02,WALL MARKET,INFO,INFO,＜ウォールマーケット＞,<Wall Market.,,,
    CH02,WALL MARKET,エアリス,AERITH,「ここ、いろんな意味でこわいとこよ。とくに女の子はね。早くティファさん、見つけなくちゃ」
    CH02,OUTSIDE HONEYBEE INN,INFO,INFO,＜蜜蜂の館前＞,<Before the bee house>.,,,
    CH02,OUTSIDE HONEYBEE INN,ジョニー,JOHNNY,「ああ……。入るべきか……　入らざるべきか？」
    CH02,OUTSIDE HONEYBEE INN,ジョニー,JOHNNY,「ああ……俺ってこういうとき なんか文学的になっちゃうんだよな。まいるぜ！！」
    CH02,OUTSIDE HONEYBEE INN,ジョニー,JOHNNY,「お！！　あんたは？」
    CH02,OUTSIDE HONEYBEE INN,ジョニー,JOHNNY,「エェ！！　あんたも？」
    CH02,OUTSIDE HONEYBEE INN,INFO,CLOUD,＜選択肢：「ああ、俺もだ」or「おまえといっしょにするな」→「おまえといっしょにするな」を選択＞,"＜Options: 'Yeah, me too' or 'Don't fuck with you' - select 'Don't fuck with you'.",,,
    CH02,OUTSIDE HONEYBEE INN,ジョニー,JOHNNY,「エッ……俺だってよ。よく考えたすえの結論だ。最後のミッドガルの思い出によ…」
    CH02,OUTSIDE HONEYBEE INN,ジョニー,JOHNNY,「でもよ…… あそこの男が恐くて」
    CH02,OUTSIDE HONEYBEE INN,兵士,SOLDIER 1ST CLASS,「くっ～～ どうしてもダメ…… ここから先に勧めないです」
    CH02,OUTSIDE HONEYBEE INN,兵士,SOLDIER 1ST CLASS,「ボクのレベルと給料じゃたりんです。身分がちがいすぎるです」
    CH02,OUTSIDE HONEYBEE INN,ギザギザ頭の男,SPIKY HAIR GUY,「あんだよ！！　てめー！！ みせもんじゃねえぞ！！ オレは、いまいそがしいんだよ！！」
    CH02,OUTSIDE HONEYBEE INN,ギザギザ頭の男,SPIKY HAIR GUY,「ビンビンに感じてんだよ！！ 戦いの予感ってやつをよ！！」
    CH02,OUTSIDE HONEYBEE INN,オーナー,OWNER,「いらっしゃい！！ もてない君でも、ここ蜜蜂の館でなら 運命の彼女に出会えるはず！！」
    CH02,OUTSIDE HONEYBEE INN,オーナー,OWNER,「あなたも彼女さがしですか？」
    CH02,OUTSIDE HONEYBEE INN,INFO,INFO,＜選択肢：「ティファという子を知らないか？」or「俺はこんな場所には興味ない」→「ティファという子を知らないか？」を選択＞,"<Option: 'Do you know a girl called Tifa?' OR ""I'm not interested in this place"" -> ""Do you know a girl called Tifa?"" Choice: ""Do you know a girl called Tifa?",,,
    CH02,OUTSIDE HONEYBEE INN,オーナー,OWNER,「おっ、あなた、聞き耳はやいですねえ。ティファちゃんは ムチムチの新人さんだよ」
    CH02,OUTSIDE HONEYBEE INN,オーナー,OWNER,「でも、残念です。ティファちゃんはいま面接中」
    CH02,OUTSIDE HONEYBEE INN,オーナー,OWNER,「蜜蜂の館のならわしでね。新人の子はドン・コルネオの屋敷につれてかれるんだ」
    CH02,OUTSIDE HONEYBEE INN,オーナー,OWNER,「ドン・コルネオは有名な独身貴族。そろそろ身をかためるってんで おヨメさんさがしに熱心でねえ」
    CH02,OUTSIDE HONEYBEE INN,蜜蜂店員,HONEYBEE EMPLOYEE,「蜜蜂の館は会員制になっております。残念ですが、おひきとりください」
    CH02,CORNEO HOUSE OUTSIDE,INFO,INFO,＜コルネオの館＞,<Corneo House>.,,,
    CH02,CORNEO HOUSE OUTSIDE,案内人,CORNEO GUARD,「ああっ、よく見たら きれいな姉ちゃんも いっしょ！」
    CH02,CORNEO HOUSE OUTSIDE,案内人,CORNEO GUARD,「ね、どう？　うちのドンと楽しいひとときをすごしてみない？」
    CH02,CORNEO HOUSE OUTSIDE,エアリス,AERITH,「ね、ここがドンの屋敷みたい。わたし、行ってくるね」
    CH02,CORNEO HOUSE OUTSIDE,エアリス,AERITH,「ティファさんにあなたのこと 話してきてあげる」
    CH02,CORNEO HOUSE OUTSIDE,クラウド,CLOUD,「ダメだ！！」
    CH02,CORNEO HOUSE OUTSIDE,エアリス,AERITH,「どうして？」
    CH02,CORNEO HOUSE OUTSIDE,クラウド,CLOUD,「ここは……その…… ……わかるだろ？」
    CH02,CORNEO HOUSE OUTSIDE,エアリス,AERITH,「じゃあ、どうする？ あなたもはいる？」
    CH02,CORNEO HOUSE OUTSIDE,クラウド,CLOUD,「俺は男だからな。むりやりはいったら 騒ぎになってしまう」
    CH02,CORNEO HOUSE OUTSIDE,クラウド,CLOUD,「かといってエアリスに いかせるわけには…… いや、しかし……」
    CH02,CORNEO HOUSE OUTSIDE,クラウド,CLOUD,「まず、ティファの安全が 確認できな……」
    CH02,CORNEO HOUSE OUTSIDE,クラウド,CLOUD,「なにがおかしいんだ？ エアリス？」
    CH02,CORNEO HOUSE OUTSIDE,エアリス,AERITH,「クラウド、女の子に変装しなさい。それしかない、うん」
    CH02,CORNEO HOUSE OUTSIDE,クラウド,CLOUD,「ええっ！？」
    CH02,CORNEO HOUSE OUTSIDE,エアリス,AERITH,「ちょっと待っててね。きれいなお友だち、連れてくるから」
    CH02,CORNEO HOUSE OUTSIDE,クラウド,CLOUD,「エアリス！ いくらなんでも……」
    CH02,CORNEO HOUSE OUTSIDE,エアリス,AERITH,「ティファさんが 心配なんでしょ？ さ、早く早く！」
    CH02,CORNEO HOUSE OUTSIDE,案内人,CORNEO GUARD,「お友だちも、か…… そりゃいいな」
    CH02,CORNEO HOUSE OUTSIDE,案内人,CORNEO GUARD,「その方がドンもよろこぶし もしかしたら……ウヒヒ」
    CH02,CLOTHES SHOP,INFO,INFO,＜洋服屋＞,＜Clothes shop.,,,
    CH02,CLOTHES SHOP,エアリス,AERITH,「すいませ～ん！ ドレス１着、くださいな」
    CH02,CLOTHES SHOP,洋服屋の息子,CLOTHES SHOP GIRL,「う～ん、ちょっと時間が かかるかもしれませんが かまいませんか？」
    CH02,CLOTHES SHOP,エアリス,AERITH,「何かあったんですか？」
    CH02,CLOTHES SHOP,洋服屋の息子,CLOTHES SHOP GIRL,「ちょっと親父の奴 スランプなんですよ。あ、ドレスは俺の親父が 作ってるんですよ」
    CH02,CLOTHES SHOP,エアリス,AERITH,「その、親父さん、どちらに？」
    CH02,CLOTHES SHOP,洋服屋の息子,CLOTHES SHOP GIRL,「たぶん、居酒屋で 飲んだくれてますよ」
    CH02,CLOTHES SHOP,エアリス,AERITH,「それじゃ…… 親父さん、どうにかしないと ドレス、ダメってこと？」
    CH02,CLOTHES SHOP,洋服屋の息子,CLOTHES SHOP GIRL,「はい、そうですね。こまったもんですよ」
    CH02,CLOTHES SHOP,洋服屋の息子,CLOTHES SHOP GIRL,「！」
    CH02,CLOTHES SHOP,洋服屋の息子,CLOTHES SHOP GIRL,「もしかして、お客さん。どうにかしてくださるんですか？」
    CH02,CLOTHES SHOP,エアリス,AERITH,「だから～！　どうにかしないと ドレス、手にはいらない、でしょ？」
    CH02,CLOTHES SHOP,洋服屋の息子,CLOTHES SHOP GIRL,「本当っすか！ おねがいしますよ、あのバカ親父をどうにかしてくださいよ。もう、困り果ててたんですよ………」
    CH02,CLOTHES SHOP,エアリス,AERITH,「はいはい、どうにかします。クラウド、行きましょ！」
    CH02,IZAKAYA,INFO,INFO,＜居酒屋＞,< Izakaya.,,,
    CH02,IZAKAYA,エアリス,AERITH,「あの～、服屋の親父さん、ですよね？」
    CH02,IZAKAYA,洋服屋の親父,CLOTHES SHOP FATHER,「確かに服屋だが あなたの親父ではないぞ」
    CH02,IZAKAYA,エアリス,AERITH,「そんなこと、言ってない……」
    CH02,IZAKAYA,クラウド,CLOUD,「服を作ってくれ」
    CH02,IZAKAYA,洋服屋の親父,CLOTHES SHOP FATHER,「わしは男物の服は作らんのだが？ それに、あまり気乗りせんしな」
    CH02,IZAKAYA,エアリス,AERITH,「クラウド、すこ～し、待ってて。わたし、話すから」
    CH02,IZAKAYA,エアリス,AERITH,「向こうで、なにか飲んでていいよ」
    CH02,IZAKAYA,エアリス,AERITH,「あのね、おじさん」
    CH02,IZAKAYA,エアリス,AERITH,「あの彼がね、一度でいいから女の子の格好したいって言うの」
    CH02,IZAKAYA,エアリス,AERITH,「それでね、かわいいドレス 着せてあげたいんだけど……」
    CH02,IZAKAYA,洋服屋の親父,CLOTHES SHOP FATHER,「なんと！ あんな無愛想なやつがか？」
    CH02,IZAKAYA,エアリス,AERITH,「ね、ね、どう？ 作ってくれる？」
    CH02,IZAKAYA,洋服屋の親父,CLOTHES SHOP FATHER,「ふむ、なかなかおもしろそうだのう。普通の服ばかり作っておったので ちょっとあきとったんだよ」
    CH02,IZAKAYA,エアリス,AERITH,「じゃあ、作ってくれる？」
    CH02,IZAKAYA,洋服屋の親父,CLOTHES SHOP FATHER,「ああ、よかろう。それで、どんなドレスがいいんじゃ？」
    CH02,IZAKAYA,エアリス,AERITH,「はだ触りは」
    CH02,IZAKAYA,INFO,CLOUD,＜選択肢：「さらっとしたもの」or「さわっとしたもの」→「さわっとしたもの」を選択＞,<Options: select 'light' or 'crisp' → select 'crisp' >.,,,
    CH02,IZAKAYA,エアリス,AERITH,「ひかり具合は」
    CH02,IZAKAYA,INFO,CLOUD,＜選択肢：「きらきらしたの」or「つやつやしたの」→「つやつやしたの」を選択＞,<Options: 'sparkling' or 'glossy' → select 'glossy' >.,,,
    CH02,IZAKAYA,洋服屋の親父,CLOTHES SHOP FATHER,「ふんふん、ようわかったわい。知り合いにその手のことが趣味な奴がおるので、ちょっと聞いてくるわい」
    CH02,CLOTHES SHOP,INFO,INFO,＜洋服屋＞,＜Clothes shop.,,,
    CH02,CLOTHES SHOP,洋服屋の息子,CLOTHES SHOP GIRL,「よあ、来たな。できとるよ。さっそく着てみなさい」
    CH02,CLOTHES SHOP,INFO,CLOUD,＜クラウド、『シルクのドレス』を受け取る。→さっそく試着室へ＞,"<Cloud, receive 'silk dress'. →Go to the fitting room immediately.",,,
    CH02,CLOTHES SHOP,クラウド,CLOUD,「これ……どうやって着るんだ？」
    CH02,CLOTHES SHOP,クラウド,CLOUD,「わ！　なにするんだ！」
    CH02,CLOTHES SHOP,エアリス,AERITH,「やっぱり、ちょっと変。かつら、必要だね」
    CH02,CLOTHES SHOP,洋服屋の親父,CLOTHES SHOP FATHER,「うむうむ、そうだろうと思って 知り合いに話をしておいたんじゃ」
    CH02,CLOTHES SHOP,洋服屋の親父,CLOTHES SHOP FATHER,「『男男男』とかいう看板を出しとるジムがあるじゃろ？ そこに、あんたと同じ趣味の人間がいるんじゃ。彼に相談してみるとよいじゃろう」
    CH02,CLOTHES SHOP,クラウド,CLOUD,「……同じ趣味？ エアリス、親父さんにどんな説明をしたんだ？」
    CH02,CLOTHES SHOP,エアリス,AERITH,「いいじゃない、なんでも。ドレス、きれいだしね！」
    CH02,WM GYM,INFO,INFO,＜男男男の館＞,<House of men and boys>.,,,
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「あなたね？ かわいくなりたいのは」
    CH02,WM GYM,クラウド,CLOUD,「かわいく？」
    CH02,WM GYM,エアリス,AERITH,「そうなの」
    CH02,WM GYM,エアリス,AERITH,「それで、かつらなんだけど……」
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「ええ、聞いてるわよ。でも、タダってわけにはねぇ」
    CH02,WM GYM,マッチョ男,GYM MACHO MAN,「うぉー！！！」
    CH02,WM GYM,マッチョ男,GYM MACHO MAN,「兄貴！ かわいい格好は 兄貴を極めた者のみが できるんですぜ！！」
    CH02,WM GYM,一同,GYM MEN,「そういうことじゃー！」
    CH02,WM GYM,一同,GYM MEN,「ということで わしらと勝負じゃー！」
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「そうね。こいつらとスクワットで 勝負しましょう」
    CH02,WM GYM,マッチョ男,GYM MACHO MAN,「ようがす！ わしらが コテンパンにしてさしあげますぜ！」
    CH02,WM GYM,クラウド,CLOUD,「もしかして、あんたは」
    CH02,WM GYM,エアリス,AERITH,「きれいな、お兄さん？」
    CH02,WM GYM,マッチョ男,GYM MACHO MAN,「いまごろ なにいっとるんじゃい。兄貴は、兄貴は それはもう…」
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「あんた、いいから こっちへきなさいよ」
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「じゃあ、ルールを説明するわね」
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「かまえから□ボタンでしゃがむ しゃがみから×ボタンで立つ 立ちから○ボタンでかまえへ」
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「□ボタン、×ボタン、○ボタン と、順番に押すのよ」
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「わかった？」
    CH02,WM GYM,INFO,CLOUD,＜選択肢：「わからない」 or「わかった」→「わかった」を選択＞,<Options: 'I don't know' or 'I understand' → Select 'I understand' >.,,,
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「30秒でこなした回数が こいつよりも上だったら このかつらをあげるわ」
    CH02,WM GYM,マッチョ男,GYM MACHO MAN,「絶対に 負けないっすよ」
    CH02,WM GYM,マッチョ男,GYM MACHO MAN,「兄貴のかつらは わしらのもんじゃー！」
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「やかましいわね、こいつ」
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「ぶっつけ本番ってのも かわいそうだから、練習する？」
    CH02,WM GYM,INFO,CLOUD,＜選択肢：「軽く練習でもする」 or「練習など必要ない」→「練習など必要ない」を選択＞,＜Option: 'I will practice lightly' or 'I don't need to practice' → Select 'I don't need to practice'.,,,
    CH02,WM GYM,INFO,CLOUD,＜勝負開始＞,<Start of game>,,,
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「こいつが、16回で あなたが21回ね
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「あんた、すごいわねぇ。約束通り、これをあげるよ」
    CH02,WM GYM,INFO,CLOUD,＜クラウド、『プロンドのかつら』を受け取る＞,<Cloud receives 'Prond's wig',,,
    CH02,WM GYM,マッチョ男,GYM MACHO MAN,「兄貴っー くやしいっすよー むちゃくちゃくやしいっすよー！」
    CH02,WM GYM,INFO,GYM ELDER BROTHER,＜兄貴、マッチョ男をはり倒す＞,"＜'Brother, I'm going to crucify the macho man.",,,
    CH02,WM GYM,兄貴,GYM ELDER BROTHER,「やかましー！ 負けたあげく、めそめそするんじゃねえ！」
    CH02,WM GYM,マッチョ男,GYM MACHO MAN,「うう、兄貴の鉄ケンは 骨のズイまでしびれやすぜ…」
    CH02,WM FOOD PLACE,INFO,INFO,＜食堂＞,<Canteen.,,,
    CH02,WM FOOD PLACE,コック,CHEF,「いらっしゃい！ どうぞ、お好きなところへ」
    CH02,WM FOOD PLACE,コック,CHEF,「どうぞ、ここへおすわりください」
    CH02,WM FOOD PLACE,INFO,CLOUD,＜選択肢：「すわる」 or「すわらない」→「すわる」を選択＞,<Option: 'Sit' or 'Don't sit' → Select 'Sit' >.,,,
    CH02,WM FOOD PLACE,コック,CHEF,「はい、何にしましょう？」
    CH02,WM FOOD PLACE,クラウド,CLOUD,「そうだな………」
    CH02,WM FOOD PLACE,INFO,CLOUD,＜選択肢：「焼肉定食」 or「さしみ定食」or「今日のおすすめ」→「焼肉定食」を選択＞,<Options: 'Yakiniku set meal' or 'Sashimi set meal' or 'Today's recommendation' >> Select 'Yakiniku set meal'.,,,
    CH02,WM FOOD PLACE,コック,CHEF,「焼肉定食でーす」
    CH02,WM FOOD PLACE,厨房のコック,CHEF KITCHEN,「あいよー」
    CH02,WM FOOD PLACE,コック,CHEF,「当店は、料金前払いになっております。お代は、70ギルになります」
    CH02,WM FOOD PLACE,コック,CHEF,「ありがとうございます。少々おまちください」
    CH02,WM FOOD PLACE,INFO,CLOUD,＜料理が出来あがる＞,<The food is ready.,,,
    CH02,WM FOOD PLACE,コック,CHEF,「おまたせしました。どうぞ、ごゆっくり」
    CH02,WM FOOD PLACE,INFO,CLOUD,＜選択肢：「………………」 or「まあまあだな」→or「口にあわなかった」→「まあまあだな」を選択＞,<Options: select '..................' or 'so-so' -> or 'it wasn't palatable' -> 'so-so' >.,,,
    CH02,WM FOOD PLACE,コック,CHEF,「ありがとうございました。薬屋商品クーポンをどうぞ。薬屋で、商品ひとつ交換できます」
    CH02,WM FOOD PLACE,コック,CHEF,「クーポンがなくなりましたので、このサービスは終了させていただきます。次なるサービスにご期待ください」
    CH02,WM FOOD PLACE,INFO,CLOUD,＜クラウド、『薬屋商品クーポン』を受け取る＞,"<Cloud, receive 'apothecary product coupons'.",,,
    CH02,MEDICINE SHOP,INFO,INFO,＜薬屋＞,Medicine Shop,,,
    CH02,MEDICINE SHOP,薬屋の店員,SHOP MEDICINE,「うわっ！」
    CH02,MEDICINE SHOP,薬屋の店員,SHOP MEDICINE,「いるならいるって 言ってくださいよ」
    CH02,MEDICINE SHOP,薬屋の店員,SHOP MEDICINE,「おや、クーポンをお持ちですね。それでは、商品を１つだけ選んでください」
    CH02,MEDICINE SHOP,INFO,CLOUD,＜選択肢：「消毒薬」 or「消臭薬」or「消化薬」→「消化薬」を選択＞,<Options: 'disinfectant' or 'deodorant' or 'digestive' → select 'digestive' >.,,,
    CH02,MEDICINE SHOP,薬屋の店員,SHOP MEDICINE,「はいどうぞ」
    CH02,MEDICINE SHOP,INFO,CLOUD,＜クラウド、『消化薬』を受け取る＞,＜'Cloud receives 'digestive pills''.,,,
    CH02,IZAKAYA NEAR TOILET,INFO,INFO,＜居酒屋のトイレ前＞,<In front of the izakaya toilets>.,,,
    CH02,IZAKAYA NEAR TOILET,便秘の女,CONSTIPATED WOMAN,「う………あんたなに開けてんだよ…… 見てんじゃねえよ………………」
    CH02,IZAKAYA NEAR TOILET,便秘の女,CONSTIPATED WOMAN,「なんだよ………う………」
    CH02,IZAKAYA NEAR TOILET,INFO,CLOUD,＜選択肢：「薬をわたす」 or「薬をわたさない」→「薬をわたす」を選択＞,＜Option: 'Give medicine' or 'Don't give medicine' >> Select 'Give medicine'.,,,
    CH02,IZAKAYA NEAR TOILET,便秘の女,CONSTIPATED WOMAN,「え？ 本当にくれるのかい？ ありがたくもらうよ」
    CH02,IZAKAYA NEAR TOILET,便秘の女,CONSTIPATED WOMAN,「ふー、すっきりしたよ。お礼に、これあげるよ」
    CH02,IZAKAYA NEAR TOILET,INFO,CLOUD,＜クラウド、『セクシーコロン』を受け取る＞,<Cloud receives 'sexy cologne'.,,,
    CH02,MATERIA SHOP,INFO,INFO,＜マテリアショップ＞,<Materia Shop>.,,,
    CH02,MATERIA SHOP,マテリア店員,SHOP MATERIA,「なあ、お兄さん。お兄さんを男と見こんで 相談があるんだけど 聞いてくれないかな？」
    CH02,MATERIA SHOP,クラウド,CLOUD,「……」
    CH02,MATERIA SHOP,INFO,CLOUD,＜選択肢：「言ってみろ」 or「興味ないな」→「言ってみろ」を選択＞,<Options: 'Tell me' or 'I'm not interested' -> Select 'Tell me'.,,,
    CH02,MATERIA SHOP,マテリア店員,SHOP MATERIA,「本当か！　そりゃありがたい」
    CH02,MATERIA SHOP,マテリア店員,SHOP MATERIA,「………で、悪いんだけど そっちのおじょうさん ちょっとだけ向こうを向いててくれないかな」
    CH02,MATERIA SHOP,エアリス,AERITH,「え～、どうして～？」
    CH02,MATERIA SHOP,クラウド,CLOUD,「………エアリス」
    CH02,MATERIA SHOP,エアリス,AERITH,「もうっ！」
    CH02,MATERIA SHOP,マテリア店員,SHOP MATERIA,「すまないね、おじょうさん」
    CH02,MATERIA SHOP,マテリア店員,SHOP MATERIA,「で、本題なんだけど 宿屋の中に自動販売機があるのは知っているか？」
    CH02,MATERIA SHOP,マテリア店員,SHOP MATERIA,「俺はあの自動販売機でなにを売っているのか 気になってしょうがないんだよ。ちょっと女性には頼めない物らしいんだよ」
    CH02,MATERIA SHOP,マテリア店員,SHOP MATERIA,「え？ 自分で買いに行けって？ うーん、実は宿屋の奴とケンカしててね 行きにくいんだよね。なあ、頼むよ」
    CH02,MATERIA SHOP,クラウド,CLOUD,「……」
    CH02,MATERIA SHOP,INFO,CLOUD,＜選択肢：「引き受けよう」 or「興味ないね」→「引き受けよう」を選択＞,＜Options: 'I'll take it on' or 'I'm not interested' → 'I'll take it on'.,,,
    CH02,MATERIA SHOP,マテリア店員,SHOP MATERIA,「そうか、ありがたい。頼んだよ」
    CH02,MATERIA SHOP,エアリス,AERITH,「もういいの？」
    CH02,WALL MARKET INN,INFO,INFO,＜宿屋＞,<Inn.,,,
    CH02,WALL MARKET INN,宿屋の店員,INNKEEPER,「いらっしゃいませ。一泊、10ギルです」
    CH02,WALL MARKET INN,INFO,CLOUD,＜選択肢：「泊まる」 or「泊まらない」→「泊まる」を選択＞,<Options: 'stay' or 'don't stay' → Select 'stay' >.,,,
    CH02,WALL MARKET INN,INFO,CLOUD,＜クラウド、こっそり夜中に＞,"<Cloud, sneaking out in the middle of the night>.",,,
    CH02,WALL MARKET INN,クラウド,CLOUD,「これのことか」
    CH02,WALL MARKET INN,INFO,CLOUD,＜選択肢：「買わない」 or「200ギルの物」or「100ギルの物」or「50ギルの物」→「200ギルの物」を選択＞,<Options: 'I won't buy it' OR '200-gil item' OR '100-gil item' OR '50-gil item' -> Select '200-gil item' >.,,,
    CH02,WALL MARKET INN,宿屋の店員,INNKEEPER,「ありがとうございました。またいらしてください」
    CH02,MATERIA SHOP,INFO,INFO,＜マテリアショップ＞
    CH02,MATERIA SHOP,クラウド,CLOUD,「持ってきたぞ」
    CH02,MATERIA SHOP,マテリア店員,SHOP MATERIA,「おお、本当か！！ あっ！」
    CH02,MATERIA SHOP,エアリス,AERITH,「もう」
    CH02,MATERIA SHOP,マテリア店員,SHOP MATERIA,「で、なんだった」
    CH02,MATERIA SHOP,マテリア店員,SHOP MATERIA,「気合充墳ドリンクゴールドセットか あいつめ、きっちり商売してやがるぜ。まけてられんな、こりゃ」
    CH02,MATERIA SHOP,マテリア店員,SHOP MATERIA,「お兄さん、ありがとうよ。やる気になってきたぜ。気持ちていどだけどよ、もらってくれよ」
    CH02,MATERIA SHOP,INFO,CLOUD,＜クラウド、『ダイヤのティアラ』を受け取る＞,＜'Cloud receives the 'diamond tiara''.,,,
    CH02,WALL MARKET,優柔不断な男,INDECISIVE MAN,「やっぱり、ふんぎりがつかねえや。ええい、これあげるよ。これがなきゃ、入れないからな」
    CH02,WALL MARKET,INFO,CLOUD,＜クラウド、『蜜蜂の館会員カード』を受け取る＞,"<Cloud, receive a 'bee house membership card'.",,,
    CH02,OUTSIDE HONEYBEE INN,INFO,INFO,＜蜜蜂の館前＞,<Before the bee house>.,,,
    CH02,OUTSIDE HONEYBEE INN,蜜蜂店員,HONEYBEE EMPLOYEE,「おっ！右手にかがやく『会員カード』 どうぞ、お通りください」
    CH02,OUTSIDE HONEYBEE INN,クラウド,CLOUD,「ここに女装に必要ななにかがある。俺にはわかるんだ」
    CH02,OUTSIDE HONEYBEE INN,エアリス,AERITH,「……………ふ～～～～ん。そうやって、ごまかしますか」
    CH02,OUTSIDE HONEYBEE INN,クラウド,CLOUD,「いくぜ！！」
    CH02,INSIDE HONEYBEE INN,INFO,CLOUD,＜クラウド、蜜蜂の館の中に入る＞,"<Cloud, entering the House of the Bees>.",,,
    CH02,INSIDE HONEYBEE INN,受付嬢,HONEYBEE GIRL,「ポッ……★ お客さん★」
    CH02,INSIDE HONEYBEE INN,受付嬢,HONEYBEE GIRL,「はやくっはやくっ★」
    CH02,INSIDE HONEYBEE INN,受付嬢,HONEYBEE GIRL,「お部屋を選んでね★ （変なお客……。ま、いつものこと★）」
    CH02,INSIDE HONEYBEE INN,INFO,CLOUD,＜クラウド、女の子の控え室へ行く＞,"＜Cloud, go to the girls' waiting room.",,,
    CH02,INSIDE HONEYBEE INN,女性Ａ,HONEYBEE SIL A,「フンフンフン……★ なかなかほそくなんないのよね。フンフンフンフン……」
    CH02,INSIDE HONEYBEE INN,女性Ａ,HONEYBEE SIL A,「あら、いやだ！！ お客さん、こんなとこまで 入ってこないでね★」
    CH02,INSIDE HONEYBEE INN,女性Ａ,HONEYBEE SIL A,「（いやだわ…… エッチなお客さん…）」
    CH02,INSIDE HONEYBEE INN,女性Ｂ,HONEYBEE SIL B,「キャッ★」
    CH02,INSIDE HONEYBEE INN,女性Ｂ,HONEYBEE SIL B,「だめーっ！」
    CH02,INSIDE HONEYBEE INN,女性Ｃ,HONEYBEE SIL C,「ぬりぬりぬりぬり……」
    CH02,INSIDE HONEYBEE INN,女性Ｃ,HONEYBEE SIL C,「（やだ……ときどきいるのよね。こういうデリカシーのない男…。無視無視）」
    CH02,INSIDE HONEYBEE INN,INFO,CLOUD,＜クラウド、ようやく部屋を選ぶ＞,"<Cloud, finally pick a room>.",,,
    CH02,INSIDE HONEYBEE INN,クラウド,CLOUD,「空いているようだな」
    CH02,INSIDE HONEYBEE INN,INFO,CLOUD,＜選択肢：「この部屋にするか」or「ふみとどまる」→「この部屋にするか」を選択＞,<Option: 'Do you want this room?' or 'Fumi-shutdown' -> Select 'Do you want this room?,,,
    CH02,INSIDE HONEYBEE INN,クラウド,CLOUD,「この部屋に決めたよ」
    CH02,INSIDE HONEYBEE INN,受付嬢,HONEYBEE GIRL,「は～い★ 決めたら、後はお部屋に入るだけよ★」
    CH02,INSIDE HONEYBEE INN,受付嬢,HONEYBEE GIRL,「もう気持ちは変わらない？」
    CH02,INSIDE HONEYBEE INN,INFO,CLOUD,＜選択肢：「何度も言わせないでくれ」or「まだ決めかねているんだ」→「何度も言わせないでくれ」を選択＞,<Options: 'Don't make me keep repeating it' or 'I'm still trying to decide' -> Select 'Don't make me keep repeating it' >.,,,
    CH02,INSIDE HONEYBEE INN,受付嬢,HONEYBEE GIRL,「怒っちゃや～★ （いやだ…… きっと乱暴なお客ね…）」
    CH02,INSIDE HONEYBEE INN,受付嬢,HONEYBEE GIRL,「は～い★ どうぞ★」
    CH02,INSIDE HONEYBEE MEN ROOM,INFO,CLOUD,＜クラウド、部屋に入るが、異様な雰囲気に包まれる＞,"＜'Cloud, I enter the room, but I'm surrounded by a strange atmosphere.",,,
    CH02,INSIDE HONEYBEE MEN ROOM,INFO,CLOUD'S EGO,＜頭をかかえて苦しんでいるもう一人のクラウド＞,<Another cloud suffering from a headache>.,,,
    CH02,INSIDE HONEYBEE MEN ROOM,クラウド,CLOUD,「ん……？ あんたなのか……？」
    CH02,INSIDE HONEYBEE MEN ROOM,クラウド,CLOUD,「こんなところでなにしてる？」
    CH02,INSIDE HONEYBEE MEN ROOM,謎の声,MYSTERY VOICE,『そっちこそ、こんなとこで 遊んでていいのかい？』
    CH02,INSIDE HONEYBEE MEN ROOM,謎の声,MYSTERY VOICE,『いつでも頭かかえてれば 問題が解決するとでも思ってる？』
    CH02,DARKNESS,INFO,CLOUD'S EGO,＜もう一人のクラウド、クラウドと接触。→クラウド、倒れる＞,"<The other Cloud, in contact with Cloud. <Cloud falls.",,,
    CH02,DARKNESS,女性Ｄ,HONEYBEE SIL D,「やだ！★ お客さ～ん★」
    CH02,DARKNESS,女性Ｄ,HONEYBEE SIL D,「たいへ～ん！ だれか～だれか、きて～★」
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『遠くからながめてるだけじゃ なにも変わらないって気づいたんだろ』
    CH02,DARKNESS,クラウド,CLOUD'S EGO,「なにいっている？」
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『動きはじめたみたいだよ』
    CH02,DARKNESS,クラウド,CLOUD'S EGO,「なにが？」
    CH02,DARKNESS,謎の声,MYSTERY VOICE,『ほら、目を覚まして！』
    CH02,INSIDE HONEYBEE MEN ROOM,ムッキー,MUKKI,「モミモミモミ… モミモミモミモミ……」
    CH02,INSIDE HONEYBEE MEN ROOM,ムッキー,MUKKI,「タントントン…… タントントントン……」
    CH02,INSIDE HONEYBEE MEN ROOM,ムッキー,MUKKI,「ツンツン…… ……チクッン★」
    CH02,INSIDE HONEYBEE MEN ROOM,クラウド,CLOUD,「うっ…… いてっ！！」
    CH02,INSIDE HONEYBEE MEN ROOM,ムッキー,MUKKI,「目を覚まして！！」
    CH02,INSIDE HONEYBEE MEN ROOM,ムッキー,MUKKI,「目を覚まして！！」
    CH02,INSIDE HONEYBEE MEN ROOM,INFO,CLOUD,＜クラウド、目を覚ます＞,"<Cloud, wake up>.",,,
    CH02,INSIDE HONEYBEE MEN ROOM,ムッキー,MUKKI,「ふぅ～★ よかったぁ★」
    CH02,INSIDE HONEYBEE MEN ROOM,ムッキー,MUKKI,「ぼうずっ！！ 倒れちゃったんだって？」
    CH02,INSIDE HONEYBEE MEN ROOM,ムッキー,MUKKI,「だめだ、だめだ」
    CH02,INSIDE HONEYBEE MEN ROOM,ムッキー,MUKKI,「緊張しちゃいかんなあ」
    CH02,INSIDE HONEYBEE MEN ROOM,INFO,CLOUD,＜選択肢：「ああ……？」or「うう……？」→「ああ……？」を選択＞,"<Options: ""ah ......?"" OR ""uu......?"" → ""ah ......?"" Select >.",,,
    CH02,INSIDE HONEYBEE MEN ROOM,ムッキー,MUKKI,「んっ……？ まっ、青春は長くてみじかし」
    CH02,INSIDE HONEYBEE MEN ROOM,ムッキー,MUKKI,「次、がんばんなさい」
    CH02,INSIDE HONEYBEE MEN ROOM,ムッキー,MUKKI,「もう時間だっ★ じゃね★」
    CH02,INSIDE HONEYBEE MEN ROOM,女性,HONEYBEE GIRL,「ごめんなさいね……★ いろいろと大人の事情ってもんがあるのよ★」
    CH02,INSIDE HONEYBEE MEN ROOM,女性,HONEYBEE GIRL,「これ、おわびのしるし★ 大切にあつかってね」
    CH02,INSIDE HONEYBEE MEN ROOM,INFO,CLOUD,＜クラウド、『ランジェリー』を受け取る＞,<Cloud receives 'Lingerie'.,,,
    CH02,INSIDE HONEYBEE MEN ROOM,クラウド,CLOUD,「こんなヌノキレを、俺が！？ まったく、どうかしてるな」
    CH02,OUTSIDE HONEYBEE INN,INFO,CLOUD,＜クラウド、蜜蜂の館を出る＞,"＜'Cloud, leaving the House of the Bees'.",,,
    CH02,OUTSIDE HONEYBEE INN,オーナー,OWNER,「あっ、お客さん！！ もうすぐ閉店なんで……」
    CH02,OUTSIDE HONEYBEE INN,オーナー,OWNER,「忘れ物などなさらぬよう 気をつけてくださいよ」
    CH02,OUTSIDE HONEYBEE INN,エアリス,AERITH,「キャッ！！ クラウド！！」
    CH02,CLOTHES SHOP,INFO,INFO,＜洋服屋＞,＜Clothes shop.,,,
    CH02,CLOTHES SHOP,エアリス,AERITH,「着替えるの？」
    CH02,CLOTHES SHOP,INFO,CLOUD,＜選択肢：「かくごを決めた」or「今は着替えない」→「かくごを決めた」を選択＞,<Option: 'I have decided on a cover' or 'I will not change my clothes now' → Select 'I have decided on a cover' >.,,,
    CH02,CLOTHES SHOP,INFO,CLOUD DRESS,＜クラウド、着替える＞,"<Cloud, change clothes>",,,
    CH02,CLOTHES SHOP,洋服屋の親父,CLOTHES SHOP FATHER,「ほう、これはなかなかどうして。新しい商売になるかもしれんぞ」
    CH02,CLOTHES SHOP,洋服屋の息子,CLOTHES SHOP GIRL,「そうだね。やってみようか」
    CH02,CLOTHES SHOP,洋服屋の息子,CLOTHES SHOP GIRL,「あんたたち。おもしろいものを見せてもらったよ。親父もやる気出してくれたし そのドレスの代金はサービスしとくよ」
    CH02,CLOTHES SHOP,エアリス,AERITH,「おしとやかに歩いてね。クラウドちゃん」
    CH02,CLOTHES SHOP,クラウド,CLOUD DRESS,「……何がおしとやかだ」
    CH02,CLOTHES SHOP,エアリス,AERITH,「クラウドちゃん、かわいい」
    CH02,CLOTHES SHOP,エアリス,AERITH,「でも、いいな、それ。ね、わたしに似合うドレス、な～い？」
    CH02,CLOTHES SHOP,洋服屋の息子,CLOTHES SHOP GIRL,「これは、どうでしょう？」
    CH02,CLOTHES SHOP,洋服屋の親父,CLOTHES SHOP FATHER,「いやいや、こっちの方がいいぞ」
    CH02,CLOTHES SHOP,洋服屋の息子,CLOTHES SHOP GIRL,「親父、何言ってんだよ。これがいいって」
    CH02,CLOTHES SHOP,洋服屋の親父,CLOTHES SHOP FATHER,「なにいっとる。こっちじゃよ」
    CH02,CLOTHES SHOP,エアリス,AERITH,「あ、わたし、これがいい」
    CH02,CLOTHES SHOP,洋服屋の息子＆洋服屋の親父,CLOTHES SHOP FATHER GIRL,「え？」
    CH02,CLOTHES SHOP,エアリス,AERITH,「ちょっと、着替えてくるね」
    CH02,CLOTHES SHOP,エアリス,AERITH,「……のぞいちゃダメよ」
    CH02,CLOTHES SHOP,INFO,AERITH DRESS,＜エアリス、着替える＞,"＜Aeris, get dressed.",,,
    CH02,CLOTHES SHOP,エアリス,AERITH DRESS,「どう？　似合ってる？」
    CH02,CLOTHES SHOP,エアリス,AERITH DRESS,「もう、かわいくないなぁ！」
    CH02,CORNEO HOUSE OUTSIDE,INFO,INFO,＜コルネオの館＞,<Corneo House>.,,,
    CH02,CORNEO HOUSE OUTSIDE,案内人,CORNEO GUARD,「おおッ！！ お友だちもこれまたカワイコちゃん！」
    CH02,CORNEO HOUSE OUTSIDE,案内人,CORNEO GUARD,「ささ、中へ中へ！！」
    CH02,CORNEO HOUSE OUTSIDE,案内人,CORNEO GUARD,「２名様、おはいり～！！」
    CH02,CORNEO HOUSE INSIDE,INFO,CLOUD DRESS,＜クラウドたち、コルネオの館に入る＞,＜Cloud and his team enter the halls of Corneo.,,,
    CH02,CORNEO HOUSE INSIDE,受付,RECEPTIONIST,「お～い、おネエちゃんたち」
    CH02,CORNEO HOUSE INSIDE,受付,RECEPTIONIST,「いまドンにしらせてくるからさ。ここで待っててくんな。ウロウロしないでくれよ」
    CH02,CORNEO HOUSE INSIDE,エアリス,AERITH DRESS,「いまのうち。さがしましょ、ティファさん」
    CH02,CORNEO DUNGEON,INFO,INFO,＜おしおき部屋＞,<Punishment room>.,,,
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「……ティファ、さん」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「はじめまして。わたし、エアリス」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「あなたのこと クラウドから 聞いてるわ」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「……あなたは？」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「あっ、公園にいた人？ クラウドといっしょに……」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「そ、クラウドといっしょに」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「そう……」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「安心して。少し前に知り合ったばかりよ。なんでもないの」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「安心って……何を安心するの？」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「ああ、かんちがいしないで」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「私とクラウドは たんなる幼なじみよ。なんでもないの」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「ふたりして『なんでもない！』 な～んて言ってると クラウド、ちょっとかわいそう」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「ね、クラウド？」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「クラウド？」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「？？？？」
    CH02,CORNEO DUNGEON,INFO,TIFA DRESS,＜ティファ、飛び跳ねる＞,"＜Tiffany, jump up and down.",,,
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「クラウド！？」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「その格好はどうしたの！？ ここでなにしてるの！？」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「あ、それより あれからどうしたの！？ 身体はだいじょうぶ！？」
    CH02,CORNEO DUNGEON,クラウド,CLOUD DRESS,「そんなにいっぺんに質問するな」
    CH02,CORNEO DUNGEON,クラウド,CLOUD DRESS,「この格好は…… ここに入るためには仕方なかった」
    CH02,CORNEO DUNGEON,クラウド,CLOUD DRESS,「身体はだいじょうぶだ。エアリスに助けてもらった」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「そうなの、エアリスさんが……」
    CH02,CORNEO DUNGEON,クラウド,CLOUD DRESS,「ティファ、説明してくれ。こんなところで何をしているんだ」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「え、ええ……」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「オホン！ わたし、耳、ふさいでるね」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「……とにかく、無事でよかったわ」
    CH02,CORNEO DUNGEON,クラウド,CLOUD DRESS,「ああ。で、何があったんだ？」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「五番魔胱炉からもどったら 妖しい男がうろついていたのよ」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「その男をバレットがつかまえて キューッとしめて話を聞き出したの」
    CH02,CORNEO DUNGEON,クラウド,CLOUD DRESS,「このドンの名前が出てきたわけか」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「そう、ドン・コルネオ」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「バレットはコルネオなんて 小悪党だから放っておけって 言うんだけど……」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「なんだか気になって仕方がないのよ」
    CH02,CORNEO DUNGEON,クラウド,CLOUD DRESS,「わかったよ。コルネオ自身から 話を聞こうってわけだな」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「それで、なんとかここまで来たけど ちょっと困ってるの」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「コルネオは自分のおヨメさんを さがしてるらしいの」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「毎日３人の女の子の中から １人を選んで……あの……その」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「とにかく！ その１人に私が選ばれなければ ……今夜はアウトなのよ」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「あの……聞こえちゃったんだけど」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「３人の女の子が 全員あなたの仲間だったら 問題ナシ、じゃないかな？」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「それはそうだけど……」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「ここに２人いるわよ」
    CH02,CORNEO DUNGEON,クラウド,CLOUD DRESS,「ダメだ、エアリス！ あんたを巻きこむわけにはいかない」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「あら？　ティファさんなら 危険な目にあってもいいの？」
    CH02,CORNEO DUNGEON,クラウド,CLOUD DRESS,「いや、ティファは……」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「いいの？」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「わたし、スラム育ちだから 危険なこと、なれてるの」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「あなたこそ、わたし 信じてくれる？」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「ありがとう、エアリスさん」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「エアリス、でいいわよ」
    CH02,CORNEO DUNGEON,受付,RECEPTIONIST,「お～い！！」
    CH02,CORNEO DUNGEON,受付,RECEPTIONIST,「お姉ちゃんたち、時間だよ。コルネオ様のおまちかねだ！」
    CH02,CORNEO DUNGEON,受付,RECEPTIONIST,「ウロウロするなって言ったのに…… これだから、ちかごろのおネエちゃんたちは……」
    CH02,CORNEO DUNGEON,受付,RECEPTIONIST,「はやくしてくれよ！」
    CH02,CORNEO DUNGEON,クラウド,CLOUD DRESS,「聞くまでもないと思うけど あとの１人はやっぱり……」
    CH02,CORNEO DUNGEON,クラウド,CLOUD DRESS,「俺……なんだろうな？」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「聞くまでも」
    CH02,CORNEO DUNGEON,エアリス,AERITH DRESS,「ないわね」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「フフフ……その格好 よく見るとナカナカじゃない」
    CH02,CORNEO DUNGEON,ティファ,TIFA DRESS,「バレットが見たら なんて言うかな……」
    CH02,CORNEO ROOM,コッチ,DON CORNEO KOTCH,「よ～し娘ども！」
    CH02,CORNEO ROOM,コッチ,DON CORNEO KOTCH,「ドン・コルネオの前に整列するのだぁ！」
    CH02,CORNEO ROOM,コルネオ,DON CORNEO,「ほひ～！ いいの～、いいの～！」
    CH02,CORNEO ROOM,コルネオ,DON CORNEO,「どのおなごにしようかな？ ほひ～ほひ～！」
    CH02,CORNEO ROOM,コルネオ,DON CORNEO,「このコにしようかな～？」
    CH02,CORNEO ROOM,コルネオ,DON CORNEO,「それともこのコかな～？」
    CH02,CORNEO ROOM,コルネオ,DON CORNEO,「ほひ～！！ 決めた決～めた！」
    CH02,CORNEO ROOM,コルネオ,DON CORNEO,「今夜の相手は……」
    CH02,CORNEO ROOM,コルネオ,DON CORNEO,「この骨太のおなごだ！」
    CH02,CORNEO ROOM,クラウド,CLOUD DRESS,「ちょ、ちょ、ちょっと待て！ いや、待ってください！」
    CH02,CORNEO ROOM,コルネオ,DON CORNEO,「ほひ～！」
    CH02,CORNEO ROOM,コルネオ,DON CORNEO,「そのこばむしぐさが ういの～、うぶいの～」
    CH02,CORNEO ROOM,コルネオ,DON CORNEO,「後はオマエたちにやる！」
    CH02,CORNEO ROOM,コッチ&コルネオの部下,DON CORNEO LACKEY,「ヘイ！！ いただきやっす！」
    CH02,CORNEO ROOM,コルネオ,DON CORNEO,「さ～て、行こうかの～！」
    CH02,DON'S BEDROOM,INFO,INFO,＜寝室＞,<Bedroom.,,,
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ほひ～、やっと２人きり……」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「さあコネコちゃん…… 俺のムネへカモ～ン！」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ほひ～！」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「テレなくても だいじょうぶ。２人きりだよ……」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ほひ～、何度見てもカワイイの～」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「お……お前も、俺のこと好きか？」
    CH02,DON'S BEDROOM,INFO,CLOUD DRESS,＜選択肢：「もちろんですわ」or「え～と……」→「もちろんですわ」を選択＞,<Options: 'Of course I do' or 'Um... ......' -> Select 'Of course I do' >.,,,
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ほひ、うれしいこと言ってくれるのォ！」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ほんなら、ナ、ナニがしたい？」
    CH02,DON'S BEDROOM,INFO,CLOUD DRESS,＜選択肢：「あなたのス・キ・な・コ・ト」or「べつに……」→「べつに……」を選択＞,<Choices: 'Your wonderful co...' or 'separately ......' → Select 'separately ......' >.,,,
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ほひ、俺がキライなの？」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「まさか、ほ、他にスキな男でも？」
    CH02,DON'S BEDROOM,INFO,CLOUD DRESS,＜選択肢：「あなただけよ」or「バレットっていうの……」→「あなただけよ」を選択＞,＜Choice: 'It's only you' or 'My name is Barrett. ......' >> Select 'It's only you'.,,,
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ほひ、うれしいこと言ってくれるのォ！」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ほんなら、ナ、ナニがしたい？」
    CH02,DON'S BEDROOM,INFO,CLOUD DRESS,＜選択肢：「あなたのス・キ・な・コ・ト」or「べつに……」→「あなたのス・キ・な・コ・ト」を選択＞,＜Options: 'Your favourite thing' or 'separately ......' → Select 'Your favourite thing'.,,,
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ほひほひ～！！　た、たまらん！ じゃあ、おねがい……」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「チューして、チュー！！」
    CH02,DON'S BEDROOM,INFO,CLOUD DRESS,＜選択肢：「ええ……」or「それはダメ……」→「それはダメ……」を選択＞,<Choices: 'Yes ......' or 'That's no good ......' -> Select 'That's no good ......' >.,,,
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「なんで？ なんでなんで？」
    CH02,DON'S BEDROOM,クラウド,CLOUD DRESS,「だって……」
    CH02,DON'S BEDROOM,クラウド,CLOUD DRESS,「あんたのその口は情報をもらすのに 使ってもらうからさ！！」
    CH02,DON'S BEDROOM,INFO,CLOUD DRESS,＜クラウド、服装や髪型などを元に戻す＞,"<Cloud, undoing clothes, hair, etc.>.",,,
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「お、オトコ！？ ほひ～、だましな！！」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「だれか！　だれか！！」
    CH02,DON'S BEDROOM,ティファ,TIFA,「おあいにくさま。あなたの子分はだれもこられないみたいよ」
    CH02,DON'S BEDROOM,INFO,AERITH DRESS,＜ティファ、エアリスが来る＞,＜Tifa and Aerith are coming.,,,
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「お前たちさっきの！？ な、なにがどーなってるの？」
    CH02,DON'S BEDROOM,ティファ,TIFA,「悪いけど 質問するのは私たちのほうよ」
    CH02,DON'S BEDROOM,ティファ,TIFA,「手下に何をさぐらせてたの？ 言いなさい！　言わないと……」
    CH02,DON'S BEDROOM,クラウド,CLOUD,「……切り落とすぞ」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「や、やめてくれ！ ちゃんと話す！　なんでも話す！」
    CH02,DON'S BEDROOM,ティファ,TIFA,「さ、どうぞ」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「……片腕が銃の男のねぐらを 探させたんだ。そういう依頼があったんだ」
    CH02,DON'S BEDROOM,ティファ,TIFA,「誰から？」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ほひ～！ しゃべったら殺される！」
    CH02,DON'S BEDROOM,ティファ,TIFA,「言いなさい！　言わないと……」
    CH02,DON'S BEDROOM,エアリス,AERITH,「……ねじり切っちゃうわよ」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ほひ～！ 神羅のハイデッカーだ！」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「治安維持部門総括ハイデッカーだ！」
    CH02,DON'S BEDROOM,クラウド,CLOUD,「治安維持部門総括！？」
    CH02,DON'S BEDROOM,ティファ,TIFA,「神羅ですって！！ 神羅の目的は！？　言いなさい！」
    CH02,DON'S BEDROOM,ティファ,TIFA,「言わないと……」
    CH02,DON'S BEDROOM,ティファ,TIFA,「……すりつぶすわよ」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ほひ……ねえちゃん……本気だな。……えらいえらい」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「……俺もふざけてる場合じゃねえな」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「神羅はアバランチとかいうちっこいウラ組織をつぶすつもりだ。アジトもろともな」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「文字どおり、つぶしちまうんだ。プレートを支える柱を壊してよ」
    CH02,DON'S BEDROOM,ティファ,TIFA,「柱を壊す！？」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「どうなるかわかるだろ？ プレートがヒューッ、ドガガガ！！だ」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「アバランチのアジトは ７番街スラムだってな」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「この６番街スラムじゃなくて 俺はホッとしてるぜ」
    CH02,DON'S BEDROOM,ティファ,TIFA,「７番街スラムがなくなる！？」
    CH02,DON'S BEDROOM,ティファ,TIFA,「クラウド、７番街へ いっしょに行ってくれる？」
    CH02,DON'S BEDROOM,クラウド,CLOUD,「もちろんだ。ティファ」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ちょっと待った！」
    CH02,DON'S BEDROOM,クラウド,CLOUD,「だまれ！」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「すぐ終わるから聞いてくれ」
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「俺たちみたいな悪党が、こうやってべらべらとホントのことを しゃべるのはどんなときだと思う？」
    CH02,DON'S BEDROOM,INFO,CLOUD DRESS,＜選択肢：「１ 死をかくごしたとき」or「２ 勝利を確信しているとき」or「３ なにがなんだかわからないとき」→「３ なにがなんだかわからないとき」を選択＞,"＜Choice: ""1 When you have staved off death"" or ""2 When you are sure of victory"" or ""3 When you don't know what is going on"" → Select ""3 When you don't know what is going on"" >.",,,
    CH02,DON'S BEDROOM,コルネオ,DON CORNEO,「ほひ～！　おっし～！」
    CH02,DON'S BEDROOM,INFO,DON CORNEO,＜コルネオ、近くのボタンを押す。→クラウドたちの床に穴が空き、落っこちる＞,"<Corneo, press a nearby button. <There is a hole in the floor of the cloud and the others, and they fall through.",,,
    CH02,PRESIDENT'S OFFICE,INFO,INFO,＜神羅ビル70階社長室＞,"<President's office, 70th floor, Shinra Building>.",,,
    CH02,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「準備のほうは？」
    CH02,PRESIDENT'S OFFICE,ハイデッカー,HEIDEGGER,「ガハハ！！　順調順調！ 実行部隊はタークスです」
    CH02,PRESIDENT'S OFFICE,リーブ,REEVES,「プレジデント！ 本当にやるのですか？ たかが数人の組織をつぶすのに……」
    CH02,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「いまさらナニかね、リーブ君」
    CH02,PRESIDENT'S OFFICE,リーブ,REEVES,「……いいえ」
    CH02,PRESIDENT'S OFFICE,リーブ,REEVES,「しかし私は都市開発責任者としてミッドガルの建造、運営のすべてにかかわってきました。ですから……」
    CH02,PRESIDENT'S OFFICE,ハイデッカー,HEIDEGGER,「リーブ、そういう個人的な問題は 朝のうちにトイレで流しちまうんだな！」
    CH02,PRESIDENT'S OFFICE,リーブ,REEVES,「市長も反対しているわけであり……」
    CH02,PRESIDENT'S OFFICE,ハイデッカー,HEIDEGGER,「市長！？」
    CH02,PRESIDENT'S OFFICE,ハイデッカー,HEIDEGGER,「このビルの中でボソボソとメシをくってるあいつか！？ あいつを、まだ市長と呼ぶのか？」
    CH02,PRESIDENT'S OFFICE,ハイデッカー,HEIDEGGER,「それでは失礼します！」
    CH02,PRESIDENT'S OFFICE,INFO,HEIDEGGER,＜ハイデッカー、去る＞,"<Heidecker, leaving>.",,,
    CH02,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「君はつかれているんだよ。休暇をとって旅行でも行ってなさい」
    CH02,PRESIDENT'S OFFICE,INFO,REEVES,＜リーブ、しぶしぶ去る＞,<Leave reluctantly leaves>.,,,
    CH02,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「７番街を破壊する。アバランチの仕業として報道する。神羅カンパニーによる救助活動。フフフ……かんぺきだ」
    CH02,UNDERGROUND SEWER,INFO,INFO,＜地下下水道＞,<Underground sewers>.,,,
    CH02,UNDERGROUND SEWER,クラウド,CLOUD,「だいじょうぶか？」
    CH02,UNDERGROUND SEWER,エアリス,AERITH,「うん」
    CH02,UNDERGROUND SEWER,クラウド,CLOUD,「だいじょうぶか？」
    CH02,UNDERGROUND SEWER,ティファ,TIFA,「もう！ サイテーね、これ」
    CH02,UNDERGROUND SEWER,エアリス,AERITH,「ま、最悪の事態からは のがれられた……」
    CH02,UNDERGROUND SEWER,INFO,INFO,＜モンスターのおたけびが聞こえる＞,＜I can hear the monster's roar.,,,
    CH02,UNDERGROUND SEWER,エアリス,AERITH,「……でもないみたい｣
    CH02,UNDERGROUND SEWER,INFO,INFO,＜戦闘：アプス＞ /n ＜アプスを撃破＞ /n ＜戦闘終了＞,<Combat: Apus>.,,,
    CH02,UNDERGROUND SEWER,ティファ,TIFA,「もうダメだわ…… マリン……バレット……スラムの人たち」
    CH02,UNDERGROUND SEWER,エアリス,AERITH,「あきらめない、あきらめない。柱、壊すなんて そんなに簡単じゃない、でしょ？」
    CH02,UNDERGROUND SEWER,ティファ,TIFA,「…………そうね……そうよね！ まだ時間はあるわよね」
    CH02,TRAIN GRAVEYARD,INFO,INFO,＜列車墓場＞,<Train graveyard> c,,,
    CH02,TRAIN GRAVEYARD,クラウド,CLOUD,「エアリス。すっかり巻きこんでしまって……」
    CH02,TRAIN GRAVEYARD,エアリス,AERITH,「ここから帰れ！ な～んて言わないでね」
    CH02,TRAIN GRAVEYARD,ティファ,TIFA,「え～と……明かりのついている車両を抜けて行けば出られそうね」
    CH02,SECTOR 7 SLUM PILLAR,INFO,CLOUD,＜列車墓場を抜け、７番街スラムの柱に到着＞,"<Passing through the train graveyard, arriving at the 7th Avenue slum pillar>.",,,
    CH02,SECTOR 7 SLUM PILLAR,ティファ,TIFA,「まにあった！ 柱が立ってる！」
    CH02,SECTOR 7 SLUM PILLAR,クラウド,CLOUD,「まて！ 上から……聞こえないか？」
    CH02,SECTOR 7 SLUM PILLAR,エアリス,AERITH,「……銃声？」
    CH02,SECTOR 7 SLUM PILLAR,INFO,WEDGE,＜上からウェッジが落ちてくる＞,＜Wedges fall from above.,,,
    CH02,SECTOR 7 SLUM PILLAR,クラウド,CLOUD,「だいじょうぶか？ ……ウェッジ！！」
    CH02,SECTOR 7 SLUM PILLAR,ウェッジ,WEDGE,「……クラウドさん…。俺の名前…覚えてくれたっすね」
    CH02,SECTOR 7 SLUM PILLAR,ウェッジ,WEDGE,「バレットさんが…上で戦ってるっす。手をかしてやって……」
    CH02,SECTOR 7 SLUM PILLAR,ウェッジ,WEDGE,「クラウドさん…… めいわくかけて、すいません…っす」
    CH02,SECTOR 7 SLUM PILLAR,クラウド,CLOUD,「のぼるぞ！」
    CH02,SECTOR 7 SLUM PILLAR,クラウド,CLOUD,「エアリス！ ウェッジをたのむ」
    CH02,SECTOR 7 SLUM PILLAR,ティファ,TIFA,「エアリス、おねがい」
    CH02,SECTOR 7 SLUM PILLAR,ティファ,TIFA,「この近くに私たちの店『セブンスヘブン』があるの」
    CH02,SECTOR 7 SLUM PILLAR,ティファ,TIFA,「そこにマリンっていう名前の小さな女の子がいるから……」
    CH02,SECTOR 7 SLUM PILLAR,エアリス,AERITH,「わかった。安全な場所へ、ね」
    CH02,SECTOR 7 SLUM PILLAR,ティファ,TIFA,「ここは危険です！ みんな早く柱からはなれて！」
    CH02,SECTOR 7 SLUM PILLAR,ティファ,TIFA,「７番街からはなれて！」
    CH02,SECTOR 7 STAIRCASE,INFO,INFO,＜プレート支柱 ：螺旋階段＞,<Plate prop: spiral staircase>.,,,
    CH02,SECTOR 7 STAIRCASE,ジェシー,JESSIE,「あ……クラウド…… 最後に……話せて良かった……」
    CH02,SECTOR 7 STAIRCASE,INFO,CLOUD,＜選択肢：「最後だなんて……」or「そうか……」→「最後だなんて……」を選択＞,<Options: 'I can't believe it's the last ......' or 'I see ......' -> Select 'I can't believe it's the last ......' >.,,,
    CH02,SECTOR 7 STAIRCASE,ジェシー,JESSIE,「もう、いい……いいの……」
    CH02,SECTOR 7 STAIRCASE,ジェシー,JESSIE,「私たち……私たちの作戦で たくさん……人、死んじゃったし…… きっと……そのむくい……ね」
    CH02,SECTOR 7 STAIRCASE,バレット,BARRET,「ティファ！　クラウド！ 来てくれたか！」
    CH02,SECTOR 7 STAIRCASE,バレット,BARRET,「気をつけろ！　やつら ヘリで襲ってきやがる」
    CH02,SECTOR 7 STAIRCASE,ティファ,TIFA,「本格的にくる敵に 装備を整えておいたほうがいいわ！」
    CH02,SECTOR 7 STAIRCASE,ティファ,TIFA,「さっそく来たわ！」
    CH02,SECTOR 7 STAIRCASE,INFO,TIFA,＜ヘリコプターからレノ登場。→柱のメインコンピュータスイッチの前へ＞,<Leno appears from helicopter. <To the main computer switch on the pillar>.,,,
    CH02,SECTOR 7 STAIRCASE,レノ,RENO,「おそかった、と このスイッチを押すと……」
    CH02,SECTOR 7 STAIRCASE,INFO,RENO,＜レノ、スイッチを押す＞,"<Leno, press the switch>",,,
    CH02,SECTOR 7 STAIRCASE,レノ,RENO,「はい、おしまい！　作業終了」
    CH02,SECTOR 7 STAIRCASE,ティファ,TIFA,「解除しなくちゃ！ クラウド！　バレット！　おねがい！」
    CH02,SECTOR 7 STAIRCASE,レノ,RENO,「そういうわけにはいかないぞ、と タークスのレノさまの邪魔は 誰にもさせないぞっ……と」
    CH02,SECTOR 7 STAIRCASE,INFO,INFO,＜戦闘 ：タークス：レノ＞ /n ＜タークス：レノを撃破＞,<Combat : Turks and Caicos : Reno >.,,,
    CH02,SECTOR 7 STAIRCASE,レノ,RENO,「そろそろ時間だぞ、と」
    CH02,SECTOR 7 STAIRCASE,INFO,RENO,＜タークス：レノ、去る＞ /n ＜戦闘終了＞,"<Turks: Reno, leaving>.",,,
    CH02,SECTOR 7 STAIRCASE,ティファ,TIFA,「クラウド！ 止めかたがわからないの。やってみて！」
    CH02,SECTOR 7 STAIRCASE,クラウド,CLOUD,「……ただの時限爆弾じゃない」
    CH02,SECTOR 7 STAIRCASE,INFO,TSENG,＜ヘリコプターから＞,<From helicopter.,,,
    CH02,SECTOR 7 STAIRCASE,ツォン,TSENG,「そのとおり。それを操作するのは難しい」
    CH02,SECTOR 7 STAIRCASE,ツォン,TSENG,「どこかのバカ者が勝手にふれると困るからな」
    CH02,SECTOR 7 STAIRCASE,ティファ,TIFA,「おねがい、とめて！」
    CH02,SECTOR 7 STAIRCASE,ツォン,TSENG,「クックックッ……」
    CH02,SECTOR 7 STAIRCASE,ツォン,TSENG,「緊急用プレート解除システムの設定と解除は神羅役員会の決定なしではできないのだ」
    CH02,SECTOR 7 STAIRCASE,バレット,BARRET,「ゴチャゴチャうるせえ！」
    CH02,SECTOR 7 STAIRCASE,ツォン,TSENG,「そんなことされると大切なゲストがケガするじゃないか」
    CH02,SECTOR 7 STAIRCASE,INFO,AERITH,＜ヘリコプターにエアリスが＞,＜Aeris on the helicopter.,,,
    CH02,SECTOR 7 STAIRCASE,ティファ,TIFA,「エアリス！！」
    CH02,SECTOR 7 STAIRCASE,ツォン,TSENG,「おや、知り合いなのか？」
    CH02,SECTOR 7 STAIRCASE,ツォン,TSENG,「最後に会えて良かったな。私に感謝してくれ」
    CH02,SECTOR 7 STAIRCASE,クラウド,CLOUD,「エアリスをどうする気だ」
    CH02,SECTOR 7 STAIRCASE,ツォン,TSENG,「さあな」
    CH02,SECTOR 7 STAIRCASE,ツォン,TSENG,「われわれタークスにあたえられた命令は『古代種』の生き残りをつかまえろ、ということだけだ」
    CH02,SECTOR 7 STAIRCASE,ツォン,TSENG,「ずいぶんと長い時間がかかったが やっとプレジデントに報告できる」
    CH02,SECTOR 7 STAIRCASE,エアリス,AERITH,「ティファ、だいじょうぶだから！ あの子、だいじょうぶだから！」
    CH02,SECTOR 7 STAIRCASE,INFO,TSENG,＜ツォン、エアリスをぶつ＞,"＜Tsong, hit Aerith.",,,
    CH02,SECTOR 7 STAIRCASE,ティファ,TIFA,「エアリス！」
    CH02,SECTOR 7 STAIRCASE,エアリス,AERITH,「だからはやく逃げて！」
    CH02,SECTOR 7 STAIRCASE,ツォン,TSENG,「クックックッ！ そろそろ始まるぞ。逃げきれるかな？」
    CH02,SECTOR 7 PLATE COLLAPSE,INFO,INFO,＜柱が上から崩れる＞,<Pillar collapses from above>.,,,
    CH02,SECTOR 7 PLATE COLLAPSE,INFO,INFO,＜ヘリコプターが飛び去る＞,＜Helicopter flies away.,,,
    CH02,SECTOR 7 PLATE COLLAPSE,ティファ,TIFA,「上のプレートが落ちてきたら ひとたまりもないわ。いそがなくちゃ！」
    CH02,SECTOR 7 PLATE COLLAPSE,バレット,BARRET,「おい、このワイヤーを使って 脱出できるぜ！」
    CH02,SECTOR 7 PLATE COLLAPSE,INFO,INFO,＜ティファ、クラウド、バレットにつかまって、ワイヤーで飛び降りる＞,"<Tifa, Cloud, hold on to Barrett and jump down on the wire>.",,,
    CH02,SECTOR 7 PLATE COLLAPSE,INFO,INFO,＜その瞬間、プレートが落ちてきて、７番街が無情にも瓦礫に埋まる＞,"<At that moment, a plate falls and 7th Avenue is unceremoniously buried in rubble>.",,,
    CH03,DESTROYED PARK,INFO,INFO,＜六番街公園＞,<Rokubangai Park>.,,,バレット
    CH03,DESTROYED PARK,バレット,BARRET,「マリン！ マリン！！」SYS
    CH03,DESTROYED PARK,バレット,BARRET,「マリーーン！！」クラウド
    CH03,DESTROYED PARK,バレット,BARRET,「ビッグス！」ティファ
    CH03,DESTROYED PARK,バレット,BARRET,「ウェッジ！！」セフィロス
    CH03,DESTROYED PARK,バレット,BARRET,「ジェシー！！」エルミナ
    CH03,DESTROYED PARK,バレット,BARRET,「こんちくしょう！」エアリス
    CH03,DESTROYED PARK,バレット,BARRET,「こんちくしょう！！」ツォン
    CH03,DESTROYED PARK,バレット,BARRET,「こんちくしょうーー！！！！」武器屋の親父
    CH03,DESTROYED PARK,バレット,BARRET,「なんだ、こんなもの！」子供Ａ
    CH03,DESTROYED PARK,バレット,BARRET,「うぉぉーー！！」子供Ｃ
    CH03,DESTROYED PARK,INFO,BARRET,＜バレット、瓦礫を持ち上げようとする＞,<Barrett attempts to lift debris>.,,,子供Ｂ
    CH03,DESTROYED PARK,クラウド,CLOUD,「おい、バレット！」警備兵
    CH03,DESTROYED PARK,ティファ,TIFA,「バレット！」重役社員
    CH03,DESTROYED PARK,バレット,BARRET,「うぉぉーー！！」ドミノ
    CH03,DESTROYED PARK,クラウド,CLOUD,「おい！」OL神羅
    CH03,DESTROYED PARK,ティファ,TIFA,「バレット、もうやめて…… おねがい、バレット」サラリーマン神羅
    CH03,DESTROYED PARK,バレット,BARRET,「うわぁぁぁーー！！！」リーブ
    CH03,DESTROYED PARK,INFO,BARRET,＜バレット、辺りに銃を撃ちまくる＞,"<Barrett, shooting around the area>.",,,プレジデント神羅
    CH03,DESTROYED PARK,バレット,BARRET,「クッ！ ちくしょう……」パルマー
    CH03,DESTROYED PARK,バレット,BARRET,「マリン……」ハイデッカー
    CH03,DESTROYED PARK,ティファ,TIFA,「……… ねぇ、バレット……」宝条
    CH03,DESTROYED PARK,ティファ,TIFA,「マリンは、マリンはだいじょうぶだと思うの」スカーレット
    CH03,DESTROYED PARK,バレット,BARRET,「……え？」研究員
    CH03,DESTROYED PARK,ティファ,TIFA,「エアリスが言ってたわ。『あの子、だいじょうぶだから』って、マリンのことよ、きっと」レッド13
    CH03,DESTROYED PARK,バレット,BARRET,「ほ、本当か！！」ルード
    CH03,DESTROYED PARK,ティファ,TIFA,「でも……」ルーファウス
    CH03,DESTROYED PARK,バレット,BARRET,「ビッグス…… ウェッジ…… ジェシー……」0
    CH03,DESTROYED PARK,クラウド,CLOUD,「……あの３人は柱の中にいた」
    CH03,DESTROYED PARK,バレット,BARRET,「わかってる……」
    CH03,DESTROYED PARK,バレット,BARRET,「でもよ、でもよ！ いっしょに戦ってきた仲間だ！」
    CH03,DESTROYED PARK,バレット,BARRET,「死んじまったなんて…… 思いたくねえ！」
    CH03,DESTROYED PARK,ティファ,TIFA,「……７番街の人たちも」
    CH03,DESTROYED PARK,バレット,BARRET,「ああ、ヒドイもんだぜ」
    CH03,DESTROYED PARK,バレット,BARRET,「オレたちを倒すために街ひとつ つぶしちまうんだからな。いったい何人死んだんだ……」
    CH03,DESTROYED PARK,ティファ,TIFA,「……私たちのせい？ アバランチがいたから？ 関係ない人たちまで……」
    CH03,DESTROYED PARK,バレット,BARRET,「ちがう！　ちがうぜ！　ティファ！！」
    CH03,DESTROYED PARK,バレット,BARRET,「なにもかも神羅のやつらが やったことじゃねえか！」
    CH03,DESTROYED PARK,バレット,BARRET,「自分たちの金や権力のために星の命を吸い取る悪党ども！」
    CH03,DESTROYED PARK,バレット,BARRET,「その神羅をつぶさない限り この星は死んじまうんだ！」
    CH03,DESTROYED PARK,バレット,BARRET,「神羅を倒すまでオレたちの戦いは おわらねえ！！」
    CH03,DESTROYED PARK,ティファ,TIFA,「……わからない」
    CH03,DESTROYED PARK,バレット,BARRET,「オレが言ってること わからねえのか！？」
    CH03,DESTROYED PARK,ティファ,TIFA,「ちがう…… わからないのは 自分の……気持ち」
    CH03,DESTROYED PARK,バレット,BARRET,「おまえはどうなんだ？」
    CH03,DESTROYED PARK,クラウド,CLOUD,「……」
    CH03,DESTROYED PARK,INFO,CLOUD,＜クラウド、去る＞,"<Cloud, leaving>.",,,
    CH03,DESTROYED PARK,バレット,BARRET,「おい！」
    CH03,DESTROYED PARK,バレット,BARRET,「あいつ、どこへ？」
    CH03,DESTROYED PARK,ティファ,TIFA,「あっ！　エアリスのこと！」
    CH03,DESTROYED PARK,バレット,BARRET,「ああ、あの嬢ちゃんか。何者なんだ？」
    CH03,DESTROYED PARK,ティファ,TIFA,「……私もよく知らない。でも、マリンのことを エアリスに頼んだの」
    CH03,DESTROYED PARK,バレット,BARRET,「そうだ！　マリン！！」
    CH03,DESTROYED PARK,バレット,BARRET,「ティファ。もう、あともどりはできねえんだ」
    CH03,SECTOR 6 STREET,INFO,INFO,＜六番街＞,<Rokuban Street>.,,,
    CH03,SECTOR 6 STREET,バレット,BARRET,「クラウド！」
    CH03,SECTOR 6 STREET,バレット,BARRET,「マリンのところへ連れてってくれ！」
    CH03,SECTOR 6 STREET,ティファ,TIFA,「エアリスを助けにいくのね？」
    CH03,SECTOR 6 STREET,クラウド,CLOUD,「ああ…… でも、その前に確かめたいことがあるんだ」
    CH03,SECTOR 6 STREET,ティファ,TIFA,「なに？」
    CH03,SECTOR 6 STREET,クラウド,CLOUD,「……古代種」
    CH03,SECTOR 6 STREET,INFO,INFO,＜突如、場面が切り替わる＞,"＜Suddenly, the scene changes.",,,
    CH03,SECTOR 6 STREET,セフィロス,SEPHIROTH,「われこそ古代種の血をひきし者。この星の正統なる後継者！」
    CH03,SECTOR 6 STREET,クラウド,CLOUD,「セフィロス……？」
    CH03,SECTOR 6 STREET,INFO,CLOUD,＜クラウド、うずくまる＞,"<Cloud, cringing>",,,
    CH03,SECTOR 6 STREET,ティファ,TIFA,「だいじょうぶ？」
    CH03,SECTOR 6 STREET,バレット,BARRET,「しっかりしてくれよ！」
    CH03,AERITH'S HOUSE,INFO,INFO,＜エアリスの家＞,<Aerith's house>.,,,
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「クラウド……だったね」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「エアリスのこと、だろ？」
    CH03,AERITH'S HOUSE,クラウド,CLOUD,「……すまない。神羅にさらわれた」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「知ってるよ。ここから連れていかれたからね」
    CH03,AERITH'S HOUSE,クラウド,CLOUD,「ここで？」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「エアリスが望んだことだよ……」
    CH03,AERITH'S HOUSE,クラウド,CLOUD,「どうしてエアリスは 神羅に狙われるんだ？」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「エアリスは古代種。古代種の生き残りなんだとさ」
    CH03,AERITH'S HOUSE,バレット,BARRET,「……なんだとさ、だって？ あんた母親なんだろ？」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「……本当の母親じゃないんだよ。あれは……そう、15年前…」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「……戦争中でね。わたしの夫は戦地に行ってた。ウータイという遠い国さ」
    CH03,DARKNESS,エルミナ,ELMYRA,「ある日、休暇で帰ってくるって てがみをもらったから わたしは駅までむかえにいったのさ」
    CH03,MIDGAR TRAIN STATION 2,INFO,INFO,＜回想＞,<Recollection.,,,
    CH03,MIDGAR TRAIN STATION 2,エルミナ,ELMYRA,「夫は帰ってこなかった」
    CH03,MIDGAR TRAIN STATION 2,エルミナ,ELMYRA,「夫の身になにかあったんだろうか？」
    CH03,MIDGAR TRAIN STATION 2,エルミナ,ELMYRA,「いや、休暇が取り消しになっただけかもしれない」
    CH03,MIDGAR TRAIN STATION 2,エルミナ,ELMYRA,「それからわたしは毎日駅へ行った」
    CH03,MIDGAR TRAIN STATION 2,エルミナ,ELMYRA,「ある日……」
    CH03,MIDGAR TRAIN STATION 2,INFO,ELMYRA,＜エルミナ、倒れている実母のかたわらにいる幼少のエアリスを発見＞,"<Hermina finds a young Aeris at the side of her mother, who has collapsed.",,,
    CH03,MIDGAR TRAIN STATION 2,エルミナ,ELMYRA,「戦争中はよくある風景だったね」
    CH03,DARKNESS,エルミナ,ELMYRA,「エアリスを安全なところへ。そう言い残して彼女は死んだ」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「わたしの夫は帰らず、子供もいない。わたしもさびしかったんだろうね。エアリスを家に連れて帰ることにしたんだ」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「エアリスはすぐにわたしになついてくれた。よくしゃべる子でねえ。いろいろ話してくれたよ」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「どこかの研究所みたいなところから母親と逃げ出したこと。お母さんは星に帰っただけだから さびしくなんかない……いろいろね」
    CH03,DARKNESS,INFO,INFO,＜一時、回想終了＞,"<Temporarily, end of recollection>.",,,
    CH03,AERITH'S HOUSE,バレット,BARRET,「星に帰っただって？」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「わたしには意味がわからなかったよ。夜空の星かって聞いたら ちがう、この星だっていわれて……」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「まあ、いろんな意味で不思議な子供だったね」
    CH03,DARKNESS,INFO,INFO,＜回想＞,<Recollection.,,,
    CH03,AERITH'S HOUSE,エアリス,AERITH CHILD,「お母さん」
    CH03,AERITH'S HOUSE,エアリス,AERITH CHILD,「泣かないでね」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「エアリスが突然言い出した。何かあったのかって聞いたら……」
    CH03,AERITH'S HOUSE,エアリス,AERITH CHILD,「お母さんの大切な人が 死んじゃったよ」
    CH03,AERITH'S HOUSE,エアリス,AERITH CHILD,「心だけになってお母さんに会いにきたけど でも、星に帰ってしまったの」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「わたしは信じなかった」
    CH03,DARKNESS,エルミナ,ELMYRA,「でも…」
    CH03,DARKNESS,エルミナ,ELMYRA,「それから何日かして… 夫が戦死したという知らせが… 届いたんだ…」
    CH03,DARKNESS,エルミナ,ELMYRA,「……とまあ、こんな具合でね」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「いろいろあったけど わたしたちは幸せだった。ところがある日……」
    CH03,AERITH'S HOUSE,ツォン,TSENG,「エアリスを返してほしいのです。ずいぶん探しました」
    CH03,AERITH'S HOUSE,エアリス,AERITH CHILD,「いやっ！ 絶対いやっ！」
    CH03,AERITH'S HOUSE,ツォン,TSENG,「エアリス、君は大切な子供なんだ。君は特別な血をひいている」
    CH03,AERITH'S HOUSE,ツォン,TSENG,「君の本当のお母さんの血。『古代種』の血だ」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「もちろん聞いたよ。『古代種』って何だってね」
    CH03,AERITH'S HOUSE,ツォン,TSENG,「古代種は至上の幸福が約束された土地へ 我々を導いてくれるのです」
    CH03,AERITH'S HOUSE,ツォン,TSENG,「エアリスはこのまずしいスラムの人々に 幸福を与えることができるのです」
    CH03,AERITH'S HOUSE,ツォン,TSENG,「ですから我々神羅カンパニーは ぜひともエアリスの協力を……」
    CH03,AERITH'S HOUSE,エアリス,AERITH CHILD,「ちがうもん！ エアリス、古代種なんかじゃないもん！」
    CH03,AERITH'S HOUSE,ツォン,TSENG,「でもエアリス、君はときどき誰もいないのに声が聞こえることがあるだろ？」
    CH03,AERITH'S HOUSE,エアリス,AERITH CHILD,「そんなことないもん！」
    CH03,DARKNESS,エルミナ,ELMYRA,「でも、わたしにはわかっていた。あの子の不思議な能力……」
    CH03,DARKNESS,エルミナ,ELMYRA,「一生けんめい、かくそうとしたていたから わたしは気がつかないふりをしていたけどね」
    CH03,AERITH'S HOUSE,INFO,INFO,＜回想終了＞,<End of recollection>.,,,
    CH03,AERITH'S HOUSE,クラウド,CLOUD,「よく何年も神羅から 逃げつづけることができたな」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「神羅はエアリスの協力が必要だったから 手荒なマネはできなかったんだろうね」
    CH03,AERITH'S HOUSE,ティファ,TIFA,「じゃあ、今回はどうして……」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「小さな女の子を連れて ここに帰って来たんだ」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「その途中でツォンのやつにみつかってしまったらしくてね。逃げ切れなかったんだろ、きっと」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「女の子の無事と引き替えに 自分が神羅に行くことになったんだ」
    CH03,AERITH'S HOUSE,クラウド,CLOUD,「マリン、だな」
    CH03,AERITH'S HOUSE,バレット,BARRET,「マリン！！ マリンのためにエアリスはつかまったのか！」
    CH03,AERITH'S HOUSE,バレット,BARRET,「すまねえ。マリンはオレの娘だ。すまねえ……本当に……」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「あんたが父親かい！？ あんた、娘をほったらかして何をやってるんだい！？」
    CH03,AERITH'S HOUSE,バレット,BARRET,「……その話はやめてくれ。オレだって何度も考えたさ。オレが死んじまったらマリンは…ってな」
    CH03,AERITH'S HOUSE,バレット,BARRET,「でもよ、答えはでねえんだ。マリンといつもいっしょにいたい。でも、それじゃあ戦えない」
    CH03,AERITH'S HOUSE,バレット,BARRET,「戦わなければ星が死ぬ」
    CH03,AERITH'S HOUSE,バレット,BARRET,「おう！　オレは戦うぜ！」
    CH03,AERITH'S HOUSE,バレット,BARRET,「でも、マリンが心配だ。いつでもそばにいてやりたい」
    CH03,AERITH'S HOUSE,バレット,BARRET,「な？ グルグルまわっちまうんだ」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「……わからないでもないけどね。ま、とにかく２階で眠ってるから 会っておやりよ」
    CH03,AERITH'S HOUSE,INFO,BARRET,＜バレット、一人２階へ行く＞,"＜Barrett, go upstairs alone.",,,
    CH03,AERITH'S HOUSE,ティファ,TIFA,「私のせい……。私がエアリスを巻きこんだから」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「あんた、気にするんじゃないよ。エアリスだってそんなふうに思っちゃいないよ」
    CH03,AERITH'S HOUSE,INFO,CLOUD,＜クラウド、一人で家を出ようとする＞,"<Cloud, trying to leave the house alone.",,,
    CH03,AERITH'S HOUSE,ティファ,TIFA,「エアリスのところへ行くのね」
    CH03,AERITH'S HOUSE,クラウド,CLOUD,「ああ」
    CH03,AERITH'S HOUSE,ティファ,TIFA,「私も行くから」
    CH03,AERITH'S HOUSE,クラウド,CLOUD,「神羅の本社にのりこむ。……カクゴが必要だぞ」
    CH03,AERITH'S HOUSE,ティファ,TIFA,「わかってるわ」
    CH03,AERITH'S HOUSE,ティファ,TIFA,「それに今は思いきり身体を動かしたい気分なの」
    CH03,AERITH'S HOUSE,ティファ,TIFA,「じっとしてると……なんか、ダメ」
    CH03,AERITH'S HOUSE,INFO,BARRET,＜そこへ、バレットが戻ってくる＞
    CH03,AERITH'S HOUSE,バレット,BARRET,「すまねえが、もうしばらく マリンをあずかってくれねえか？」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「ああ、かまわないよ」
    CH03,AERITH'S HOUSE,バレット,BARRET,「それから、ここは危険だ。どこかへ移ったほうがいい」
    CH03,AERITH'S HOUSE,エルミナ,ELMYRA,「……そうだねえ。ても、必ず迎えにくるんだよ。死んじゃいけないよ」
    CH03,AERITH'S HOUSE,ティファ,TIFA,「神羅ビルにはどうやって？」
    CH03,AERITH'S HOUSE,バレット,BARRET,「もう、上に行く列車は使えねぇ…」
    CH03,AERITH'S HOUSE,ティファ,TIFA,「…………」
    CH03,AERITH'S HOUSE,ティファ,TIFA,「とりあえず、ウォールマーケットに行きましょう。あそこなら何かいい手が見つかるかもしれないわ」
    CH03,WALL MARKET,INFO,INFO,＜ウォールマーケット：武器屋＞,＜Then Barrett comes back.,,,
    CH03,WM WEAPON STORE,武器屋の親父,WEAPON STORE FATHER,「あんたも、上のプレートへ行くのか？ このジンクバッテリーが必要になるぞ」
    CH03,WM WEAPON STORE,クラウド,CLOUD,「ひろったものを売りつけるのか？」
    CH03,WM WEAPON STORE,武器屋の親父,WEAPON STORE FATHER,「お、よく知ってるな。修理してあるから、大丈夫さ」
    CH03,WM WEAPON STORE,クラウド,CLOUD,「上のプレートへ登るのに どうしてバッテリーが必要なんだ？」
    CH03,WM WEAPON STORE,武器屋の親父,WEAPON STORE FATHER,「登ってみりゃわかるよ。３つで300ギルだ。買うかい？」
    CH03,WM WEAPON STORE,クラウド,CLOUD,「……」
    CH03,WM WEAPON STORE,INFO,CLOUD,＜選択肢：「わかった、買おう」or「信じられないな」→「わかった、買おう」を選択＞,"<Options: 'Okay, I'll buy it' or 'I don't believe it' -> Select 'Okay, I'll buy it' >.",,,
    CH03,WM WEAPON STORE,INFO,CLOUD,＜クラウド、『ジンクバッテリー』を手に入れる＞,"<Cloud, getting a 'zinc battery'.",,,
    CH03,WALL MARKET,子供Ａ,CHILD A,「すんごいの見れんだぜ。　ついてこいよ」
    CH03,PLATE CROSS SECTION,INFO,INFO,＜プレート断面＞,<Plate cross section >.,,,
    CH03,PLATE CROSS SECTION,子供Ｃ,CHILD B,「みんなこのワイヤーを登って 上にいっちゃったよ。こわくないのかな……ブルブル」
    CH03,PLATE CROSS SECTION,ティファ,TIFA,「これ、のぼれるの？」
    CH03,PLATE CROSS SECTION,子供Ｃ,CHILD B,「うん。上の世界につながってるんだよ」
    CH03,PLATE CROSS SECTION,バレット,BARRET,「よし！ このワイヤー、のぼろうぜ！」
    CH03,PLATE CROSS SECTION,クラウド,CLOUD,「それは無理な話だな。何百メートルあると思ってるんだ？」
    CH03,PLATE CROSS SECTION,バレット,BARRET,「無理じゃねえ！ 見ろ！　これは何に見える？」
    CH03,PLATE CROSS SECTION,クラウド,CLOUD,「何のへんてつもないワイヤーだ」
    CH03,PLATE CROSS SECTION,バレット,BARRET,「そうかよ？　オレには 金色に輝く希望の糸に見えるぜ」
    CH03,PLATE CROSS SECTION,ティファ,TIFA,「そうね、エアリスを救うために 残された道は、これだけだもんね」
    CH03,PLATE CROSS SECTION,クラウド,CLOUD,「よくわからないたとえだったが バレット、あんたの気持ちはわかった」
    CH03,PLATE CROSS SECTION,クラウド,CLOUD,「行くぞ！」
    CH03,PLATE CROSS SECTION,INFO,CLOUD,＜クラウド一行、ワイヤークライミングに挑戦＞,＜The Cloud team tried their hand at wire climbing.,,,
    CH03,PLATE CROSS SECTION,子供Ａ,CHILD A,「うわ～！ すげ～、ヒサン……」
    CH03,PLATE CROSS SECTION,子供Ｂ,CHILD C,「な、こえ～だろ？ とうちゃんは「しんら」ってやつのしわざだっていってたよ」
    CH03,PLATE CROSS SECTION,クラウド,CLOUD,「……バッテリーをはめれば」
    CH03,PLATE CROSS SECTION,クラウド,CLOUD,「あのプロペラが回りそうだな」
    CH03,PLATE CROSS SECTION,クラウド,CLOUD,「武器屋の言葉を 信じてみるか」
    CH03,PLATE CROSS SECTION,クラウド,CLOUD,「ここにもバッテリーが必要だな」
    CH03,PLATE CROSS SECTION,クラウド,CLOUD,「どうやら、あれに飛び移るしかないようだな」
    CH03,PLATE CROSS SECTION,クラウド,CLOUD,「あれが、いちばん近づく前に ジャンプすればよさそうだな。 （○ボタンでジャンプ）」
    CH03,IN FRONT OF SHINRA,INFO,CLOUD,＜クラウド一行、神羅ビル前へ辿り着く＞,＜Cloud and his party arrive in front of the Shinra Building.,,,
    CH03,IN FRONT OF SHINRA,バレット,BARRET,「おい、このビルにはくわしいんだろ？」
    CH03,IN FRONT OF SHINRA,クラウド,CLOUD,「……知らない。そういえば本社に来るのは初めてだ」
    CH03,IN FRONT OF SHINRA,バレット,BARRET,「前にきいたことあるぜ」
    CH03,IN FRONT OF SHINRA,バレット,BARRET,「このビルの60階から上は特別ブロックとかで 社員でも簡単には入れないってな」
    CH03,IN FRONT OF SHINRA,バレット,BARRET,「エアリスが連れていかれたのもそこにちがいねえ」
    CH03,IN FRONT OF SHINRA,バレット,BARRET,「今なら警備にスキがある。おおし、いくぜっ！！」
    CH03,IN FRONT OF SHINRA,ティファ,TIFA,「ちょっとまってよ！ まさか正面からのりこむつもり？」
    CH03,IN FRONT OF SHINRA,バレット,BARRET,「決まってるだろ！ 神羅のやつらをけちらして……」
    CH03,IN FRONT OF SHINRA,ティファ,TIFA,「そんなのムチャよ！ もっと見つかりにくい方法を……」
    CH03,IN FRONT OF SHINRA,バレット,BARRET,「そんなコトやってられねえ！ グズグズしてたら エアリスだって」
    CH03,IN FRONT OF SHINRA,ティファ,TIFA,「それはわかるけど！ ここで私たちまでつかまったら……」
    CH03,IN FRONT OF SHINRA,ティファ,TIFA,「ね、クラウド。……どうしたらいいの？」
    CH03,IN FRONT OF SHINRA,INFO,CLOUD,＜選択肢：「つっこむぞ！」or「コッソリ行こう」→「コッソリ行こう」を選択＞,"＜Choice: ""Let's get stuck in!"" OR ""Let's go in secretly"" -> Select ""Let's go in secretly"" >.",,,
    CH03,IN FRONT OF SHINRA,ティファ,TIFA,「でしょ？ こんな時こそしんちょうに他のルートを探しましょ！」
    CH03,SHINRA FIRE ESCAPE,INFO,INFO,＜神羅ビル・非常階段＞,"<Jinra Building, fire escape.",,,
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「おい…… ホンキでこれ、上までのぼるつもりか……？」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「しょうがないでしょ。エアリスを無事に助けるためよ」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「しかし、いくら見つかりにくいったって こいつは……」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「もう、ゴチャゴチャいわない！ いくわよ！」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「お、おいティファ！ １人でいくな！」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「なんで……わざわざ……こんな……くろうを……」
    CH03,SHINRA FIRE ESCAPE,クラウド,CLOUD,「……エアリスを助け出すまで騒ぎはおこしたくないんだ」
    CH03,SHINRA FIRE ESCAPE,クラウド,CLOUD,「でも、無理だろうな……」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「……へへへ」
    CH03,SHINRA FIRE ESCAPE,クラウド,CLOUD,「なんだよ、気持ち悪いな」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「あんたでも他人のために 戦うことがあるんだな。見直したぜ」
    CH03,SHINRA FIRE ESCAPE,クラウド,CLOUD,「あんたに見直されても うれしくない」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「いや、なんていうか……いろいろ悪かったな」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「フフフ……」
    CH03,SHINRA FIRE ESCAPE,クラウド,CLOUD,「なんだよ。ティファまで……」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「……しかしこの階段 どこまで続くんだ？」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「さあ……階段にきいて」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「このままずっと続くなんてことはないよなあ？」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「まさか！！」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「だよな……そんなはずないよな……」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「まだつかないのか？」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「まだみたいね」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「……まだか？」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「まだよ」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「なあ……」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「まだだってば！ まだまだまだまだ まだまだまだーっ！！」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「もうイヤだ！ オレはもどるぞ！」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「今までのぼったのと おなじだけ階段おりて？」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「…………」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「ホラ、バレット しっかりしなさい！」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「ん、んなコト言ったって オレは、み、右腕以外は 普通の体なんだぜ……」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「元ソルジャーみたいな と、特別製と…… いっしょにしないでくれ……」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「私だって普通だってば！ 先に行っちゃうわよ！」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「……？」
    CH03,SHINRA FIRE ESCAPE,INFO,TIFA,＜ティファ、スカートを押さえる＞,"＜Tiffany, hold her skirt.",,,
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「キャッ！！ ヤダ、バレット！ やっぱり先に行って！」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「バ、バカ！ オレはそんなつもりじゃ……」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「いいから！」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「クラウドも！ 先に行って！！」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「なあ…… 今、何階だ？」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「……もう数える気にもならない」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「こ……こんなバカ高いビルつくりやがって……」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「やっぱり、し、神羅なんてロクなやつじゃねえぜ……！」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「…………」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「ああ…… オレはもうダメだ……」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「マリン、父ちゃんはもう一度お前に会いたかった……」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「ちょっと！ エンギでもないこと言わないの！」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「もう少し！ もう少しだから！」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「たぶん……」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「や……やっと…… つい……た……」
    CH03,SHINRA FIRE ESCAPE,バレット,BARRET,「か……階段なんて……もう見るのもゴメンだ……」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「ハア……ハア……さすがにこれは……こたえたわ……ね……」
    CH03,SHINRA FIRE ESCAPE,ティファ,TIFA,「……でも、これからが本番よね。元気出していかなきゃ……！」
    CH03,SHINRA 59TH FLOOR,INFO,INFO,＜神羅ビル59階＞,"<59th floor, Shinra Building>.",,,
    CH03,SHINRA 59TH FLOOR,警備兵,SOLDIER GUARD,「侵入者を排除しろ！」
    CH03,SHINRA 59TH FLOOR,INFO,INFO,＜戦闘：強化戦闘員Ａ&Ｂ&Ｃ＞ /n ＜強化戦闘員Ａ&Ｂ&Ｃを撃破＞ /n ＜戦闘終了＞,<Combat: enhanced combatants A&B&C>.,,,
    CH03,SHINRA 59TH FLOOR,クラウド,CLOUD,「これは……」
    CH03,SHINRA 59TH FLOOR,INFO,CLOUD,＜クラウド、警備兵が落とした『カードキー60』を拾った＞,"＜Cloud, I picked up a 'card key 60' that was dropped by a guard.",,,
    CH03,SHINRA ELEVATOR,INFO,INFO,＜エレベーター＞
    CH03,SHINRA ELEVATOR,バレット,BARRET,「ここからが本番だ。ゆだんするな」
    CH03,SHINRA ELEVATOR,ティファ,TIFA,「エアリス、無事だといいね」
    CH03,SHINRA 60TH FLOOR CHECKROOM,INFO,INFO,＜神羅ビル60階チェックルーム＞,"<Checkroom, 60th floor, Shinra Building>.",,,
    CH03,SHINRA 60TH FLOOR CHECKROOM,バレット,BARRET,「みろよ、警備のやつらがウロウロしてやがるぜ」
    CH03,SHINRA 60TH FLOOR CHECKROOM,バレット,BARRET,「クラウド、まずおまえが さきに行ってあいずしてくれ。オレたちがあとにつづく」
    CH03,SHINRA 60TH FLOOR CHECKROOM,INFO,CLOUD,＜クラウド、ティファ、バレット、それぞれ物陰に隠れながら、警備兵に見つからず、進む。→見事、一発成功＞,"＜Cloud, Tifa and Barrett, each hiding in the shadows, proceed without being seen by the guards. <You succeeded with a single shot.",,,
    CH03,SHINRA 60TH FLOOR CHECKROOM,バレット,BARRET,「よし！ ガンガンいくぞ！」
    CH03,SHINRA 60TH FLOOR CHECKROOM,ティファ,TIFA,「忘れないで！ 私たちの目的はあくまでもエアリスを助けだすこと」
    CH03,SHINRA 60TH FLOOR CHECKROOM,バレット,BARRET,「わかってるって！」
    CH03,SHINRA 61ST FLOOR REFRESHMENT ROOM,INFO,INFO,＜神羅ビル61階リフレッシュルーム＞,"<Refreshment room, 61st floor, Shinra Building>.",,,
    CH03,SHINRA 61ST FLOOR REFRESHMENT ROOM,重役社員,EXECUTIVE STAFF,「なんだお前は？ こんなところで何をしている？」
    CH03,SHINRA 61ST FLOOR REFRESHMENT ROOM,INFO,CLOUD,＜選択肢：「エアリスはどこだ！」or「…………」→「…………」を選択＞,"<Options: 'Where's Aeris!' OR ""............"" -> Select ""............"" >",,,
    CH03,SHINRA 61ST FLOOR REFRESHMENT ROOM,重役社員,EXECUTIVE STAFF,「ハハーン……わかったぞ。さてはお前、アレだな？ いまウワサの……」
    CH03,SHINRA 61ST FLOOR REFRESHMENT ROOM,重役社員,EXECUTIVE STAFF,「神羅カンパニー修理課！！」
    CH03,SHINRA 61ST FLOOR REFRESHMENT ROOM,重役社員,EXECUTIVE STAFF,「いや～、このビルも そろそろあちこちにガタがきててなあ」
    CH03,SHINRA 61ST FLOOR REFRESHMENT ROOM,重役社員,EXECUTIVE STAFF,「この階のドア 開きっぱなしなんだ。早く直してくれよな」
    CH03,SHINRA 61ST FLOOR REFRESHMENT ROOM,重役社員,EXECUTIVE STAFF,「あ、そうそういちおう他の階も見回ってくれよ。これ、やるから」
    CH03,SHINRA 61ST FLOOR REFRESHMENT ROOM,INFO,CLOUD,＜クラウド、『カードキー62』を受け取る＞,＜Cloud receives 'card key 62'.,,,
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,INFO,INFO,＜神羅ビル62階資料室＞,"<Resource room, 62nd floor, Shinra Building>.",,,
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「あ～？ なんだキミたちは？」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「ああ、キミらが例の…… 私？ 私はこの魔晄炉都市ミッドガルの市長、ドミノだ」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「とは言っても名前だけ。ホントのところ、ミッドガルのすべては神羅のものだ」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「今の私の仕事といったら 神羅カンパニーの資料管理……」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「ミッドガルの市長が！ 神羅の資料を！ ハア……」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「キミら、上へ行きたいんだろ？ いいとも、私のカードキーをやろう。合言葉を言えたらな」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「そう、合言葉だ。それを言えたら、カードをやろう」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「おまけに１回で当てたらナイスなおみやげもつけてやるぞ？」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「合言葉がわかったのか？ では言ってみたまえ」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「合言葉は？」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,INFO,INFO,＜選択肢：「市長最高！！」or「神羅最低！！」or「魔晄最高！！」or「市長爆発！！」or「魔晄爆発！！」or「神羅爆発！！」or「ちょっと待ってくれ」→「魔晄爆発！！」を選択＞,"<Options: 'The Mayor is the best!!!' OR: ""Thera municipality sucks!"" or ""MAKING THE MAKING OF THE MAKING OF THE MAKING OF THE MAKEROID!"" or ""explosion of the mayor!"" or ""MOUNTAIN VOLUME EXPLODE!"" or ""Thera explosion!"" or ""Wait a minute,"" then ""Madame Vault explodes!"" Select...",,,
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「ぜんぜん違う！ もっとすばらしい言葉だ！ やり直し！」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「合言葉がわかったのか？ では言ってみたまえ」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「合言葉は？」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,INFO,INFO,＜選択肢：「市長最高！！」or「神羅最低！！」or「魔晄最高！！」or「市長爆発！！」or「魔晄爆発！！」or「神羅爆発！！」or「ちょっと待ってくれ」→「神羅爆発」を選択＞,"<Options: 'The Mayor is the best!!!' OR: ""Thera municipality sucks!"" or ""MAKING THE MAKING OF THE MAKING OF THE MAKING OF THE MAKEROID!"" or ""explosion of the mayor!"" or ""MOUNTAIN VOLUME EXPLODE!"" or ""Thera explosion!"" or ""Wait a minute,"" then select ""The Thera explosion.""",,,
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「ぜんぜん違う！ もっとすばらしい言葉だ！ やり直し！」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「合言葉がわかったのか？ では言ってみたまえ」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「合言葉は？」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,INFO,INFO,＜選択肢：「市長最高！！」or「神羅最低！！」or「魔晄最高！！」or「市長爆発！！」or「魔晄爆発！！」or「神羅爆発！！」or「ちょっと待ってくれ」→「市長最高」を選択＞,"<Options: 'The Mayor is the best!!!' OR: ""Thera municipality sucks!"" or ""MAKING THE MAKING OF THE MAKING OF THE MAKING OF THE MAKEROID!"" or ""explosion of the mayor!"" or ""MOUNTAIN VOLUME EXPLODE!"" or ""Thera explosion!"" or ""Wait a minute"" and then select ""Mayor Supreme.""",,,
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「市　長　最　高　！！」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「なんとすばらしいひびき！ そのとおり！ ミッドガルの市長は最高！ 誰が何と言おうと最高！」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「……フン、まあいいだろう。ホラ、持っていけ」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,INFO,CLOUD,＜クラウド、『カードキー65』を受け取る＞,＜Cloud receives 'card key 65'.,,,
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「なるほど……ま、キミらならこんなものかな」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「それでは、キミたちに あげるのもこんなものだ」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,INFO,CLOUD,＜クラウド、『エーテル』を受け取る＞,＜Cloud receives 'ether'.,,,
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「なんでこんなコトするか？」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「きまってるじゃないか。イヤガラセだよ。イヤガラセ」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「いいか、神羅はずっと私を苦しめてきたんだぞ」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「だから私はここでキミたちをなやませ 今度はキミたちが上へ行って神羅のやつらを困らせる」
    CH03,SHINRA 62ND FLOOR RESOURCE ROOM,ドミノ,DOMINO,「どうだ、これでおあいこだろ。ヒ、ヒヒ、ヒヒヒ……」
    CH03,SHINRA 65TH FLOOR MODEL DISPLAY,INFO,INFO,＜神羅ビル65階ミニチュアフロア＞,<Miniature floor on the 65th floor of the Shinra Building>.,,,
    CH03,SHINRA 65TH FLOOR MODEL DISPLAY,クラウド,CLOUD,「ミッドガル…… 魔晄エネルギーを吸い出し 生きつづける都市の模型か……」
    CH03,SHINRA 65TH FLOOR MODEL DISPLAY,クラウド,CLOUD,「この建設中の６番街が完成したとき、神羅の野望も完全なものとなる」
    CH03,SHINRA 65TH FLOOR MODEL DISPLAY,クラウド,CLOUD,「その野望のためにエアリスを……？」
    CH03,SHINRA 65TH FLOOR MODEL DISPLAY,INFO,CLOUD,＜クラウド、宝箱から『ミッドガルパーツ』を手に入れる＞,"<Cloud, getting 'Midgal Parts' from the treasure chest.",,,
    CH03,SHINRA 65TH FLOOR MODEL DISPLAY,クラウド,CLOUD,「ミッドガル…… 魔晄エネルギーを吸い出し 生きつづける都市の模型か……」
    CH03,SHINRA 65TH FLOOR MODEL DISPLAY,クラウド,CLOUD,「この建設中の６番街が完成したとき、神羅の野望も完全なものとなる」
    CH03,SHINRA 65TH FLOOR MODEL DISPLAY,クラウド,CLOUD,「模型が欠けている……」
    CH03,SHINRA 65TH FLOOR MODEL DISPLAY,INFO,CLOUD,＜選択肢：「ミッドガルパーツをはめよう」or「ほうっておこう」→「ミッドガルパーツをはめよう」を選択＞,<Option: 'Fit the midgal parts' or 'Leave it alone' → Select 'Fit the midgal parts' >.,,,
    CH03,SHINRA 65TH FLOOR MODEL DISPLAY,クラウド,CLOUD,「……なにかが開いたような音がしたな……」
    CH03,SHINRA 65TH FLOOR MODEL DISPLAY,INFO,CLOUD,＜これを計５回続けて、欠けた模型を補綴する。→すると最後の宝箱が開いて、『カードキー66』を手に入れる＞,"<Continue this a total of five times to replace the missing model. <Then the last treasure chest will open and you will get ""Card Key 66"".",,,
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,INFO,INFO,＜神羅ビル66階会議室フロア＞,"<Shinra Building, 66th floor, conference room floor>.",,,
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,OL神羅,OL LADY,「はぁ～ もうファイル運びはうんざり……」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,OL神羅,OL LADY,「でもいろんな男の人との出会いがある。それがOLの特権ね！」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,サラリーマン神羅,SHINRA MIDDLE MANAGER,「なんかこう、生きがいってものを感じるよな。世界をこの手で動かしているっていうこの感じ」
    CH03,SHINRA TOILET,INFO,INFO,＜個室トイレ＞,<Private toilet.,,,
    CH03,SHINRA TOILET,INFO,CLOUD,＜選択肢：「汚いから長そうか？」or「登ってみようか？」or「やっぱり出よう」→「登ってみようか？」を選択＞,"<Option: 'Too dirty, too long?' OR ""Shall we climb?"" or ""Let's get out after all"" -> ""Shall we try to climb?"" Choice >.",,,
    CH03,SHINRA TOILET VENT - SHINRA MEETING ROOM,INFO,CLOUD,＜クラウド、通気孔へ潜入。→通気孔の奥へ進み、会議室を覗き見る＞,"<Cloud, sneak into the vent. <Going to the back of the vent, peering into the conference room>.",,,
    CH03,SHINRA TOILET VENT - SHINRA MEETING ROOM,バレット,BARRET,「ヒュ～！ そうそうたる顔ぶれだぜ」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,リーブ,REEVES,「７番街の被害報告が出ました」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,リーブ,REEVES,「すでに稼動していた工場部分と現在までの投資額を考えると 我が社の損害は100億ギルはくだらないかと……」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,リーブ,REEVES,「また７番プレートの再建にかかる費用は……」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA,「再建はしない」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,リーブ,REEVES,「は？」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA,「７番プレートはこのまま放っておく」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA,「そのかわりに ネオ・ミッドガル計画を再開する」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,リーブ,REEVES,「……では、古代種が？」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA,「約束の地はまもなく我々のものになるだろう」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA,「それから各地の魔晄料金を15％値上げしたまえ」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,パルマー,PALMER,「値上げ値上げ！ うひょひょひょひょ！ ぜひ我が宇宙開発部にも予算を！」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA,「魔晄料金値上げによる差益は リーブくんとスカーレットくんで分配したまえ」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,パルマー,PALMER,「いいないいな！」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,リーブ,REEVES,「プレジデント。これ以上の魔晄料金の値上げは住民の不満をまねき……」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA,「だいじょうぶだ」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA,「おろかな住民たちは不満をどころか ますます神羅カンパニーに信頼をよせることになる」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,ハイデッカー,HEIDEGGER,「ガハハハハ！」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,ハイデッカー,HEIDEGGER,「テロリストどもから７番街の市民を救ったのは 神羅カンパニーですからな！」
    CH03,SHINRA TOILET VENT - SHINRA MEETING ROOM,バレット,BARRET,「汚ねえ……」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA,「おお、宝条くん。あの娘はどうかね」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,宝条,PROF. HOJO,「サンプルとしては母親におとる。母親イファルナとの比較中だが初期段階で相違が18％」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA,「その検査にはどれくらいかかる？」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,宝条,PROF. HOJO,「ざっと、120年。我々が生きてるあいだは無理だろう。もちろんあのサンプルもな」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,宝条,PROF. HOJO,「だから古代種を繁殖させようと思うのだ。しかも、長命で実験に耐えうる強さを持たせることができる」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA,「約束はどうなる？ 計画に支障はでないのか？」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA,「……そのつもりだ。母は強く……そして弱みを持つ」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,プレジデント神羅,PRESIDENT SHINRA,「では、会議を終わる」
    CH03,SHINRA 66TH FLOOR CONFERENCE ROOM,スカーレット,SCARLET,「臭うわね……」
    CH03,SHINRA TOILET VENT - SHINRA MEETING ROOM,クラウド,CLOUD,「いまのはエアリスの話……だよな」
    CH03,SHINRA TOILET VENT - SHINRA MEETING ROOM,バレット,BARRET,「わかんねえ」
    CH03,SHINRA TOILET VENT - SHINRA MEETING ROOM,ティファ,TIFA,「たぶん、ね」
    CH03,SHINRA TOILET VENT - SHINRA MEETING ROOM,クラウド,CLOUD,「あとをつけよう」
    CH03,DARKNESS,INFO,CLOUD,＜クラウド一行、宝条のあとをつける＞,＜Cloud and his party follow Houjou.,,,
    CH03,DARKNESS,クラウド,CLOUD,「宝条……ってやつか……」
    CH03,SHINRA LAB,INFO,INFO,＜神羅ビル67階研究室フロア＞,"<Laboratory floor, 67th floor, Shinra Building>.",,,
    CH03,SHINRA LAB,バレット,BARRET,「思い出したぜ」
    CH03,SHINRA LAB,バレット,BARRET,「あの宝条ってやつ。神羅の科学部門の責任者だ。クラウド、知らねえのか？」
    CH03,SHINRA LAB,クラウド,CLOUD,「じっさい見るのは初めてだ。そうか……あいつが……」
    CH03,SHINRA LAB SAMPLE ROOM,INFO,INFO,＜67階サンプル室＞,"<Sample room, 67th floor>.",,,
    CH03,SHINRA LAB SAMPLE ROOM,研究員,RESEARCHER,「今日の実験サンプルはそいつですか？」
    CH03,SHINRA LAB SAMPLE ROOM,宝条,PROF. HOJO,「そうだ。すぐ実験にとりかかる。上の階をあげてくれ」
    CH03,SHINRA LAB SAMPLE ROOM,INFO,RESEARCHER,＜研究員、去る＞,"<Researcher, leaving>.",,,
    CH03,SHINRA LAB SAMPLE ROOM,宝条,PROF. HOJO,「かわいいサンプルよ……」
    CH03,SHINRA LAB SAMPLE ROOM,INFO,PROF. HOJO,＜宝条も去り、クラウドたちがサンプルの前に駆け寄る＞,"<Hojo leaves, and Cloud and his team rush to the front of the sample.",,,
    CH03,SHINRA LAB SAMPLE ROOM,ティファ,TIFA,「かわいいサンプルよ…か」
    CH03,SHINRA LAB SAMPLE ROOM,ティファ,TIFA,「生物実験に使われるのかな？」
    CH03,SHINRA LAB SAMPLE ROOM,INFO,CLOUD,＜クラウド、何かを見つけ、その機械に寄る＞,"<Cloud, find something and drop by that machine>.",,,
    CH03,SHINRA LAB SAMPLE ROOM,クラウド,CLOUD,「ジェノバ……」
    CH03,SHINRA LAB SAMPLE ROOM,INFO,INFO,＜中には首のない“人間”が……＞,"<Inside is a headless ""human being"" ......>",,,
    CH03,SHINRA LAB SAMPLE ROOM,INFO,CLOUD,＜クラウド、頭をかかえ、倒れ込む＞,"＜Cloud, clutching his head, collapses.",,,
    CH03,SHINRA LAB SAMPLE ROOM,クラウド,CLOUD,「ジェノバ…… セフィロスの…… そうか……ここに運んだのか」
    CH03,SHINRA LAB SAMPLE ROOM,ティファ,TIFA,「クラウド、しっかりして！」
    CH03,SHINRA LAB SAMPLE ROOM,クラウド,CLOUD,「見たか？」
    CH03,SHINRA LAB SAMPLE ROOM,バレット,BARRET,「何を？」
    CH03,SHINRA LAB SAMPLE ROOM,クラウド,CLOUD,「動いてる……生きてる？」
    CH03,SHINRA LAB SAMPLE ROOM,INFO,BARRET,＜バレット、除き込む＞,"＜Barrett, except…",,,
    CH03,SHINRA LAB SAMPLE ROOM,バレット,BARRET,「何だい、この首なしは？ けっ、バカバカしい。さっさと行こうぜ」
    CH03,SHINRA LAB FLOOR,INFO,INFO,＜神羅ビル68階実験室フロア＞,"<Laboratory floor, 68th floor, Shinra Building>.",,,
    CH03,SHINRA LAB FLOOR,クラウド,CLOUD,「エアリス！」
    CH03,SHINRA LAB FLOOR,宝条,PROF. HOJO,「エアリス？ ああ、この娘の名前だったな。何か用か？」
    CH03,SHINRA LAB FLOOR,クラウド,CLOUD,「エアリスを返してもらおう」
    CH03,SHINRA LAB FLOOR,宝条,PROF. HOJO,「…………部外者だな」
    CH03,SHINRA LAB FLOOR,バレット,BARRET,「最初に気づけよ」
    CH03,SHINRA LAB FLOOR,宝条,PROF. HOJO,「世の中にはどうでもいいことが多いのでな」
    CH03,SHINRA LAB FLOOR,宝条,PROF. HOJO,「私を殺そうというのか？ それはやめた方がいいな」
    CH03,SHINRA LAB FLOOR,宝条,PROF. HOJO,「ここの装置はデリケートだ。私がいなくなったら操作できまい？　ん？」
    CH03,SHINRA LAB FLOOR,クラウド,CLOUD,「くっ」
    CH03,SHINRA LAB FLOOR,宝条,PROF. HOJO,「そうそう。こういう時こそ論理的思考によって 行動することをおすすめするよ」
    CH03,SHINRA LAB FLOOR,宝条,PROF. HOJO,「さあ、サンプルを投入しろ！」
    CH03,SHINRA LAB FLOOR,INFO,AERITH,＜エアリスの前に、あのサンプルが現れる＞,＜The sample appears in front of Aeris.,,,
    CH03,SHINRA LAB FLOOR,エアリス,AERITH,「クラウド、助けて！」
    CH03,SHINRA LAB FLOOR,クラウド,CLOUD,「何をする気だ！」
    CH03,SHINRA LAB FLOOR,宝条,PROF. HOJO,「滅びゆく種族に愛の手を…… どちらも絶滅まぢかだ」
    CH03,SHINRA LAB FLOOR,宝条,PROF. HOJO,「私が手を貸さないと この種の生物は滅んでしまうからな」
    CH03,SHINRA LAB FLOOR,ティファ,TIFA,「……生物？　ひどいわ！ エアリスは人間なのよ！」
    CH03,SHINRA LAB FLOOR,バレット,BARRET,「許せねえ！」
    CH03,SHINRA LAB FLOOR,クラウド,CLOUD,「バレット！ 何とかならないのか？」
    CH03,SHINRA LAB FLOOR,バレット,BARRET,「ええい！！ さがってろ！」
    CH03,SHINRA LAB FLOOR,宝条,PROF. HOJO,「やめろ！！」
    CH03,SHINRA LAB FLOOR,INFO,BARRET,＜バレット、銃で機械を破壊する＞,"<Barrett, guns destroy machines>.",,,
    CH03,SHINRA LAB FLOOR,宝条,PROF. HOJO,「な、なんていうことだ。大事なサンプルが……」
    CH03,SHINRA LAB FLOOR,INFO,PROF. HOJO,＜ガラス管のゲートが開き、そこからサンプルが飛び出し、宝条に襲いかかる＞,"＜The gate of the glass tube opens, samples fly out of it and attack Houjou.",,,
    CH03,SHINRA LAB FLOOR,クラウド,CLOUD,「今のうちにエアリスを！」
    CH03,SHINRA LAB FLOOR,エアリス,AERITH,「ありがと、クラウド」
    CH03,SHINRA LAB FLOOR,ティファ,TIFA,「どうしたの？　クラウド……」
    CH03,SHINRA LAB FLOOR,クラウド,CLOUD,「……エレベーターが動いてる」
    CH03,SHINRA LAB FLOOR,宝条,PROF. HOJO,「今度はこんなハンパな奴ではないぞ。もっと凶暴なサンプルだ！」
    CH03,SHINRA LAB FLOOR,レッド13,RED XIII,「あいつは少々手強い。私の力を貸してやる」
    CH03,SHINRA LAB FLOOR,ティファ,TIFA,「しゃべった！？」
    CH03,SHINRA LAB FLOOR,レッド13,RED XIII,「あとでいくらでもしゃべってやるよ、おじょうさん」
    CH03,SHINRA LAB FLOOR,クラウド,CLOUD,「あの化け物は俺たちがかたづける」
    CH03,SHINRA LAB FLOOR,クラウド,CLOUD,「誰かエアリスを安全な所へ……」
    CH03,SHINRA LAB FLOOR,INFO,CLOUD,＜選択肢：「ティファ、頼んだぞ！」or「バレット、頼む！」→「バレット、頼む！」を選択＞,"<Option: ""Tifa, please!"" or ""Barrett, please!"" →Barrett, please! <Select>.",,,
    CH03,SHINRA LAB FLOOR,クラウド,CLOUD,「おまえの名前は？」
    CH03,SHINRA LAB FLOOR,レッド13,RED XIII,「宝条は私をレッド13と名づけた。私にとって無意味な名前だ。好きなように呼んでくれ」
    CH03,SHINRA LAB FLOOR,INFO,INFO,＜レッド13の名前入力画面＞,<Red 13 name entry screen>.,,,
    CH03,SHINRA LAB FLOOR,クラウド,CLOUD,「さあ、かかってこい！」
    CH03,SHINRA LAB FLOOR,INFO,INFO,＜戦闘：サンプル：H0512（後列）&サンプル：H0512-OPT Ａ&Ｂ&Ｃ＞ /n ＜H0512（後列）&サンプル：H0512-OPT Ａ&Ｂ&Ｃを撃破＞ /n ＜戦闘終了＞,<Combat: Sample: H0512 (back row) & Sample: H0512-OPT A&B&C>.,,,
    CH03,SHINRA LAB FLOOR,クラウド,CLOUD,「エアリス、だいじょうぶか？」
    CH03,SHINRA LAB FLOOR,ティファ,TIFA,「だいじょうぶみたいよ。……いろんな意味でね」
    CH03,SHINRA LAB FLOOR,レッド13,RED XIII,「……私にも選ぶ権利がある。二本足は好みじゃない」
    CH03,SHINRA LAB FLOOR,バレット,BARRET,「おまえ、なんだ？」
    CH03,SHINRA LAB FLOOR,レッド13,RED XIII,「興味深い問いだ。しかし、その問いは答え難いな。私は見てのとおり、こういう存在だ」
    CH03,SHINRA LAB FLOOR,レッド13,RED XIII,「……いろいろ質問もあるだろうが とりあえずここから出ようか。道案内くらいなら付きあってやる」
    CH03,SHINRA LAB FLOOR,エアリス,AERITH,「クラウド…… やっぱり、来てくれたのね」
    CH03,SHINRA LAB FLOOR,レッド13,RED XIII,「さっきは失礼したな。宝条を油断させるために演技をしたつもりだったが……」
    CH03,SHINRA LAB FLOOR,バレット,BARRET,「さあ、エアリスを助ければもうこんなビルには用はない！ さっさと出ちまおうぜ」
    CH03,SHINRA LAB FLOOR,クラウド,CLOUD,「５人で行動していたら目立つ。二手に別れよう」
    CH03,SHINRA LAB FLOOR,INFO,INFO,＜パーティー組替え：クラウド・ティファ・エアリス、バレット・レッド13＞,"<Party reconfiguration: Cloud, Tifa and Aerith, Barrett, Red 13>.",,,
    CH03,SHINRA LAB FLOOR,バレット,BARRET,「あとでな！　66階エレベーターで合流だ！」
    CH03,SHINRA LAB FLOOR,レッド13,RED XIII,「遅れるなよ。エレベーターの場所はわかっているな？ 66階だぞ」
    CH03,SHINRA ELEVATOR,INFO,INFO,＜神羅ビル66階・エレベーター＞,"<66th floor, Shinra Building, elevator>.",,,
    CH03,SHINRA ELEVATOR,クラウド,CLOUD,「お、おい！　何だ？」
    CH03,SHINRA ELEVATOR,ルード,RUDE,「上を押してもらおうか？」
    CH03,SHINRA ELEVATOR,クラウド,CLOUD,「タークス？ ワナ……か」
    CH03,SHINRA ELEVATOR,ツォン,TSENG,「スリリングな気分をあじわえたと思うが……楽しんでもらえたかな？」
    CH03,SHINRA ELEVATOR,クラウド,CLOUD,「くっ！」
    CH03,PRESIDENT'S OFFICE,INFO,INFO,＜神羅ビル70階社長室＞,"<President's office, 70th floor, Shinra Building>.",,,
    CH03,PRESIDENT'S OFFICE,クラウド,CLOUD,「みんなもつかまっちまったのか…… ……………？」
    CH03,PRESIDENT'S OFFICE,クラウド,CLOUD,「エアリスはどこだ！」
    CH03,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「あれは貴重な古代種の生き残りだからな」
    CH03,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「知らんのか？ 自らをセトラと呼び、数千年の昔に生き 今は歴史の中に埋もれてしまった種族」
    CH03,PRESIDENT'S OFFICE,レッド13,RED XIII,「セトラ……あの娘が セトラの生き残り？」
    CH03,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「セトラ、すなわち古代種は 我らの『約束の地』を教えてくれる。彼女には期待しているのだ」
    CH03,PRESIDENT'S OFFICE,レッド13,RED XIII,「約束の地？ それは言い伝えではないか？」
    CH03,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「だからといって放っておくには あまりにも魅力的だ」
    CH03,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「約束の地は途方もなく豊かな土地と言われているからな」
    CH03,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「……土地が豊かだということは」
    CH03,PRESIDENT'S OFFICE,バレット,BARRET,「魔晄エネルギーだな！」
    CH03,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「そのとおり。そこでは金喰い虫の魔晄炉など必要ないのだ」
    CH03,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「豊富な魔晄エネルギーが勝手に吹き出してくれる」
    CH03,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「そこに建設されるネオ・ミッドガル。我が神羅カンパニーのさらなる栄光……」
    CH03,PRESIDENT'S OFFICE,バレット,BARRET,「ケッ！ 夢みてんじゃねえよ！」
    CH03,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「おやおや、知らないのか？ 最近では金と力さえあれば 夢はかなうのだ」
    CH03,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「さて、会見はこれで終わりだ」
    CH03,PRESIDENT'S OFFICE,ルード,RUDE,「さあ！　さがれ！」
    CH03,PRESIDENT'S OFFICE,バレット,BARRET,「待ちやがれ！ テメエには言いたいことが山ほどあるんだ！」
    CH03,PRESIDENT'S OFFICE,INFO,BARRET,＜バレット、プレジデント神羅に襲いかかるも、ルードに阻まれる。→結局、全員連れて行かれる＞,"<Barrett attacks President Shinra, but is blocked by Rood. →In the end, they are all taken out.",,,
    CH03,PRESIDENT'S OFFICE,プレジデント神羅,PRESIDENT SHINRA,「何かあるなら…… 秘書をとおしてくれたまえ」
    CH03,SHINRA 67TH FLOOR JAIL,INFO,INFO,＜神羅ビル67階独房に入れられる。クラウド・ティファ、エアリス一人、バレット・レッド13の３部屋に＞,"<Taken to solitary confinement on the 67th floor of the Shinra Building. Cloud Tifa, Aerith alone and Barrett Red 13 in three rooms>.",,,
    CH03,SHINRA 67TH FLOOR JAIL,ティファ,TIFA,「ヒソヒソ（逃げられるかな？）」
    CH03,SHINRA 67TH FLOOR JAIL,INFO,CLOUD,＜選択肢：（俺にまかせておけ）or（ちょっとキビシイな）→（俺にまかせておけ）を選択＞,<Option: (Leave it to me) OR (It's a bit tight) -> Select (Leave it to me)>.,,,
    CH03,SHINRA 67TH FLOOR JAIL,ティファ,TIFA,「ヒソヒソ（クラウド、たのもしい！）」
    CH03,SHINRA 67TH FLOOR JAIL,INFO,CLOUD,＜選択肢：「バレットはどうしてるかな」or「レッド13はどうしてるかな」or「エアリスはどうしてるかな」→「エアリスはどうしてるかな」を選択＞,<Option: 'I wonder how Barrett is doing' OR 'I wonder how Red 13 is doing' OR 'I wonder how Aerith is doing' -> Select 'I wonder how Aerith is doing',,,
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「クラウド、そこにいるの？」
    CH03,SHINRA 67TH FLOOR JAIL,クラウド,CLOUD,「エアリス！？　無事か？」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「うん、だいじょぶ」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「きっと、クラウドが来てくれるって思ってた」
    CH03,SHINRA 67TH FLOOR JAIL,クラウド,CLOUD,「ボディーガード、依頼しただろ？」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「報酬はデート１回、だったよね？」
    CH03,SHINRA 67TH FLOOR JAIL,ティファ,TIFA,「…………………なるほど」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「……！？　ティファ！ ティファもそこにいるの！」
    CH03,SHINRA 67TH FLOOR JAIL,ティファ,TIFA,「すいませんねえ」
    CH03,SHINRA 67TH FLOOR JAIL,ティファ,TIFA,「あのね、エアリス。質問があるんだけど」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「な～に？」
    CH03,SHINRA 67TH FLOOR JAIL,ティファ,TIFA,「約束の地って本当にあるの？」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「……わからない｣
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「わたし、知ってるのは……」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,『セトラの民、星より生まれ 星と語り、星を開く』
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「えっと……それから……」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,『セトラの民、約束の地へ帰る。至上の幸福、星が与えし定めの地』
    CH03,SHINRA 67TH FLOOR JAIL,ティファ,TIFA,「……どういう意味？」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「言葉以上の意味、知らないの」
    CH03,SHINRA 67TH FLOOR JAIL,クラウド,CLOUD,「……星と語り？」
    CH03,SHINRA 67TH FLOOR JAIL,ティファ,TIFA,「星が何か言うの？」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「人が大勢いて、ざわざわしてるかんじ。だから何を言ってるのか よくわからないの」
    CH03,SHINRA 67TH FLOOR JAIL,クラウド,CLOUD,「今も聞こえるのか？」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「わたし、聞こえたのはスラムの教会だけ。ミッドガルはもうダメだって 母さん……本当の母さんが言ってた」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「いつかミッドガルから逃げなさい。星と話して、エアリスの約束の地 見つけなさい」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「……母さんが言ってた」
    CH03,SHINRA 67TH FLOOR JAIL,エアリス,AERITH,「大人になったら聞こえなくなるんだと思ってたけど……」
    CH03,SHINRA 67TH FLOOR JAIL,INFO,CLOUD,＜選択肢：「バレットはどうしてるかな」or「レッド13はどうしてるかな」or「とりあえず眠っておこう」→「バレットはどうしてるかな」を選択＞,<Options: 'I wonder how Barrett is doing' OR 'I wonder how Red 13 is doing' OR 'Let's just sleep for now' -> Select 'I wonder how Barrett is doing',,,
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「おい」
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「エアリスは古代種で 古代種の本当の呼び名はセトラ」
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「それで古代種は約束の地って場所を知っていて、神羅はその約束の地が欲しい、と」
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「でも、約束の地ってのは 言い伝えに出てくるだけで 本当にあるのかどうかはわからねえ」
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「これでいいのか？」
    CH03,SHINRA 67TH FLOOR JAIL,INFO,RED XIII,＜レッド13、聞く耳持たず＞,"<Red 13, not listening>.",,,
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「約束の地には豊富な魔晄エネルギーがあると 神羅の連中は考えてる」
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「ってえことは、神羅はそこに行ったら また魔晄エネルギーをガンガン吸い上げちまうってことだ」
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「……そこも土地が枯れちまうな。星が……病んでいくわけだ」
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「放っちゃおけねえ！ アバランチ、メンバー募集だ」
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「オレ、ティファ、クラウド…… それにエアリスもだな」
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「おめえ、どうだ？」
    CH03,SHINRA 67TH FLOOR JAIL,INFO,RED XIII,＜レッド13、興味なし＞,"<Red 13, not interested>.",,,
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「つまんねえやろうだぜ」
    CH03,SHINRA 67TH FLOOR JAIL,INFO,INFO,＜選択肢：「レッド13はどうしてるかな」or「とりあえず眠っておこう」→「レッド13はどうしてるかな」を選択＞,<Option: 'I wonder how Red 13 is doing' or 'Let's sleep for now' -> Select 'I wonder how Red 13 is doing'.,,,
    CH03,SHINRA 67TH FLOOR JAIL,レッド13,RED XIII,「……………………じっちゃん」
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「じっちゃん！？　へへへへ じっちゃん、ねえ……へへへへ」
    CH03,SHINRA 67TH FLOOR JAIL,レッド13,RED XIII,「なにがおかしい」
    CH03,SHINRA 67TH FLOOR JAIL,バレット,BARRET,「いや、べつに……へへへ」
    CH03,DARKNESS,INFO,CLOUD,＜クラウド、とりあえず眠る＞ /n ＜そして……＞,"＜Cloud, sleep for now.",,,
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,クラウド,CLOUD,「ドアが開いている…… いつの間に？」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,INFO,CLOUD,＜クラウド、すぐそこの廊下の端で、警備兵の死体を見つける＞,"＜Cloud, right there, at the end of the corridor, we find a dead guard.",,,
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,クラウド,CLOUD,「どうしたんだ？」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,クラウド,CLOUD,「ティファ……起きろ！」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,ティファ,TIFA,「どうしたの？」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,クラウド,CLOUD,「ようすがおかしい。外を見てみろ」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,ティファ,TIFA,「一体何があったのかしら……」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,クラウド,CLOUD,「きっとここのカギを持っているはずだ……」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,クラウド,CLOUD,「ほら、ティファはエアリスを。俺はバレットたちを助ける」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,クラウド,CLOUD,「バレット、レッド13……来てくれ。ようすが変なんだ」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,バレット,BARRET,「どうやって入ってきた？ どうして扉が開いているんだ！？」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,エアリス,AERITH,「何かに襲われた……？」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,ティファ,TIFA,「なんだか恐いわ……」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,バレット,BARRET,「どうしちまったんだよ？」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,レッド13,RED XIII,「人間の仕業ではないな」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,レッド13,RED XIII,「私がこの先の様子を見てくる」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,バレット,BARRET,「こいつの後始末はオレにまかせて おまえらは先に行け。神羅に見つからねえうちによ！」
    CH03,SHINRA 67TH FLOOR CORRIDOR BLOODIED,ティファ,TIFA,「さ、レッド13の後を追いましょう」
    CH03,SHINRA LAB SAMPLE ROOM BLOODIED,INFO,INFO,＜神羅ビル67階サンプル室＞,"<Sample room, 67th floor, Shinra Building>.",,,
    CH03,SHINRA LAB SAMPLE ROOM BLOODIED,INFO,INFO,＜血まみれの研究員の死体が無造作に置かれている。あの機械の中にいた首なし“人間”もない＞,"＜The bloodied corpse of a researcher is left in a haphazard manner. The headless ""human"" that was inside the machine is also missing.",,,
    CH03,SHINRA LAB SAMPLE ROOM BLOODIED,レッド13,RED XIII,「ジェノバ・サンプル…… 察するに上の階に向かったようだ。奥のサンプル用エレベーターを使ってな」
    CH03,SHINRA LAB EXPERIMENT FLOOR BLOODIED,INFO,INFO,＜神羅ビル68階実験フロア＞,"<Experimental floor, 68th floor, Shinra Building>.",,,
    CH03,SHINRA LAB EXPERIMENT FLOOR BLOODIED,レッド13,RED XIII,「何か目的に向かっているような…… 上に……？」
    CH03,SHINRA LAB EXPERIMENT FLOOR BLOODIED,INFO,INFO,＜クラウド一行、血痕を追って上へ＞,＜Cloud and his party followed the blood trail up.,,,
    CH03,PRESIDENT'S OFFICE,INFO,INFO,＜神羅ビル70階社長室＞,"<President's office, 70th floor, Shinra Building>.",,,
    CH03,PRESIDENT'S OFFICE,INFO,INFO,＜バレットたちと合流＞,<Meet up with Barrett and the others.,,,
    CH03,PRESIDENT'S OFFICE,バレット,BARRET,「死んでる…… 神羅カンパニーのボスが死んだ……」
    CH03,PRESIDENT'S OFFICE,INFO,INFO,＜ティファ、プレジデント神羅の死体に近付く＞,＜Tiffany approaches the dead body of President Shinra.,,,
    CH03,PRESIDENT'S OFFICE,ティファ,TIFA,「この刀は？！」
    CH03,PRESIDENT'S OFFICE,クラウド,CLOUD,「セフィロスのものだ！！」
    CH03,PRESIDENT'S OFFICE,ティファ,TIFA,「……セフィロスは生きているのね？」
    CH03,PRESIDENT'S OFFICE,クラウド,CLOUD,「……そうみたいだな。この刀を使えるのは セフィロスしかいないはずだ」
    CH03,PRESIDENT'S OFFICE,バレット,BARRET,「誰がやったっていいじゃねえか！ これで神羅も終わりだ！」
    CH03,PRESIDENT'S OFFICE,INFO,BARRET,＜そこへ、隠れていたパルマーが出てくる＞,＜Then Palmer comes out of hiding.,,,
    CH03,PRESIDENT'S OFFICE,パルマー,PALMER,「うひょ！」
    CH03,PRESIDENT'S OFFICE,パルマー,PALMER,「こここここころさないでくれ！」
    CH03,PRESIDENT'S OFFICE,クラウド,CLOUD,「何があったんだ？」
    CH03,PRESIDENT'S OFFICE,パルマー,PALMER,「セ、セフィロスが来た」
    CH03,PRESIDENT'S OFFICE,クラウド,CLOUD,「見たのか？　セフィロスを見たのか？」
    CH03,PRESIDENT'S OFFICE,パルマー,PALMER,「ああ、見た！　この目で見た！」
    CH03,PRESIDENT'S OFFICE,クラウド,CLOUD,「本当に見たんだな？」
    CH03,PRESIDENT'S OFFICE,パルマー,PALMER,「うひょっ！ こんな時にウソなんか言わない！ それに声も聞いたんだ、うひょっ！」
    CH03,PRESIDENT'S OFFICE,パルマー,PALMER,「えっと『約束の地は渡さない』って ブツブツ言ってた」
    CH03,PRESIDENT'S OFFICE,ティファ,TIFA,「それじゃあ、なに？」
    CH03,PRESIDENT'S OFFICE,ティファ,TIFA,「約束の地っていうのは本当にあって セフィロスは約束の地を神羅から守るためにこんなことを？」
    CH03,PRESIDENT'S OFFICE,バレット,BARRET,「いいやつじゃねえのか？」
    CH03,PRESIDENT'S OFFICE,クラウド,CLOUD,「約束の地を守る？ いいやつ？　ちがう！！」
    CH03,PRESIDENT'S OFFICE,クラウド,CLOUD,「そんな単純な話じゃない！ 俺は知ってるんだ！ セフィロスの目的はちがう！」
    CH03,PRESIDENT'S OFFICE,INFO,PALMER,＜パルマー、逃げ出す。すると、グランドガラス向こうにヘリコプターが現れる＞,<Palmer runs away. Then a helicopter appears behind the ground glass.,,,
    CH03,PRESIDENT'S OFFICE,バレット,BARRET,「ルーファウス！ しまった！　アイツがいたか！」
    CH03,PRESIDENT'S OFFICE,ティファ,TIFA,「誰なの？」
    CH03,PRESIDENT'S OFFICE,バレット,BARRET,「副社長ルーファウス。プレジデントの息子だ」
    CH03,PRESIDENT'S OFFICE,ティファ,TIFA,「どんな人なのかしら……」
    CH03,PRESIDENT'S OFFICE,エアリス,AERITH,「血も涙もない、そう聞いたこと、あるけど」
    CH03,PRESIDENT'S OFFICE,バレット,BARRET,「長期出張中だって聞いたぜ……」
    CH03,SHINRA HELIPORT LEVEL 70,INFO,INFO,＜神羅ビル70階ヘリポート＞,<Heliport on the 70th floor of the Shinra Building>.,,,
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「そうか…… やはりセフィロスは生きていたか。……ところで」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「おまえたちはなんだ？」
    CH03,SHINRA HELIPORT LEVEL 70,クラウド,CLOUD,「元ソルジャー・クラス１ST。クラウドだ」
    CH03,SHINRA HELIPORT LEVEL 70,バレット,BARRET,「アバランチだ！」
    CH03,SHINRA HELIPORT LEVEL 70,ティファ,TIFA,「同じく！」
    CH03,SHINRA HELIPORT LEVEL 70,エアリス,AERITH,「……スラムの花売り」
    CH03,SHINRA HELIPORT LEVEL 70,レッド13,RED XIII,「……実験サンプル」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「おかしな組み合わせだ」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「さて、私はルーファウス。この神羅の社長だ」
    CH03,SHINRA HELIPORT LEVEL 70,バレット,BARRET,「オヤジが死んだらさっそく社長か！」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「そうだ社長就任のあいさつでも聞かせてやろうか」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「……オヤジは金の力で世界を支配しようとした。なるほどうまくいっていたようだ」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「民衆は神羅に保護されていると思っているからな」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「神羅で働き、給料をもらい テロリストがあらわれれば 神羅の軍隊が助けてくれる」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「一見完璧だ」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「だが私のやりかたはちがう」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「私は世界を恐怖で支配する。オヤジのやりかたでは 金がかかりすぎるからな」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「恐怖はほんの少しで人の心を支配する。おろかな民衆のために金を使う必要はない」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「私はオヤジとはちがうのだ」
    CH03,SHINRA HELIPORT LEVEL 70,ティファ,TIFA,「演説好きなところはそっくりね」
    CH03,SHINRA HELIPORT LEVEL 70,クラウド,CLOUD,「エアリスを連れてビルから出てくれ！」
    CH03,SHINRA HELIPORT LEVEL 70,バレット,BARRET,「なに？」
    CH03,SHINRA HELIPORT LEVEL 70,クラウド,CLOUD,「説明はあとだ！ バレット！　本当の星の危機だ！」
    CH03,SHINRA HELIPORT LEVEL 70,バレット,BARRET,「なんだそりゃ？」
    CH03,SHINRA HELIPORT LEVEL 70,クラウド,CLOUD,「あとで話す！ いまは俺を信じてくれ！ 俺はこいつを倒してから行く！」
    CH03,SHINRA HELIPORT LEVEL 70,バレット,BARRET,「わかったぜ、クラウド！」
    CH03,SHINRA 69 FLOOR,INFO,INFO,＜ビル69階秘書室＞,"<Secretariat, 69th floor of the building>.",,,
    CH03,SHINRA 69 FLOOR,エアリス,AERITH,「クラウド、なんか、思いつめてた」
    CH03,SHINRA 69 FLOOR,ティファ,TIFA,「……私、クラウドを待つわ！ みんなはエレベーターで先に！」
    CH03,SHINRA 69 FLOOR,エアリス,AERITH,「さあ、この先きっとガードがきびしくなるわ。装備をととのえておいたほうがいいわね」
    CH03,SHINRA ELEVATOR,INFO,INFO,＜エレベーター＞,<Elevator.,,,
    CH03,SHINRA ELEVATOR,INFO,INFO,＜戦闘：ハンドレッドガンナー＞ /n ＜ハンドレッドガンナーを撃破。→ヘリガンナー、登場＞ /n ＜そのまま戦闘：ヘリガンナー＞ /n ＜ヘリガンナーを撃破＞ /n ＜戦闘終了＞,<Combat: Handed gunner>.,,,
    CH03,SHINRA HELIPORT LEVEL 70,INFO,INFO,＜神羅ビル70階ヘリポート＞,<Heliport on the 70th floor of the Shinra Building>.,,,
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「なぜ私と戦うのだ？」
    CH03,SHINRA HELIPORT LEVEL 70,クラウド,CLOUD,「おまえは約束の地を求めて セフィロスを追う」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「ふむ、その通り」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「ん？　おまえ、セフィロスが古代種だと知っているのか？」
    CH03,SHINRA HELIPORT LEVEL 70,クラウド,CLOUD,「……いろいろあってな。とにかく、おまえにもセフィロスにも 約束の地はわたせない！」
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「なるほど。友だちにはなれないようだな」
    CH03,SHINRA HELIPORT LEVEL 70,INFO,INFO,＜戦闘：ルーファウス&ダークネイション＞,<Combat: Rufus & Dark Nation>.,,,
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「クックックッ……」
    CH03,SHINRA HELIPORT LEVEL 70,INFO,INFO,＜ルーファウス&ダークネイションを撃破＞,<Defeat Rufus & Dark Nation>.,,,
    CH03,SHINRA HELIPORT LEVEL 70,ルーファウス,RUFUS,「ク……　今日の相手はここまで…だ…」
    CH03,SHINRA HELIPORT LEVEL 70,INFO,RUFUS,＜ルーファウス、ヘリコプターにつかまって、去る＞ /n ＜戦闘終了＞,"<Rufus, grab the helicopter and leave>.",,,
    CH03,SHINRA 69 FLOOR,INFO,INFO,＜神羅ビル69階秘書室＞,"<Secretariat, 69th floor, Shinra Building>.",,,
    CH03,SHINRA 69 FLOOR,ティファ,TIFA,「ルーファウスは？」
    CH03,SHINRA 69 FLOOR,クラウド,CLOUD,「とどめはさせなかった。面倒なことになりそうだ」
    CH03,SHINRA LOBBY,INFO,INFO,＜神羅ビル１階ロビー＞,<Lobby on the ground floor of the Shinra Building>.,,,
    CH03,SHINRA LOBBY,バレット,BARRET,「オレが行くぜ！」
    CH03,SHINRA LOBBY,INFO,BARRET,＜バレット、玄関に走るも引き返す＞,"<Barrett, running to the front door but turning back>.",,,
    CH03,SHINRA LOBBY,バレット,BARRET,「チッ……！ すっかりかこまれてやがる」
    CH03,SHINRA LOBBY,バレット,BARRET,「オレひとりならともなく このメンツじゃ……」
    CH03,SHINRA LOBBY,エアリス,AERITH,「……やっぱり、あなたたちだけ逃げて」
    CH03,SHINRA LOBBY,エアリス,AERITH,「あの人たちがねらっているのは わたし。あなたたちだけなら……」
    CH03,SHINRA LOBBY,バレット,BARRET,「ヘッ、そうはいかねえな」
    CH03,SHINRA LOBBY,バレット,BARRET,「アンタはマリンを守るためにヤツらに捕まった。今度は、オレがアンタを守る番だ」
    CH03,SHINRA LOBBY,バレット,BARRET,「これ以上ヤツらの……神羅の好き勝手にはさせねえ」
    CH03,SHINRA LOBBY,エアリス,AERITH,「……ありがと、バレットさん」
    CH03,SHINRA LOBBY,バレット,BARRET,「ヘヘッ、よしてくれよ。『バレットさん』なんて オレのガラじゃねえや」
    CH03,SHINRA LOBBY,レッド13,RED XIII,「……さて」
    CH03,SHINRA LOBBY,レッド13,RED XIII,「キミたちの話が終わったら そろそろここから逃げ出す方法を 考えてみないか？」
    CH03,SHINRA LOBBY,バレット,BARRET,「ん？あ、ああ…… チェッ、いやに冷静なやつだな。どこかの誰かさんみたいだぜ」
    CH03,SHINRA LOBBY,レッド13,RED XIII,「なにか？」
    CH03,SHINRA LOBBY,バレット,BARRET,「いや、なんでもねえよ。さて、どうするか……」
    CH03,SHINRA LOBBY,ティファ,TIFA,「バレット！！」
    CH03,SHINRA LOBBY,INFO,INFO,＜そこへ、ティファ（一人）が来る＞,＜Then comes Tiffany (alone).,,,
    CH03,SHINRA LOBBY,バレット,BARRET,「ティファ！ クラウドは！？」
    CH03,SHINRA LOBBY,ティファ,TIFA,「みんな、こっち！」
    CH03,SHINRA LOBBY,バレット,BARRET,「ええ！？ どうしたんだよ？ クラウドは？」
    CH03,SHINRA LOBBY,ティファ,TIFA,「話は後！ いいから早く！」
    CH03,SHINRA GARAGE,INFO,INFO,＜ティファ、バレットたちを誘導して車庫（？）に行く。→置いてある車に乗り、それを見計らったかのようにクラウドがバイクで登場＞,"<Tiffany, lead Barrett and the others to the garage (?). Tiffany leads Barrett and the others to the garage (?). →The car is left behind, and as if on cue, Cloud appears on his motorbike.",,,
    CH03,SHINRA GARAGE,INFO,INFO,＜二階に上がり、バイクで窓を突き破り、ハイウェイに降り立つ（車もバイクの後を追う）＞,"＜'I go upstairs, push through the window on my motorbike and get off onto the highway (the car follows the motorbike)'.",,,
    CH03,HIGHWAY BATTLE,INFO,INFO,＜そのまま、神羅の兵士のバイクと、クラウドのバイク、皆が乗った車とのカーチェイス『ハイウェイバトル』＞,"<As it is, a car chase ""Highway Battle"" between the motorbike of a Shinra soldier, Cloud's motorbike and a car with everyone on it.",,,
    CH03,HIGHWAY BATTLE,INFO,INFO,＜ハイウェイバトルが終了すると、そのままボスとの戦闘になる＞,"<When the highway battle ends, you go straight into battle with the boss.",,,
    CH03,HIGHWAY BATTLE,INFO,INFO,＜戦闘：モーターボール＞ /n ＜モーターボールを撃破＞ /n ＜戦闘終了＞,<Combat: motorball>.,,,
    CH03,EDGE OF MIDGAR,バレット,BARRET,「さて、どうするよ？」
    CH03,EDGE OF MIDGAR,クラウド,CLOUD,「セフィロスは生きている。俺は……あのときの決着をつけなくてはならない」
    CH03,EDGE OF MIDGAR,バレット,BARRET,「それが星を救うことになるんだな？」
    CH03,EDGE OF MIDGAR,クラウド,CLOUD,「……おそらく、な」
    CH03,EDGE OF MIDGAR,バレット,BARRET,「おっし、オレは行くぜ！」
    CH03,EDGE OF MIDGAR,エアリス,AERITH,「わたしも、行く。……知りたいこと、あるから」
    CH03,EDGE OF MIDGAR,クラウド,CLOUD,「古代種のことか？」
    CH03,EDGE OF MIDGAR,エアリス,AERITH,「……いろいろ、たくさん」
    CH03,EDGE OF MIDGAR,ティファ,TIFA,「さらばミッドガル、ね」
    CH03,LEAVING MIDGAR,レッド13,RED XIII,「私は故郷に帰るつもりだ。それまではいっしょに行ってやる」
    CH03,LEAVING MIDGAR,ティファ,TIFA,「……旅がはじまるのね」
    CH03,LEAVING MIDGAR,INFO,CLOUD,＜選択肢：「旅はきらいか？」or「危険だぞ、いいのか？」→「危険だぞ、いいのか？」を選択＞,"＜Options: 'Do you hate travelling?' or ""It's dangerous, are you sure?"" →Dangerous, are you sure?"" Select ""Yes"".",,,
    CH03,LEAVING MIDGAR,ティファ,TIFA,「……う～ん。でもほら、クラウドが約束守ってくれれば だいじょうぶよね、きっと」
    CH03,LEAVING MIDGAR,エアリス,AERITH,「そういえば、わたし ミッドガル出るの、はじめて……」
    CH03,LEAVING MIDGAR,INFO,CLOUD,＜選択肢：「そうか……不安か？」or「危険だぞ、いいのか？」→「そうか……不安か？」を選択＞,"<Options: ""Well ...... anxious?"" OR: ""It's dangerous, are you sure?"" →Select ""Are you worried about ......?"" >> Select ""Yes"".",,,
    CH03,LEAVING MIDGAR,エアリス,AERITH,「ちょっと、う～ん、かなり、かな。でも、なんでも屋さんが いっしょだし、ね？」
    CH03,LEAVING MIDGAR,バレット,BARRET,「エアリスのおふくろさんには 安全な場所に移るようにって言っておいたからマリンも安全だな」
    CH03,LEAVING MIDGAR,INFO,CLOUD,＜選択肢：「そうだな」or「さ～て、どうかな」→「そうだな」を選択＞,"<Options: 'Yes, I suppose' or 'Well, I don't know' -> Select 'Yes, I suppose' >.",,,
    CH03,LEAVING MIDGAR,エアリス,AERITH,「もう、ミッドガルはイヤだって言ってた……ちょうど良かったかな」
    CH03,LEAVING MIDGAR,クラウド,CLOUD,「さて……」
    CH03,LEAVING MIDGAR,INFO,CLOUD,＜選択肢：「もう少しここにいよう」or「行こうか！」→「行こうか！」を選択＞,"＜Options: 'Let's stay here a little longer' or 'Let's go! →Let's go!"" <Select ""Let's go!",,,
    CH03,LEAVING MIDGAR,バレット,BARRET,「ここから先 団体行動にはリーダーが必要だ。リーダーといえばオレしかいねえ」
    CH03,LEAVING MIDGAR,ティファ,TIFA,「そうかしら……」
    CH03,LEAVING MIDGAR,エアリス,AERITH,「どう考えてもクラウド、よね」
    CH03,LEAVING MIDGAR,バレット,BARRET,「チッ…………わかったよ。ここから北東にカームって町があるんだ。何かあったらそこを集合場所にしよう」
    CH03,LEAVING MIDGAR,バレット,BARRET,「それにしたって野っ原を５人でゾロゾロ歩くなんて危なくてしょうがねえ。おまえ、パーティーを２組に分けてみろ」
    CH03,LEAVING MIDGAR,INFO,INFO,＜パーティー組替え：クラウド・ティファ・エアリス、バレット・レッド13＞,"<Party reconfiguration: Cloud, Tifa and Aerith, Barrett, Red 13>.",,,
    CH03,LEAVING MIDGAR,バレット,BARRET,「……やると思ったぜ」
    CH03,LEAVING MIDGAR,バレット,BARRET,「じゃあ、カームでな！」`
    const json = [];

    const csv = toParse.split('\n');
    csv.forEach(line => {
        line = line.split(',');
        const dialogue = {
            chapter: line[0].trim(),
            location: line[1],
            character: line[2],
            asset: line[3],
            dialogue: line[4].slice(1, -1).trim('「').trim('」').replaceAll('/n', '\n').replaceAll('＜', '').replaceAll('＞', ''),
        }
        json.push(dialogue);
    });
    return json;
}