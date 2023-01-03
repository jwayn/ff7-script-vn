const characters = {
    "バレット": "BARRET",
    "ビッグス": "BIGGS",
    "クラウド": "CLOUD",
    "クラウド_10": "CLOUD AGE 15 NIBELHEIM",
    "車掌": "CONDUCTOR",
    "花売り": "FLOWER GIRL AERITH",
    "ジェシー": "JESSIE",
    "マリン": "MARLENE",
    "プレジデント神羅": "PRESIDENT SHINRA",
    "プレジデント神羅_TV": "PRESIDENT SHINRA TV",
    "神羅課長": "SHINRA MIDDLE MANAGER",
    "HOLD": "SPIKY HAIR GUY",
    "ティファ": "TIFA",
    "ティファ_10": "TIFA AGE 15 NIBELHEIM",
    "ティファ_15": "TIFA REACTOR",
    "ウェッジ": "WEDGE",
}

export default function(characterName) {
    if (characterName in characters) {
        return `src/assets/characters/${characters[characterName]}.png`;
    }
};