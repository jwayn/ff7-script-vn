export default () => {

    const toParse = `CH01|BOMBING MISSION|バレット|#N/A|「行くぞ、新入り！ オレに続け！」|
    CH01|BOMBING MISSION|INFO|#N/A|＜戦闘：元ソルジャーＡ&Ｂ＞|<Combat: ex-soldier A&B>.
    CH01|BOMBING MISSION|INFO|#N/A|＜元ソルジャーを撃破＞|＜元ソルジャーを撃破＞
    CH01|BOMBING MISSION|INFO|#N/A|＜戦闘終了＞|＜戦闘終了＞
    CH01|BOMBING MISSION|ビッグス|#N/A|「さすが、ソルジャー！ でもよ、反神羅（しんら）グループ【アパランチ】にソルジャーが参加するなんてスゲェよな！」|
    CH01|BOMBING MISSION|ジェシー|#N/A|「その話って本当だったの？ ソルジャーって言ったら 私たちの敵でしょ？」|
    CH01|BOMBING MISSION|ジェシー|#N/A|「どうして、そのソルジャーが私たちアバランチに協力するわけ？」|
    CH01|BOMBING MISSION|ビッグス|#N/A|「早とちりするな、ジェシー。元、ソルジャーなんだってさ」|
    CH01|BOMBING MISSION|ビッグス|#N/A|「今はもう神羅（しんら）をやめちまって 俺たちの仲間ってわけさ」|
    CH01|BOMBING MISSION|ビッグス|#N/A|「まだ名前聞いてなかったよな。教えてくれ」|
    CH01|BOMBING MISSION|INFO|#N/A|＜クラウドの名前入力画面＞|<Cloud name entry screen>.
    CH01|BOMBING MISSION|クラウド|#N/A|「……クラウドだ」|
    CH01|BOMBING MISSION|ビッグス|#N/A|「クラウドか、おれは……」|
    CH01|BOMBING MISSION|クラウド|#N/A|「あんたたちの名前なんて興味ないね。どうせこの仕事が終わったらお別れだ」|
    CH01|BOMBING MISSION|バレット|#N/A|「なにやってんだオマエたち！ かたまって行動するなって言ってんだろ！」|
    CH01|BOMBING MISSION|バレット|#N/A|「ターゲットは壱番魔晄炉（まこうろ）。魔晄炉前のブリッジに集合だぞ」|
    CH01|BOMBING MISSION|バレット|#N/A|「元ソルジャー……。チッ、信用できねえな」|
    CH01|BOMBING MISSION|INFO|#N/A|＜バレットの名前入力画面＞|<Barret name entry screen>.
    CH01|BOMBING MISSION|INFO|#N/A|＜１番魔胱炉＞|<No. 1, Mako Reactor>
    CH01|BOMBING MISSION|バレット|#N/A|「……おい。おまえ魔晄炉（まこうろ）は初めてじゃないんだろ？」|
    CH01|BOMBING MISSION|クラウド|#N/A|「まあな。ソルジャー…… 神羅（しんら）カンパニーの人間だったからな」|
    CH01|BOMBING MISSION|バレット|#N/A|「この星は魔晄（まこう）エネルギーに満ちている。住民はその魔晄エルネギーを使って日々生活している」|
    CH01|BOMBING MISSION|バレット|#N/A|「でも誰も魔晄の本質を知らねえんだ。おまえ、知ってるか？」|
    CH01|BOMBING MISSION|バレット|#N/A|「魔晄はこの星を流れる血だ。それを神羅（しんら）って会社はガンガン吸い出していやがる。このへんちくりんなスクラップでな……」|
    CH01|BOMBING MISSION|クラウド|#N/A|「能書きはいい。先を急ごう」|
    CH01|BOMBING MISSION|バレット|#N/A|「クッ……」|
    CH01|BOMBING MISSION|バレット|#N/A|「よし、ここからはオレといっしょに行動してもらうぜ」|
    CH01|BOMBING MISSION|ビッグス|#N/A|「コード解除」|
    CH01|BOMBING MISSION|ビッグス|#N/A|「ここの暗号を入手するために何人の仲間が犠牲になったことか……」|
    CH01|BOMBING MISSION|ジェシー|#N/A|「コード解除」|
    CH01|BOMBING MISSION|INFO|#N/A|＜エレベータへ＞|<To the elevator>
    CH01|BOMBING MISSION|ジェシー|#N/A|「さ、そこのボタンを押して！」|
    CH01|BOMBING MISSION|バレット|#N/A|「魔晄炉（まこうろ）のせいで、この星の命は毎日けずられていく。そしていつの日か……ゼロだ」|
    CH01|BOMBING MISSION|クラウド|#N/A|「悪いけど興味がないな」|
    CH01|BOMBING MISSION|バレット|#N/A|「星が死んじまうんだぞ。えっ、クラウドさんよ！」|
    CH01|BOMBING MISSION|クラウド|#N/A|「俺が考えてるのは、さっさと仕事を終わらせたいってことだけだ。警備兵やガードロボットが来ないうちにな」|
    CH01|BOMBING MISSION|INFO|#N/A|＜エレベータを降りる＞|<Exit elevator>.
    CH01|BOMBING MISSION|ジェシー|#N/A|「はしごの前では【決定ボタン】を押して。そうすればはしごにつかまるわ。後は【方向キー】の上下で、のぼりおりするの」|
    CH01|BOMBING MISSION|バレット|#N/A|「ここもブッ壊しちまえば ただのガラクタだぜ」|
    CH01|BOMBING MISSION|バレット|#N/A|「クラウドさんよ この爆弾をセットしてくれ」|
    CH01|BOMBING MISSION|クラウド|#N/A|「あんたがやったほうが いいんじゃないのか？」|
    CH01|BOMBING MISSION|バレット|#N/A|「オレ？　オレは見張らせてもらう。おまえさんがおかしなマネをしないようにな」|
    CH01|BOMBING MISSION|クラウド|#N/A|「……好きにしてくれ」|
    CH01|BOMBING MISSION|INFO|#N/A|＜すると、クラウドの脳裏から謎の声が…＞|<And then, a mysterious voice from Cloud's brain...>.
    CH01|BOMBING MISSION|謎の声|#N/A|『目をさませ！』|
    CH01|BOMBING MISSION|謎の声|#N/A|『ここはただの発電所じゃない！！』|
    CH01|BOMBING MISSION|バレット|#N/A|「…………うした？」|
    CH01|BOMBING MISSION|クラウド|#N/A|「え？」|
    CH01|BOMBING MISSION|バレット|#N/A|「どうしたクラウドさんよ？ 早くしてくれ！」|
    CH01|BOMBING MISSION|クラウド|#N/A|「……ああ、すまない」|
    CH01|BOMBING MISSION|INFO|#N/A|＜爆弾をセットすると、警報が鳴る＞|<An alarm sounds when a bomb is set off>.
    CH01|BOMBING MISSION|バレット|#N/A|「本格的にやってくるぜ」|
    CH01|BOMBING MISSION|INFO|#N/A|＜戦闘：ガードスコーピオン＞|
    CH01|BOMBING MISSION|クラウド|#N/A|「バレット、気をつけろ」|
    CH01|BOMBING MISSION|クラウド|#N/A|「しっぽをあげている間に攻撃すると レーザーで反撃してくるぞ」|
    CH01|BOMBING MISSION|INFO|#N/A|＜ガードスコーピオンを撃破＞|<Combat: Guard Scorpion>.
    CH01|BOMBING MISSION|INFO|#N/A|＜戦闘終了＞|<End of combat>.
    CH01|BOMBING MISSION|クラウド|#N/A|「さあ、脱出だ」|
    CH01|BOMBING MISSION|INFO|#N/A|＜“爆破10分前”のカウントダウンが開始される＞|"＜The countdown to ""10 minutes to detonation"" begins."
    CH01|BOMBING MISSION|クラウド|#N/A|「だいじょうぶか？」|
    CH01|BOMBING MISSION|ジェシー|#N/A|「うかつ！！　足がはさまって……」|
    CH01|BOMBING MISSION|INFO|#N/A|＜クラウド、ジェシーの足にはさまっている鉄をどける＞|＜Cloud, move the iron stuck in Jesse's leg>.
    CH01|BOMBING MISSION|ジェシー|#N/A|「サンキュー！」|
    CH01|BOMBING MISSION|ジェシー|#N/A|「コード解除」|
    CH01|BOMBING MISSION|ジェシー|#N/A|「さ、あせらないで」|
    CH01|BOMBING MISSION|ビッグス|#N/A|「コード解除」|
    CH01|REACTOR EXPLOSION|INFO|#N/A|＜壱番魔晄炉爆破＞|＜No. 1 Mako reactor explosion.
    CH01|REACTOR EXPLOSION|ビッグス|#N/A|「星の命……ちょっとはのびたかな」|
    CH01|REACTOR EXPLOSION|ウェッジ|#N/A|「そうっすね」|
    CH01|REACTOR EXPLOSION|バレット|#N/A|「…………」|
    CH01|REACTOR EXPLOSION|ジェシー|#N/A|「出来た！ 下がって」|
    CH01|REACTOR EXPLOSION|INFO|#N/A|＜爆弾で穴を開ける＞|<Punching holes with bombs>
    CH01|SECTOR 8 STREETS|バレット|#N/A|「さあ、引き上げるぞ」|
    CH01|SECTOR 8 STREETS|バレット|#N/A|「ランデブー地点は８番街ステーション！ 各自単独行動、列車に乗りこむんだ！」|
    CH01|SECTOR 8 STREETS|クラウド|#N/A|「お、おい！」|
    CH01|SECTOR 8 STREETS|バレット|#N/A|「金の話なら 無事にアジトに帰ってからだ」|
    CH01|SECTOR 8 STREETS|花売り|#N/A|「ねえ」|
    CH01|SECTOR 8 STREETS|花売り|#N/A|「何があったの？」|
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜選択肢：「逃げた方がいい」or「気にするな……それより」→「気にするな……それより」を選択＞|<Options: 'You should run away' or 'Don't worry about it ...... more than that' -> Select 'Don't worry about it ...... more than that' >.
    CH01|SECTOR 8 STREETS|クラウド|#N/A|「……」|
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜選択肢：「花なんて、めずらしいな」or「いや、なんでもないんだ」→「花なんて、めずらしいな」を選択＞|
    CH01|SECTOR 8 STREETS|花売り|#N/A|「あっ、これね。気に入ってくれた？ １ギルなんだけど、どう？」|
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜選択肢：「もらおう」or「やめとくよ」→「もらおう」を選択＞|<Options: 'Let's have it' or 'I'll stop' -> Select 'Let's have it' >.
    CH01|SECTOR 8 STREETS|花売り|#N/A|「わあ、ありがとう！」|
    CH01|SECTOR 8 STREETS|花売り|#N/A|「はい！」|
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜８番街＞|Sector 8
    CH01|SECTOR 8 STREETS|兵士|#N/A|「おい！　そこの男！！」|
    CH01|SECTOR 8 STREETS|クラウド|#N/A|「神羅兵か……」|
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜選択肢：「やってやる！」or「めんどくさいから逃げる」→「やってやる！」を選択＞|"＜Option: ""I'll do it!"" or ""Run away because it's a pain in the ass"" → ""I'll do it!"" Choice: ""I'll do it!"
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜戦闘：警備兵Ａ&Ｂ＞|<Combat: Guard A&B>.
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜警備兵を撃破＞|<Defeat the guards>.
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜戦闘終了＞|<End of combat>.
    CH01|SECTOR 8 STREETS|兵士|#N/A|「なにごとだ！」|
    CH01|SECTOR 8 STREETS|クラウド|#N/A|「チッ！」|
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜選択肢：「やってやる！」or「めんどくさいから逃げる」→「やってやる！」を選択＞|"＜Option: ""I'll do it!"" or ""Run away because it's a pain in the ass"" → ""I'll do it!"" Choice: ""I'll do it!"
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜戦闘：警備兵（３人）＞|<Combat: guards (3)
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜警備兵を撃破＞|<Defeat the guards>.
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜戦闘終了＞|<End of combat>.
    CH01|SECTOR 8 STREETS|兵士|#N/A|「いたぞ！！」|
    CH01|SECTOR 8 STREETS|クラウド|#N/A|「チッ！」|
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜選択肢：「やってやる！」or「めんどくさいから逃げる」→「やってやる！」を選択＞|"＜Option: ""I'll do it!"" or ""Run away because it's a pain in the ass"" → ""I'll do it!"" Choice: ""I'll do it!"
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜戦闘：警備兵Ａ&Ｂ&Ｃ＞|<Combat: guards (3)
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜警備兵を撃破＞|<Defeat the guards>.
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜戦闘終了＞|<End of combat>.
    CH01|SECTOR 8 STREETS|兵士|#N/A|「こっちだ！！」|
    CH01|SECTOR 8 STREETS|クラウド|#N/A|「チッ！」|
    CH01|SECTOR 8 STREETS|兵士|#N/A|「ここまでだな」|
    CH01|SECTOR 8 STREETS|クラウド|#N/A|「残念だが、おまえらの相手をしてるほどヒマじゃないんでな」|
    CH01|SECTOR 8 STREETS|兵士|#N/A|「たわごとを…… よし捕らえろ！！」|
    CH01|SECTOR 8 STREETS|INFO|#N/A|＜クラウド、下の列車に飛び移る＞|＜Cloud, jump to the train below.
    CH01|MIDGAR TRAIN|INFO|#N/A|＜ミッドガル発最終列車＞|<Last train from Midgar.
    CH01|MIDGAR TRAIN|ウェッジ|#N/A|「クラウドさん こなかったっすね」|
    CH01|MIDGAR TRAIN|ビッグス|#N/A|「クラウド…… やられちまったのかな」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「ケッ……！！」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「あの野郎が金ももらわねえで いなくなるわけねえだろ！！」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「クラウド……」|
    CH01|MIDGAR TRAIN|ビッグス|#N/A|「なあ、クラウドってさ…」|
    CH01|MIDGAR TRAIN|ビッグス|#N/A|「最後まで、おれたち… アバランチのために戦ってくれんのか？」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「さあな…… 知らねえよ」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「チッ！！ おまえらがもうすこし たよりになりゃよ……」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「あんな野郎、やとわねえでも いいんだがな…」|
    CH01|MIDGAR TRAIN|ウェッジ|#N/A|「あ、バレットさん 俺たちの給料……」|
    CH01|MIDGAR TRAIN|ウェッジ|#N/A|「や、なんでもないっす…」|
    CH01|MIDGAR TRAIN|アバランチの面々|#N/A|「ふっ～～……」|
    CH01|MIDGAR TRAIN|INFO|#N/A|＜そこへ、クラウドが飛び込んで来る＞|＜Then the cloud jumps in.
    CH01|MIDGAR TRAIN|ビッグス|#N/A|「クラウド！！」|
    CH01|MIDGAR TRAIN|ウェッジ|#N/A|「クラウドさんっ！」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「クラウド……」|
    CH01|MIDGAR TRAIN|クラウド|#N/A|「約束の時間に 遅れたようだ」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「おい！　遅刻野郎！！」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「ずいぶん派手な おでましじゃねぇか」|
    CH01|MIDGAR TRAIN|クラウド|#N/A|「そうでもない。ふつうだ」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「ケッ！！」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「心配させやがって 勝手な野郎だ！」|
    CH01|MIDGAR TRAIN|クラウド|#N/A|「ほう……？ 心配してくれたのか」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「なにっ！！」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「チッ……遅刻のぶんは 報酬からひくからな」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「おい、おめえら！」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「場所変えるぞ。ついてこい！」|
    CH01|MIDGAR TRAIN|ウェッジ|#N/A|「あっ、クラウドさん！！ おつかれっす！」|
    CH01|MIDGAR TRAIN|ビッグス|#N/A|「へへ……クラウド！ 次の作戦もがんばろうな」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「あぶないから 閉めとくね」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「やだ！　クラウド！！ 顔、まっくろ……」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「はい、できあがり！」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「ね、魔胱炉で助けてくれて ありがとう！」|
    CH01|MIDGAR TRAIN|アナウンス|#N/A|「ミッドガル８番街ステーション発最終列車～」|
    CH01|MIDGAR TRAIN|アナウンス|#N/A|「終点、スラム７番街列車墓場駅～」|
    CH01|MIDGAR TRAIN|アナウンス|#N/A|「到着予定時刻はミッドガル時０時23分……」|
    CH01|MIDGAR TRAIN|神羅課長|#N/A|「これだから終電はまいるよ…。 はあ……」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「子供じゃねえんだ。じっとしてろよ」|
    CH01|MIDGAR TRAIN|車掌|#N/A|「たのみますよぅ！！ 他のお客さんの迷惑になりますから…」|
    CH01|MIDGAR TRAIN|ビッグス|#N/A|「まだ列車の非常警備体制には 移行してないみたいだな」|
    CH01|MIDGAR TRAIN|ビッグス|#N/A|「明日はそうはいかないだろうけどな」|
    CH01|MIDGAR TRAIN|ウェッジ|#N/A|「アバランチで名をあげて いつか俺だって……っす！」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「ね、クラウド。いっしょに見ない？」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「ミッドガル列車路線図ディスプレイ。二人で見ればきっと楽しいと思うの。私、説明してあげるね」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「私、こういうの好きなのよ。爆弾とかモニタ画像とかハイテク関係」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「さ、はじめるわよ」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「これが魔晄炉都市ミッドガルの全景フレームモデルね」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「スケールはだいたい１／10000ってとこかな」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「上のプレートは、地上から約50M離れているの」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「プレートを支えてるのは中心の大きな支柱と 各区画に建てられた柱……。柱は、機械塔とも呼ばれてるわ」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「ヒソヒソ…… （爆破した壱番魔晄炉が北のはずれにあるの）」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「そこから順番に２、３……８番魔晄炉まで８つの魔晄炉がミッドガルの電力供給を支えているのよ」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「それぞれの街には、名前もあったんだけど ミッドガルに住む人は誰も覚えちゃいないわ」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「名前なんかより、番号で呼ぶの。そういうところなのよ、ここは」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「ふぅ…、次はこれ！ ほら、見て」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「私たちがいま乗ってる列車のルートがこれよ」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「プレートを支えている大きな柱に 螺旋状にレールが通っているの。いまは柱のちょうど真ん中のあたりね」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「各通過ポイントの中にはID検知エリアが設置されてるの」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「乗客すべての身分やなにから全部！ 神羅ビルのホストコンピュータと連動してチェックされちゃうわけよ」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「ひそひそ…… （私たちはどう見たって不審人物だからニセのIDで通過してるの）」|
    CH01|MIDGAR TRAIN|INFO|#N/A|＜ID検知エリア、突入＞|<ID detection area, entry>.
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「噂をすれば、ね」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「この光がID検知エリア通過のサインなの」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「ひそひそ…… （暗くなるからチカンが多いのよ。ID検知エリアは……）」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「ま、それはさておき、もうすぐ地上に帰れるってわけ。なんだか、ホッとするね」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「そうだ、クラウド」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「今度、私の手作り作品を プレゼントしちゃおうかな」|
    CH01|MIDGAR TRAIN|INFO|#N/A|＜選択肢：「えんりょしとくよ」or「楽しみにしてるよ」→「楽しみにしてるよ」を選択＞|<Option: 'I'll look forward to it' or 'I'll look forward to it' -> Select 'I'll look forward to it'.
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「うん、じゃ、腕によりをかけて ドッカ～ンと制作するわ」|
    CH01|MIDGAR TRAIN|ウェッジ|#N/A|「目がチカチカしたっす。俺、暗いのだめっす。苦手っす」|
    CH01|MIDGAR TRAIN|ジェシー|#N/A|「もうすぐ駅に着くね。クラウドといっぱい話せて燃えたわ。私、導火線に火がついたかもよ」|
    CH01|MIDGAR TRAIN|車掌|#N/A|「たのみますよぅ！！ 他のお客さんの迷惑になりますから…」|
    CH01|MIDGAR TRAIN|ビッグス|#N/A|「スースー……ムニャムニャ…。（バレット、いばってんじゃねえぞ…）」|
    CH01|MIDGAR TRAIN|ビッグス|#N/A|「見ろよ…地上が見えてきたぜ。ひるも夜もねえ、オレたちの街がよ」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「ミッドガルのプレートさえなけりゃなぁ…。でっけえ空がおがめんのになあ」|
    CH01|MIDGAR TRAIN|クラウド|#N/A|「空中に浮かぶ都市か……。おちつかない風景だな」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「はあ？ あんたがそんなふうに感じるとはな」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「……意外だぜ」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「上の世界……プレート都市……」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「あのくさったピザのせいで 下の人間がどんなに苦しんでることか……」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「下の世界は今じゃあ 汚された空気のたまり場だ」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「おまけに魔晄炉はどんどんエネルギーをくみ上げちまう」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「おかげで土地は枯れる一方だ。空気をきれいにする力もなくしちまった」|
    CH01|MIDGAR TRAIN|クラウド|#N/A|「どうしてみんな上へ移らないんだろう……」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「さあな。金がないからだろ。いや、それとも……」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「どんなに汚されていても 地ベタが好きなのかもな」|
    CH01|MIDGAR TRAIN|クラウド|#N/A|「わかってるさ…。好きでスラムに住んでるやつなどいない」|
    CH01|MIDGAR TRAIN|クラウド|#N/A|「みんな、この列車とおなじ。敷かれたレールには逆らえないんだ」|
    CH01|SECTOR 7 SLUMS|INFO|#N/A|＜列車、７番街スラムへ到着＞|<Train arrives at 7th Avenue Slum>.
    CH01|SECTOR 7 SLUMS|バレット|#N/A|「おう！！ みんな、集まれ！！」|
    CH01|SECTOR 7 SLUMS|バレット|#N/A|「今回の作戦は成功だ。だがな、気を抜くなよ」|
    CH01|SECTOR 7 SLUMS|バレット|#N/A|「本番はこれからだ！ あんな爆発でびびるな！」|
    CH01|SECTOR 7 SLUMS|バレット|#N/A|「次はもっと派手にかますぞ！」|
    CH01|SECTOR 7 SLUMS|バレット|#N/A|「アジトに集合だ！！ いくぞ！」|
    CH01|SECTOR 7 SLUMS|INFO|#N/A|＜７番街スラム＞|<7th Street slum
    CH01|SECTOR 7 SLUMS|バレット|#N/A|「へへ……」|
    CH01|SECTOR 7 SLUMS|バレット|#N/A|「幼なじみにはやく会いてえか？」|
    CH01|SECTOR 7 SLUMS|INFO|#N/A|＜選択肢：「幼なじみ？」or「そこ、どいてくれ」→「幼なじみ？」を選択＞|"＜Options: ""Childhood friend?"" or ""Move over there"" -> ""Childhood friend?"" Select ""Childhood friend?""."
    CH01|SECTOR 7 SLUMS|バレット|#N/A|「へッ！！ とぼけちゃってよ」|
    CH01|SECTOR 7 SLUMS|バレット|#N/A|「いいのかねえ…」|
    CH01|SECTOR 7 SLUMS|バレット|#N/A|「よし！ 先に入ってろ」|
    CH01|7TH HEAVEN|マリン|#N/A|「とうちゃん！！」|
    CH01|7TH HEAVEN|ティファ|#N/A|「ほら、マリン！ クラウドに おかえりなさいは？」|
    CH01|7TH HEAVEN|ティファ|#N/A|「おかえりなさい、クラウド。作戦はうまくいったみたいね」|
    CH01|7th HEAVEN|ティファ|#N/A|「バレットとはケンカしなかった？」|
    CH01|7th HEAVEN|INFO|#N/A|＜選択肢 ：「やっちゃった」or「ガマンした」→「ガマンした」を選択＞|＜Choice: 'I did it' or 'I did not do it' → Select 'I did not do it'.
    CH01|7th HEAVEN|ティファ|#N/A|「ふ～ん。クラウドもおとなになったのね。子供のころ、すぐケンカだったのに」|
    CH01|7th HEAVEN|INFO|#N/A|＜ティファの名前入力画面＞|<Tiffa's name input screen>.
    CH01|7th HEAVEN|ティファ|#N/A|「あら？ お花なんてめずらしいわね」|
    CH01|7th HEAVEN|ティファ|#N/A|「スラムじゃ、めったにさかないのよ」|
    CH01|7th HEAVEN|ティファ|#N/A|「でも……」|
    CH01|7th HEAVEN|ティファ|#N/A|「プレゼントに、お花なんて クラウド、そうなんだ～」|
    CH01|7th HEAVEN|クラウド|#N/A|「そんなんじゃないさ」|
    CH01|7th HEAVEN|INFO|#N/A|＜選択肢：「ティファ、あげる」or「マリン、あげる」→「ティファ、あげる」を選択＞|<Options: 'Tiffany, I give you' or 'Marin, I give you' → Select 'Tiffany, I give you' >.
    CH01|7th HEAVEN|ティファ|#N/A|「ありがとう、クラウド。ん～、いいかおり！」|
    CH01|7th HEAVEN|ティファ|#N/A|「お店を花でいっぱいにしちゃおうかな」|
    CH01|7th HEAVEN|ウェッジ|#N/A|「あ、クラウドさん！」|
    CH01|7th HEAVEN|ウェッジ|#N/A|「ティファちゃんの料理って おいしいっすねえ。パクパク……」|
    CH01|7th HEAVEN|ウェッジ|#N/A|「でも、聞いてくれます？」|
    CH01|7th HEAVEN|INFO|#N/A|＜選択肢：「なにを」or「お前の話なんて興味ないね」→「なにを」を選択＞|＜Options: 'what' or 'I'm not interested in what you have to say' - select 'what'.
    CH01|7th HEAVEN|ウェッジ|#N/A|「ティファちゃんって いつも俺に、料理の味見させるっすよ」|
    CH01|7th HEAVEN|ウェッジ|#N/A|「おかげでほら、俺、こんなまるっこくなっちゃって」|
    CH01|7th HEAVEN|ウェッジ|#N/A|「うれしいやら、悲しいやら。おいしい料理とお酒が評判で お店ははんじょうしてるんですけどね」|
    CH01|7th HEAVEN|ジェシー|#N/A|「う☆か☆つ☆…… なんだか、ドキドキしてる」|
    CH01|7th HEAVEN|ジェシー|#N/A|「なぜなの……？」|
    CH01|7th HEAVEN|ビッグス|#N/A|「ああ～！！ 仕事の後の一杯はこたえらんねぇなぁ」|
    CH01|7th HEAVEN|ビッグス|#N/A|「ヒック！！」|
    CH01|7th HEAVEN|ビッグス|#N/A|「クラウドさんも、おひとつどうですか？」|
    CH01|7th HEAVEN|INFO|#N/A|＜選択肢：「いらないな」or「そうだな、もらおうか」→「そうだな、もらおうか」を選択＞|<Options: 'I don't want it' or 'Yes, let's have it' -> Select 'Yes, let's have it' >.
    CH01|7th HEAVEN|ビッグス|#N/A|「おっ！！ いい心がけじゃねぇか！！」|
    CH01|7th HEAVEN|ビッグス|#N/A|「元ソルジャーでもここじゃおめえも新人だ。新人にとっちゃ先輩の言うことは 絶対だからな！」|
    CH01|7th HEAVEN|ティファ|#N/A|「クラウド、ごめんね。マリン、てれちゃってるみたい」|
    CH01|7th HEAVEN|マリン|#N/A|「…………」|
    CH01|7th HEAVEN|マリン|#N/A|「とうちゃん、おかえり！」|
    CH01|7th HEAVEN|ティファ|#N/A|「バレット、ごくろうさま」|
    CH01|7th HEAVEN|バレット|#N/A|「おう！！」|
    CH01|7th HEAVEN|バレット|#N/A|「おめえら！！ 会議をはじめっぞ！！」|
    CH01|7th HEAVEN|INFO|#N/A|＜アバランチのメンバー、下の会議室へ向かう＞|<Members of the Avalanche, heading downstairs to the conference room>.
    CH01|7th HEAVEN|ティファ|#N/A|「どうぞ、すわって」|
    CH01|7th HEAVEN|ティファ|#N/A|「ねえ……」|
    CH01|7th HEAVEN|ティファ|#N/A|「何かのむ？」|
    CH01|7th HEAVEN|INFO|#N/A|＜選択肢：「いまはそんな気分じゃないな」or「キツイの、くれないか？」→「キツイの、くれないか」を選択＞|"＜Choice: ""I'm not in the mood for this"" or ""Can you give me a hard one?"" →Select ""Give me a hard one."""
    CH01|7th HEAVEN|ティファ|#N/A|「まってて。いまつくるから」|
    CH01|7th HEAVEN|INFO|#N/A|＜ティファ、すぐにつくり、クラウドにわたす＞|＜Tiffany, I'll make one right away and give it to Cloud.
    CH01|7th HEAVEN|ティファ|#N/A|「なんだか、ほっとしちゃった。クラウドが無事もどってきて」|
    CH01|7th HEAVEN|クラウド|#N/A|「急にどうした？ あのていどの仕事、なんでもないさ」|
    CH01|7th HEAVEN|ティファ|#N/A|「そうね……」|
    CH01|7th HEAVEN|ティファ|#N/A|「クラウド、ソルジャーになったんだもんね」|
    CH01|7th HEAVEN|ティファ|#N/A|「……今回の報酬なんだけど バレットからもらってね」|
    CH01|7th HEAVEN|クラウド|#N/A|「そうするよ。報酬をもらえば、また、お別れだな」|
    CH01|7th HEAVEN|ティファ|#N/A|「ねえ、クラウド。気分はどう？」|
    CH01|7th HEAVEN|クラウド|#N/A|「……ふつうさ。どうしてそんなことを聞く？」|
    CH01|7th HEAVEN|ティファ|#N/A|「ううん、なんでもない。ただ、つかれてないのかなって…」|
    CH01|7th HEAVEN|ジェシー|#N/A|「うかつ……」|
    CH01|7th HEAVEN|ジェシー|#N/A|「見てよ、このニュース……。こんなに爆発してる」|
    CH01|7th HEAVEN|ジェシー|#N/A|「やっぱり、私の爆弾のせい？ でも、このコンピュータの指示通り 作っただけなのに」|
    CH01|7th HEAVEN|ジェシー|#N/A|「やだ！ どっかで計算まちがったかしら」|
    CH01|7th HEAVEN|INFO|#N/A|＜テレビモニターから＞|<From TV monitor.
    CH01|7th HEAVEN|プレジデント神羅_TV|#N/A|「……壱番魔晄炉破壊事件に関して アバランチと名乗る組織から 犯行声明が出されています。|
    CH01|7th HEAVEN|プレジデント神羅_TV|#N/A|「声明によるとアバランチは 今後も同様のテロを続けることを 予告しております。|
    CH01|7th HEAVEN|プレジデント神羅_TV|#N/A|「しかし、ミッドガルの市民のみなさん 安心して下さい」|
    CH01|7th HEAVEN|プレジデント神羅_TV|#N/A|「我々神羅カンパニーはこのような暴力からみなさんを守るために ソルジャーの投入を決定しました。これで……」|
    CH01|7th HEAVEN|バレット|#N/A|「おい、クラウドさんよ。聞きたいことがあるんだ」|
    CH01|7th HEAVEN|バレット|#N/A|「きょう、オレたちが戦った相手に ソルジャーはいたのか？」|
    CH01|7th HEAVEN|クラウド|#N/A|「いや、いなかった。それは確実だ」|
    CH01|7th HEAVEN|バレット|#N/A|「ずいぶんと自信たっぷりじゃねえか」|
    CH01|7th HEAVEN|クラウド|#N/A|「もしソルジャーと戦っていたら あんたたちが生きてるはずないからな」|
    CH01|7th HEAVEN|バレット|#N/A|「自分が元ソルジャーだからって えらそうに言うんじゃねえよ！」|
    CH01|7th HEAVEN|クラウド|#N/A|「…………」|
    CH01|7th HEAVEN|バレット|#N/A|「確かにおまえは強い」|
    CH01|7th HEAVEN|バレット|#N/A|「おそらくソルジャーってのは みんな強いんだろうさ」|
    CH01|7th HEAVEN|バレット|#N/A|「でもな、おまえは 反乱組織アバランチにやとわれてる身だ。神羅のかたを持つんじゃねえ！」|
    CH01|7th HEAVEN|クラウド|#N/A|「神羅のかたをもつ？ 俺はあんたの質問に答えただけだ」|
    CH01|7th HEAVEN|クラウド|#N/A|「俺は上で待っている。報酬の話がしたい」|
    CH01|7th HEAVEN|バレット|#N/A|「チッ！！ ………………ほ、報酬かよ…」|
    CH01|7th HEAVEN|マリン|#N/A|「とうちゃ～ん かっこいい！」|
    CH01|7th HEAVEN|INFO|#N/A|＜ティファ、駆けつける＞|＜Tiffany, I'm on my way.
    CH01|7th HEAVEN|ティファ|#N/A|「待って、クラウド！」|
    CH01|7th HEAVEN|バレット|#N/A|「ティファ！ そんなヤツ放っておけ！」|
    CH01|7th HEAVEN|バレット|#N/A|「どうやら神羅に 未練タラタラらしいからな！」|
    CH01|7th HEAVEN|クラウド|#N/A|「だまれ！」|
    CH01|7th HEAVEN|クラウド|#N/A|「俺は神羅にもソルジャーにも 未練はない！」|
    CH01|7th HEAVEN|クラウド|#N/A|「でも、かんちがいするな！」|
    CH01|7th HEAVEN|クラウド|#N/A|「星の命も おまえたちアバランチの活動にも興味はない！」|
    CH01|7th HEAVEN|ティファ|#N/A|「クラウド、おねがい。力をかして」|
    CH01|7th HEAVEN|クラウド|#N/A|「ティファ……わるいけどさ」|
    CH01|7th HEAVEN|ティファ|#N/A|「星が病んでるの。このままじゃ死んじゃう」|
    CH01|7th HEAVEN|ティファ|#N/A|「誰かがなんとかしなくちゃならないの」|
    CH01|7th HEAVEN|クラウド|#N/A|「バレットたちがなんとかするんだろ？ 俺には関係ないさ」|
    CH01|7th HEAVEN|ティファ|#N/A|「あ～あ！ 本当に行っちゃうんだ！」|
    CH01|7th HEAVEN|ティファ|#N/A|「かわいい幼なじみのたのみも きかずに行っちゃうんだ！」|
    CH01|7th HEAVEN|クラウド|#N/A|「ん……？」|
    CH01|7th HEAVEN|INFO|#N/A|＜選択肢：「よくいうぜ！」or「……わるいな」→「……わるいな」を選択＞|"＜Choice: ""Well said!"" OR ""...... bad"" -> Select ""...... bad"" >"
    CH01|7th HEAVEN|ティファ|#N/A|「……約束も忘れちゃったんだ」|
    CH01|7th HEAVEN|クラウド|#N/A|「約束？」|
    CH01|7th HEAVEN|ティファ|#N/A|「やっぱり忘れてる」|
    CH01|7th HEAVEN|ティファ|#N/A|「思い出して……クラウド。あれは７年前よ……」|
    CH01|7th HEAVEN|ティファ|#N/A|「ほら、村の給水塔」|
    CH01|7th HEAVEN|ティファ|#N/A|「覚えてる？」|
    CH01|7th HEAVEN|クラウド|#N/A|「ああ……あの時か」|
    CH01|7th HEAVEN|クラウド|#N/A|「ティファ、なかなか来なくて ちょっと寒かったな」|
    CH01|NIBELHEIM_TOWER|INFO|#N/A|＜回想＞|<Recollection.
    CH01|NIBELHEIM_TOWER|ティファ_10|#N/A|「お・ま・た・せ」|
    CH01|NIBELHEIM_TOWER|INFO|#N/A|＜ティファ、クラウドの横に座る＞|<Tiffany, sitting next to Cloud>.
    CH01|NIBELHEIM_TOWER|ティファ_10|#N/A|「な～に？ 話があるって」|
    CH01|NIBELHEIM_TOWER|クラウド_10|#N/A|「俺……春になったら村を出て ミッドガルに行くよ」|
    CH01|NIBELHEIM_TOWER|ティファ_10|#N/A|「……男の子たちって み～んな村を出てっちゃうのね」|
    CH01|NIBELHEIM_TOWER|クラウド_10|#N/A|「俺はみんなとはちがう。ただ仕事をさがすだけじゃない」|
    CH01|NIBELHEIM_TOWER|クラウド_10|#N/A|「俺、ソルジャーになりたいんだ」|
    CH01|NIBELHEIM_TOWER|クラウド_10|#N/A|「セフィロスみたいな 最高のソルジャーに」|
    CH01|NIBELHEIM_TOWER|ティファ_10|#N/A|「セフィロス…… 英雄セフィロス、か」|
    CH01|NIBELHEIM_TOWER|ティファ_10|#N/A|「ソルジャーになるのって 難しいんでしょ？」|
    CH01|NIBELHEIM_TOWER|クラウド_10|#N/A|「……しばらくのあいだ 村にはもどれないな、きっと」|
    CH01|NIBELHEIM_TOWER|クラウド_10|#N/A|「……うん？」|
    CH01|NIBELHEIM_TOWER|ティファ_10|#N/A|「大活躍したら 新聞にものるかな？」|
    CH01|NIBELHEIM_TOWER|クラウド_10|#N/A|「がんばるよ」|
    CH01|NIBELHEIM_TOWER|ティファ_10|#N/A|「ね、約束しない？」|
    CH01|NIBELHEIM_TOWER|ティファ_10|#N/A|「あのね、クラウドが有名になって その時、私が困ってたら……」|
    CH01|NIBELHEIM_TOWER|ティファ_10|#N/A|「クラウド、私を助けに来てね」|
    CH01|NIBELHEIM_TOWER|クラウド_10|#N/A|「はぁ？」|
    CH01|NIBELHEIM_TOWER|ティファ_10|#N/A|「私がピンチのときに ヒーローがあらわれて助けてくれるの」|
    CH01|NIBELHEIM_TOWER|ティファ_10|#N/A|「一度くらいは経験したいじゃない？」|
    CH01|NIBELHEIM_TOWER|クラウド_10|#N/A|「はぁ？」|
    CH01|NIBELHEIM_TOWER|ティファ_10|#N/A|「いいじゃないのよ～！ 約束しなさい～！」|
    CH01|NIBELHEIM_TOWER|クラウド_10|#N/A|「わかった……約束するよ」|
    CH01|NIBELHEIM_TOWER|INFO|#N/A|＜回想終了＞|<End of recollection>.
    CH01|7th HEAVEN|クラウド|#N/A|「俺は英雄でも有名でもない。約束は……守れない」|
    CH01|7th HEAVEN|ティファ|#N/A|「でも子供のころの夢を実現したでしょ？ ちゃんとソルジャーになったんだもの」|
    CH01|7th HEAVEN|ティファ|#N/A|「だから、ねっ！ 今度こそ約束を……」|
    CH01|7th HEAVEN|INFO|#N/A|＜そこへバレットが来る＞|＜Then Barrett comes along.
    CH01|7th HEAVEN|バレット|#N/A|「おいちょっと待て！ ソルジャーさんよ」|
    CH01|7th HEAVEN|バレット|#N/A|「約束は約束だからな！ ほら、金だ！！」|
    CH01|7th HEAVEN|INFO|#N/A|＜バレットのへそくり1500ギルを受け取る＞|<Receiving 1500 gil from Barrett's navel.
    CH01|7th HEAVEN|クラウド|#N/A|「こんな、しけた報酬 じょうだんじゃないな」|
    CH01|7th HEAVEN|ティファ|#N/A|「え？それじゃ！！」|
    CH01|7th HEAVEN|クラウド|#N/A|「次のミッションはあるのか？ 倍額の3000でうけてやってもいい」|
    CH01|7th HEAVEN|バレット|#N/A|「なんだと！……！」|
    CH01|7th HEAVEN|ティファ|#N/A|「いいからいいから」|
    CH01|7th HEAVEN|ティファ|#N/A|「ヒソヒソ…… （人手に困ってるってのが本音でしょ？）」|
    CH01|7th HEAVEN|バレット|#N/A|「う……ぐぅ…… （残りのへそくりはマリンの学費だぞ……）」|
    CH01|7th HEAVEN|バレット|#N/A|「2000だ！」|
    CH01|7th HEAVEN|ティファ|#N/A|「ありがとう、クラウド」|
    CH01|7th HEAVEN|INFO|#N/A|＜翌朝＞|<The next morning>
    CH01|7th HEAVEN|ティファ|#N/A|「おはよ！　クラウド！」|
    CH01|7th HEAVEN|ティファ|#N/A|「よく、眠れた？」|
    CH01|7th HEAVEN|INFO|#N/A|＜選択肢：「バレットのイビキがうるさくて…」or「ティファがそばにいたから…」→「ティファがそばにいたから…」を選択＞|<Options: 'Barrett's snoring was too loud...' or 'Tifa was by my side...' -> Select 'Tifa was by my side...'
    CH01|7th HEAVEN|ティファ|#N/A|「それはどういう意味かしら？」|
    CH01|7th HEAVEN|ティファ|#N/A|「今回は私も行くね！」|
    CH01|7th HEAVEN|バレット|#N/A|「標的は【五番魔晄炉】だ。まず、駅に行く」|
    CH01|7th HEAVEN|バレット|#N/A|「くわしい作戦は列車の中でな」|
    CH01|7th HEAVEN|バレット|#N/A|「おう、クラウド！」|
    CH01|7th HEAVEN|バレット|#N/A|「作戦の前にひとつ おまえさんに聞きたいことがある！」|
    CH01|7th HEAVEN|バレット|#N/A|「じつはな…… オレはマテリアの使い方をよくしらねえ！」|
    CH01|7th HEAVEN|バレット|#N/A|「ひろったマテリアはおまえにくれてやる。だから、教えろ！」|
    CH01|7th HEAVEN|クラウド|#N/A|「さて……」|
    CH01|7th HEAVEN|INFO|#N/A|＜選択肢：「面倒だが説明しよう」or「面倒くさい……」→「面倒だが説明しよう」を選択＞|<Option: 'It's a hassle, but I'll explain' or 'It's a hassle ......' -> Select 'It's a hassle, but I'll explain' >.
    CH01|7th HEAVEN|INFO|#N/A|＜ここでメニュー画面が開かれ、チュートリアル形式でマテリアの使い方などが説明される＞|＜The menu screen opens here, explaining how to use materiel in a tutorial format.
    CH01|7th HEAVEN|バレット|#N/A|「ケッ！　なにが…… 『それほど、むずかしくはないだろう』だ！」|
    CH01|7th HEAVEN|バレット|#N/A|「ぜんぜんわかんねえ……」|
    CH01|7th HEAVEN|バレット|#N/A|「まあ、いいだろう。マテリアはおまえが管理しとけ！」|
    CH01|7th HEAVEN|ティファ|#N/A|「クラウド！ 武器屋２階のおじさんから伝言よ」|
    CH01|7th HEAVEN|ティファ|#N/A|「あげたいものがあるからお店によって ……だって。わすれないでね！」|
    CH01|7th HEAVEN|ティファ|#N/A|「マリン、お店たのむね！」|
    CH01|7th HEAVEN|マリン|#N/A|「うん！！ お仕事がんばってね」|
    CH01|MIDGAR TRAIN|INFO|#N/A|＜クラウド一行、列車に乗り込む＞|＜Cloud and his party board the train.
    CH01|MIDGAR TRAIN|バレット|#N/A|「おう！」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「こいつぁ、貸し切り列車じゃねえぞ！！ 散れ散れ！！」|
    CH01|MIDGAR TRAIN|神羅課長|#N/A|「また危ない人たちといっしょか。私もつくづく運がないな」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「んっ～！？」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「んんっ～！？」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「おいっ！！ ずいぶんすいてやがるな」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「どうなってる？」|
    CH01|MIDGAR TRAIN|神羅課長|#N/A|「ヒッ！！」|
    CH01|MIDGAR TRAIN|神羅課長|#N/A|「き、きみたちみたいなのがいるから す、すいてるんじゃないか…」|
    CH01|MIDGAR TRAIN|神羅課長|#N/A|「ヒ～～ッ！！」|
    CH01|MIDGAR TRAIN|神羅課長|#N/A|「ニュ、ニュースぐらい見てるだろ？ アバランチの爆弾テロ予告が あったんだ」|
    CH01|MIDGAR TRAIN|神羅課長|#N/A|「こんな日にミッドガルに出かけるのは サラリーマン神羅ぐらいさ」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「きっさま、神羅のもんか？」|
    CH01|MIDGAR TRAIN|神羅課長|#N/A|「わ、私は暴力にはくっしないぞ～。こ、この席だって、ゆずらない」|
    CH01|MIDGAR TRAIN|ティファ|#N/A|「バレット！！」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「チッ！！ あんた、ついてるぜ」|
    CH01|MIDGAR TRAIN|クラウド|#N/A|「さて、どうするんだ？」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「ケッ！ 落ちついた野郎だぜ！ こっちのペースがくるっちまう…」|
    CH01|MIDGAR TRAIN|INFO|#N/A|＜列車が突如音をたてて揺れる＞|<The train suddenly shuddered with a noise.
    CH01|MIDGAR TRAIN|ティファ|#N/A|「列車の接続がすんだみたい。出発するわ」|
    CH01|MIDGAR TRAIN|クラウド|#N/A|「今回の作戦について 聞かせてくれ」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「へッ！　仕事熱心だな。クラウドさんよ！」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「しかたねえ…… せ、説明してやるっ！」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「ジェシーから聞いただろうが 上のプレートとの境界には検問がある。列車ごとIDスキャンするシステムだ」|
    CH01|MIDGAR TRAIN|ティファ|#N/A|「神羅じまんのね」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「今までのニセのIDは もう使えねえ…」|
    CH01|MIDGAR TRAIN|アナウンス|#N/A|「本日も御乗車ありがとうございます～」|
    CH01|MIDGAR TRAIN|アナウンス|#N/A|「４番街ステーション到着予定時刻は」|
    CH01|MIDGAR TRAIN|アナウンス|#N/A|「ミッドガル時11時45分～」|
    CH01|MIDGAR TRAIN|ティファ|#N/A|「ID検知エリアまで あと３分ってところね」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「よし、あと３分たったら 列車から飛び降りる」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「いいな！」|
    CH01|MIDGAR TRAIN|ティファ|#N/A|「クラウド、こっち！ 路線図モニタでも見てよ」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「へッ！　元ソルジャーの物知りさんよ！ 五番魔晄炉のあたりは、くわしいんだろ！」|
    CH01|MIDGAR TRAIN|バレット|#N/A|「おまえさんの知ったかぶり説明が 聞きてえもんだな！」|
    CH01|MIDGAR TRAIN|神羅課長|#N/A|「ヒッ……！！」|
    CH01|MIDGAR TRAIN|神羅課長|#N/A|「わ、私にはかまわないでくれたまえ。（ヒッヒッ…… 会社のみんなにじまんしちゃおう…）」|
    CH01|MIDGAR TRAIN|ティファ|#N/A|「あら、もう何度も見たって顔してるのね」|
    CH01|MIDGAR TRAIN|ティファ|#N/A|「ま、いいわ。もっとそばにきて」|
    CH01|MIDGAR TRAIN RED ALARM|INFO|#N/A|＜そこへ、いきなりID検知エリア突入の警報がなる＞|＜Then, suddenly, there's an alarm that we're entering an ID detection area.
    CH01|MIDGAR TRAIN RED ALARM|ティファ|#N/A|「おかしいわね。ID検知エリアはもっと先なのに」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「Ａ式非常警戒体制を発動」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「列車内に未確認のIDを検知」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「各車両緊急チェックに入ります」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「くりかえします」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「Ａ式非常警戒体制を発動」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「列車内に未確認のIDを検知」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「各車両緊急チェックに入ります」|
    CH01|MIDGAR TRAIN RED ALARM|ティファ|#N/A|「どういうこと？」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「どうなってんだ！！」|
    CH01|MIDGAR TRAIN RED ALARM|INFO|#N/A|＜そこへ、慌ててジェシーが来る＞|＜Then comes Jesse in a hurry.
    CH01|MIDGAR TRAIN RED ALARM|ジェシー|#N/A|「まっずいことになっちゃったわ」|
    CH01|MIDGAR TRAIN RED ALARM|ジェシー|#N/A|「説明はあと。はやく！　こっちの車両に！」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「チッ！ しくじりやがったな…」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「いくぜ！ モタモタすんな！」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「車両１に未確認ID検知」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「警戒レベル１」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「車両１をロックします」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「車両１ロック完了」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「警戒レベル２に移行」|
    CH01|MIDGAR TRAIN RED ALARM|ビッグス|#N/A|「いそぐんだ！」|
    CH01|MIDGAR TRAIN RED ALARM|ウェッジ|#N/A|「扉ロックされるっす！」|
    CH01|MIDGAR TRAIN RED ALARM|ジェシー|#N/A|「とにかく、走って！」|
    CH01|MIDGAR TRAIN RED ALARM|ジェシー|#N/A|「作戦２にチェンジよ！」|
    CH01|MIDGAR TRAIN RED ALARM|サラリーマン|#N/A|「やぁ…… あんたたち、そうぞうしいねえ」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「車両２に未確認ID検知」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「ドアロック準備」|
    CH01|MIDGAR TRAIN RED ALARM|サラリーマン|#N/A|「まあまあ、おちついて」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「警戒レベル２」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「車両２をロックします」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「車両２ロック完了」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「警戒レベル３に移行」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「よし！！ ぬけたか！？」|
    CH01|MIDGAR TRAIN RED ALARM|ジェシー|#N/A|「まだよ、すぐ次の検知がはじまるわ。バレたらアウトよ！」|
    CH01|MIDGAR TRAIN RED ALARM|ジェシー|#N/A|「でも、心配しないで。前の車両に順々にうつっていけば やりすごせるわ！」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「未確認IDは列車前半部に移動中」|
    CH01|MIDGAR TRAIN RED ALARM|ギザギザ頭の男|#N/A|「ニヒニヒ！！」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「現在位置の再確認に入ります」|
    CH01|MIDGAR TRAIN RED ALARM|ギザギザ頭の男|#N/A|「シュタッ！！」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「警戒レベル３」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「車両３ロック完了」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「警戒レベル４に移行」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「車両４に未確認IDを検知」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「警戒レベル４」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「車両４をロックします」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「車両４ロック完了」|
    CH01|MIDGAR TRAIN RED ALARM|警報アナウンス|#N/A|「警戒レベルMAXに移行」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「よしっ！！ うまくいったな！」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「おう！！ こっちだ！！」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「いくぜ！！ こっからダイブだ！！」|
    CH01|MIDGAR TRAIN RED ALARM|ジェシー|#N/A|「私、ジェシーよ。どう、クラウド？」|
    CH01|MIDGAR TRAIN RED ALARM|ジェシー|#N/A|「神羅の制服、似合ってるかな」|
    CH01|MIDGAR TRAIN RED ALARM|INFO|#N/A|＜選択肢：「そうだな……」or「いまはそれどころじゃない」→「そうだな……」を選択＞|<Option: 'Yes, ......' or 'Now is not the time for this' -> Select 'Yes, ......' >.
    CH01|MIDGAR TRAIN RED ALARM|クラウド|#N/A|「……すてきだよ、男勝りで」|
    CH01|MIDGAR TRAIN RED ALARM|ジェシー|#N/A|「エッ！！ うれしいっ ……のかしら？」|
    CH01|MIDGAR TRAIN RED ALARM|ティファ|#N/A|「……こわいね」|
    CH01|MIDGAR TRAIN RED ALARM|クラウド|#N/A|「いまさらなんだよ。だいたい、どうして来たんだ？」|
    CH01|MIDGAR TRAIN RED ALARM|ティファ|#N/A|「だって……」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「おふたりさん 時間がないぞ！」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「おう！！ 時間がねえ！！」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「……なんとかしてやれ！」|
    CH01|MIDGAR TRAIN RED ALARM|ティファ|#N/A|「うん！！ 決めた！」|
    CH01|MIDGAR TRAIN RED ALARM|ティファ|#N/A|「よっく、見てて。私、飛ぶから！！」|
    CH01|MIDGAR TRAIN RED ALARM|INFO|#N/A|＜ティファ、飛び降りる＞|＜Tiffany, jump.
    CH01|MIDGAR TRAIN RED ALARM|クラウド|#N/A|「さきにいくが かまわないな？」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「リーダーは最後まで 残るもんだ」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「いいから、はやくいけ！」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「おう！ けがすんなよ！」|
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「作戦はこっからが 本番だぞ！」|
    CH01|MIDGAR TRAIN RED ALARM|INFO|#N/A|＜クラウド、飛び降りる＞|<Cloud jumps.
    CH01|MIDGAR TRAIN RED ALARM|バレット|#N/A|「じゃな！ あとしまつはたのんだっ！|
    CH01|MIDGAR TRAIN RED ALARM|INFO|#N/A|＜バレット、飛び降りる＞|
    CH01|MIGAR TRAIN TUNNEL|INFO|#N/A|＜螺旋トンネル＞|<Spiral tunnel>.
    CH01|MIGAR TRAIN TUNNEL|バレット|#N/A|「よし、ここまでは予定通りだ」|
    CH01|MIGAR TRAIN TUNNEL|バレット|#N/A|「しかし、五番魔晄炉にたどり着くまでは 油断は禁物だぜ」|
    CH01|MIGAR TRAIN TUNNEL|バレット|#N/A|「ビッグス、ウェッジ、ジェシーが先行している手はずになってる。行くぞ、おまえら」|
    CH01|MIGAR TRAIN TUNNEL|バレット|#N/A|「さぁて、五番魔晄炉は このトンネルの奥だ！」|
    CH01|MIGAR TRAIN TUNNEL|クラウド|#N/A|「この光の帯は、神羅の警報センサー。これ以上、奥には進めないな」|
    CH01|MIGAR TRAIN TUNNEL|クラウド|#N/A|「ここまで来て警報センサーの世話になるなんてのは、シロウトだけだ」|
    CH01|MIGAR TRAIN TUNNEL|バレット|#N/A|「か～っ、せまっちい穴だな。ここからプレートの下にもぐれってのか？ たまんねぇぜ」|
    CH01|MIGAR TRAIN TUNNEL|バレット|#N/A|「どうする、クラウドさんよぉ？」|
    CH01|MIGAR TRAIN TUNNEL|INFO|#N/A|＜選択肢：「中をよく見てみる」or「おりる」or「おりない」→「中をよく見てみる」を選択＞|<Options: 'take a closer look inside' or 'get off' or 'don't get off' -> select 'take a closer look inside' >.
    CH01|MIGAR TRAIN TUNNEL|ティファ|#N/A|「……ダクトの中に 足がかりになりそうなものはないわね」|
    CH01|MIGAR TRAIN TUNNEL|クラウド|#N/A|「ああ。このダクトをおりたら ここには、もどってこれないぞ」|
    CH01|MIGAR TRAIN TUNNEL|バレット|#N/A|「のんびりしてるヒマはないぜ。いつ神羅のやつらにおれたちの行動がばれないとも限らないからな」|
    CH01|MIGAR TRAIN TUNNEL|バレット|#N/A|「クラウド、行くしかないぜ」|
    CH01|MIGAR TRAIN TUNNEL|INFO|#N/A|＜選択肢：「おりる」or「おりない」→「おりる」を選択＞|＜Option: 'dismount' or 'do not dismount' >> Select 'dismount'.
    CH01|MIGAR TRAIN TUNNEL|バレット|#N/A|「でもよ、ゾッとしねぇな」|
    CH01|MIDGAR SECTOR 4 PLATE|INFO|#N/A|＜四番街プレート内部＞|<Inside the Fourth Avenue Plate>.
    CH01|MIDGAR SECTOR 4 PLATE|ジェシー|#N/A|「ごめんなさい」|
    CH01|MIDGAR SECTOR 4 PLATE|ジェシー|#N/A|「列車のIDスキャンのミス 私のせいなの」|
    CH01|MIDGAR SECTOR 4 PLATE|ジェシー|#N/A|「クラウドのIDカード。私の特別製にしたから…… あんなことに」|
    CH01|MIDGAR SECTOR 4 PLATE|ジェシー|#N/A|「心をこめたつもりだったんだけどね。失敗しちゃった」|
    CH01|MIDGAR SECTOR 4 PLATE|ジェシー|#N/A|「こんどはもっとましなもの プレゼントするわ」|
    CH01|MIDGAR SECTOR 4 PLATE|ジェシー|#N/A|「先にアジトに帰って研究開発に はげんでるからね」|
    CH01|SECTOR 4 REACTOR|INFO|#N/A|＜四番街プレート下部＞|<Lower part of the Fourth Avenue plate>.
    CH01|SECTOR 4 REACTOR|ビッグス|#N/A|「おれたちは、これで引き上げる。アジトで落ち合おうぜ」|
    CH01|SECTOR 4 REACTOR|ビッグス|#N/A|「クラウド、五番街魔晄炉の爆破 よろしくたのむぜ！」|
    CH01|SECTOR 4 REACTOR|INFO|#N/A|＜五番魔晄炉＞|＜Fifth munition reactor.
    CH01|SECTOR 4 REACTOR|INFO|#N/A|＜クラウド、頭を押さえ、うずくまる＞|
    CH01|NIBELHEIM REACTOR OLD|INFO|#N/A|＜回想＞|<Recollection.
    CH01|NIBELHEIM REACTOR OLD|INFO|#N/A|＜父親の亡骸を見てうずくまる15歳くらいのティファ＞|<Tifa, about 15 years old, cowering over her father's corpse>.
    CH01|NIBELHEIM REACTOR OLD|ティファ_15|#N/A|「パパ……」|
    CH01|NIBELHEIM REACTOR OLD|ティファ_15|#N/A|「セフィロスね！」|
    CH01|NIBELHEIM REACTOR OLD|ティファ_15|#N/A|「セフィロスがやったのね！」|
    CH01|NIBELHEIM REACTOR OLD|ティファ_15|#N/A|「セフィロス……ソルジャー…… 魔晄炉……神羅……ぜんぶ！」|
    CH01|NIBELHEIM REACTOR OLD|ティファ_15|#N/A|「ぜんぶ大キライ！」|
    CH01|NIBELHEIM REACTOR OLD|INFO|#N/A|＜ティファ、剣を持ち、奥へと進む＞|<Tifa, sword in hand, moves towards the back of the room.
    CH01|NIBELHEIM REACTOR OLD|INFO|#N/A|＜回想終了＞|<End of recollection>.
    CH01|SECTOR 4 REACTOR|バレット|#N/A|「おい、しっかりしてくれよ！」|
    CH01|SECTOR 4 REACTOR|ティファ|#N/A|「だいじょうぶ？」|
    CH01|SECTOR 4 REACTOR|クラウド|#N/A|「……ティファ」|
    CH01|SECTOR 4 REACTOR|ティファ|#N/A|「ん？」|
    CH01|SECTOR 4 REACTOR|クラウド|#N/A|「い……いや…… 気にするな。さあ、先を急ごう！」|
    CH01|SECTOR 4 REACTOR|ティファ|#N/A|「３人同時にボタンを押せって ジェシーが言ってたわ」|
    CH01|SECTOR 4 REACTOR|INFO|#N/A|＜同時押し失敗＞|<Simultaneous press failure>
    CH01|SECTOR 4 REACTOR|ティファ|#N/A|「失敗ね、もう一度」|
    CH01|SECTOR 4 WALKWAY|INFO|#N/A|＜成功。→扉が開く＞|<Success. →The door opens.
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「こっちだ！」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「神羅兵！？」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「くそっ！ どうなってんだ？」|
    CH01|SECTOR 4 WALKWAY|クラウド|#N/A|「……ワナ、か」|
    CH01|SECTOR 4 WALKWAY|INFO|#N/A|＜そこで、プレジデント神羅、登場＞|＜And that's where President Shinra comes in.
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「プ、プレジデント神羅？」|
    CH01|SECTOR 4 WALKWAY|ティファ|#N/A|「なぜ、プレジデントが ここにいるの？」|
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「ほほう。君たちがアレかね。……なんて言ったかな？」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「アバランチだ！　覚えておけ！ おまえはプレジデント神羅だな」|
    CH01|SECTOR 4 WALKWAY|クラウド|#N/A|「ひさしぶりだな、プレジデント」|
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「……ひさしぶり？ ああ、君がアレかね」|
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「アバランチとやらに参加しているという元ソルジャー。たしかにその目の輝きは 魔晄を浴びた者……」|
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「その裏切り者の名前は なんといったかな？」|
    CH01|SECTOR 4 WALKWAY|クラウド|#N/A|「クラウド、だ」|
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「すまないがソルジャーの名前なんて いちいち覚えとらんのでな」|
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「せめてセフィロスぐらいには なってもらわんと」|
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「そう、セフィロス……。優秀なソルジャーであった。そう、優秀すぎる……な」|
    CH01|SECTOR 4 WALKWAY|クラウド|#N/A|「セフィロスだと……？」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「んなこたぁ、どうでもいい！ もうすぐここはドッカン！！だぜ！ ざまあみあがれ！」|
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「そうだな。キミたちウジ虫を始末するには 高価すぎる花火ではあるが……」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「ウジ虫だと！？ 言うに事欠いて、ウジ虫だと！」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「キサマら神羅は、この星を死に追いやろうとする寄生虫じゃねェか！ その親玉であるキサマが 何をえらそうにホザく！」|
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「……そろそろキミたちの相手をするのにもあきたよ」|
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「わしは多忙な男なのでな。もう、失礼させてもらうか。今日は、会食の予定があるものでな」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「会食だと！？　ふざけやがって！ おまえには言いたいことが まだまだあるんだ！」|
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「キミたちの遊び相手は 別に用意させてもらった」|
    CH01|SECTOR 4 WALKWAY|ティファ|#N/A|「！？　何の音？」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「な、なんだコイツは！！」|
    CH01|SECTOR 4 WALKWAY|INFO|#N/A|＜エアバスター、現る＞|＜'Air Buster, here we come'.
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「我が社の兵器開発部が試行した機動兵『エアバスター』だ」|
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「君たちとの戦闘データは 今後の開発の貴重なサンプルとして利用させてもらうよ」|
    CH01|SECTOR 4 WALKWAY|クラウド|#N/A|「……機動兵？」|
    CH01|SECTOR 4 WALKWAY|プレジデント神羅|#N/A|「では、失礼」|
    CH01|SECTOR 4 WALKWAY|INFO|#N/A|＜プレジデント神羅、やってきたヘリコプターに乗り込んで、さっそうと去る＞|＜President Shinra gets into a helicopter that comes along and quickly leaves.
    CH01|SECTOR 4 WALKWAY|クラウド|#N/A|「待て、プレジデント！」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「おい、クラウド！ とりあえずコイツをなんとかするぞ！」|
    CH01|SECTOR 4 WALKWAY|ティファ|#N/A|「助けて、クラウド！」|
    CH01|SECTOR 4 WALKWAY|ティファ|#N/A|「これ、ソルジャーなの？」|
    CH01|SECTOR 4 WALKWAY|クラウド|#N/A|「まさか！　ただの機械さ」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「なんでもいい！ ぶっこわしてやるぜ！」|
    CH01|SECTOR 4 WALKWAY|INFO|#N/A|＜戦闘：エアバスター＞|<Combat: air buster>.
    CH01|SECTOR 4 WALKWAY|INFO|#N/A|＜エアバスターを撃破＞|<Defeat the airbuster>.
    CH01|SECTOR 4 WALKWAY|INFO|#N/A|＜戦闘終了＞|<End of combat>.
    CH01|SECTOR 4 WALKWAY|INFO|#N/A|＜エアバスターの爆発とともに路面が破壊され、クラウドが落ちそうになる＞|＜エアバスターの爆発とともに路面が破壊され、クラウドが落ちそうになる＞
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「もうすぐ爆発する！ 行くぞ、ティファ！」|
    CH01|SECTOR 4 WALKWAY|ティファ|#N/A|「バレット！ 何とかならないの？」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「どうしようもねえな」|
    CH01|SECTOR 4 WALKWAY|ティファ|#N/A|「クラウド！ なんとかして生きて！　死んじゃダメ！ 話したいことたくさんあるの！」|
    CH01|SECTOR 4 WALKWAY|クラウド|#N/A|「わかってる、ティファ」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「おい、なんとかなりそうか？」|
    CH01|SECTOR 4 WALKWAY|INFO|#N/A|＜選択肢：（つよがる）or（ダメかもしれない……）→（つよがる）を選択＞|<Option: (Stronger) or (May not work. ......) -> Select (Stronger) >.
    CH01|SECTOR 4 WALKWAY|クラウド|#N/A|「…………」|
    CH01|SECTOR 4 WALKWAY|クラウド|#N/A|「自分の心配でもしてろ！ 俺はいいからティファを！」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「……そうか。いろいろ悪かったな」|
    CH01|SECTOR 4 WALKWAY|クラウド|#N/A|「これで終わりみたいな言いかたは やめてくれ！」|
    CH01|SECTOR 4 WALKWAY|バレット|#N/A|「じゃ、あとでな」|
    CH01|SECTOR 4 WALKWAY|INFO|#N/A|＜そしてクラウド、落っこちる＞|＜And then the cloud falls.`
    const json = [];

    const csv = toParse.split('\n');
    csv.forEach(line => {
        line = line.split('|');
        const dialogue = {
            chapter: line[0].trim(),
            location: line[1],
            character: line[2],
            dialogue: line[4].slice(1, -1),
            translation: line[5]
        }
        json.push(dialogue);
    });
    return json;
}