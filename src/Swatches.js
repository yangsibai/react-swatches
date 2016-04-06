'use strict';

import {Component} from 'react';

import styles from './style.css';

class Swatches extends Component {
    constructor() {
        super();
        this.state = {
            scheme: 'default',
            colors: [
                '牡丹,BOTAN,#C1328E',
                '赤朽葉,AKAKUCHIBA,#C78550',
                '礪茶,TONOCHA,#985F2A',
                '洗柿,ARAIGAKI,#E79460',
                '黄櫨染,KOHROZEN,#7D532C',
                '胡桃,KURUMI,#947A6D',
                '代赭,TAISYA,#A36336',
                '樺,KABA,#C1693C',
                '深支子,KOKIKUCHINASHI,#FB9966',
                '宍,SHISHI,#F0A986',
                '宗伝唐茶,SODENKARACHA,#A0674B',
                '花浅葱,HANAASAGI,#1E88A8',
                '苔,KOKE,#838A2D',
                '鉛,NAMARI,#787878',
                '銀鼠,GINNEZUMI,#91989F',
                '梅幸茶,BAIKOCHA,#89916B',
                '鉄紺,TETSUKON,#261E47',
                '白鼠,SHIRONEZUMI,#BDC0BA',
                '藤煤竹,FUJISUSUTAKE,#574C57',
                '深緋,KOKIAKE,#86473F',
                '長春,CYOHSYUN,#BF6766',
                '白練,SHIRONERI,#FCFAF2',
                '紅藤,BENIFUJI,#B481BB',
                '梅鼠,UMENEZUMI,#9E7A7A',
                '桜,SAKURA,#FEDFE1',
                '中紅,NAKABENI,#DB4D6D',
                '今様,IMAYOH,#D05A6E',
                '鴇,TOKI,#EEA9A9',
                '紅,KURENAI,#CB1B45',
                '燕脂,ENJI,#9F353A',
                '韓紅花,KARAKURENAI,#D0104C',
                '琥珀,KOHAKU,#CA7A2C',
                '憲法染,KENPOHZOME,#43341B',
                '梅染,UMEZOME,#E9A368',
                '紅鬱金,BENIUKON,#E98B2A',
                '丁子茶,CHOJICHA,#96632E',
                '枇杷茶,BIWACHA,#B17844',
                '煎茶,SENCHA,#855B32',
                '赤白橡,AKASHIROTSURUBAMI,#E1A679',
                '洒落柿,SHAREGAKI,#FFBA84',
                '萱草,KANZO,#FC9F4D',
                '消炭,KESHIZUMI,#434343',
                '深川鼠,FUKAGAWANEZUMI,#77969A',
                '錆浅葱,SABIASAGI,#6699A1',
                '水,MIZU,#81C7D4',
                '浅葱,ASAGI,#33A6B8',
                '高麗納戸,KORAINANDO,#305A56',
                '白群,BYAKUGUN,#78C2C4',
                '御召茶,OMESHICHA,#376B6D',
                '瓶覗,KAMENOZOKI,#A5DEE4',
                '御納戸,ONANDO,#0C4842',
                '藍,AI,#0D5661',
                '江戸茶,EDOCHA,#AF5F3C',
                '洗朱,ARAISYU,#FB966E',
                '灰汁,AKU,#877F6C',
                '利休茶,RIKYUCHA,#897D55',
                '肥後煤竹,HIGOSUSUTAKE,#8D742A',
                '利休白茶,RIKYUSHIRACHA,#B4A582',
                '鬱金,UKON,#EFBB24',
                '芥子,KARASHI,#CAAD5F',
                '檜皮,HIWADA,#854836',
                '柿渋,KAKISHIBU,#A35E47',
                '緋,AKE,#CC543A',
                '鳶,TOBI,#724832',
                '紅緋,BENIHI,#F75C2F',
                '栗皮茶,KURIKAWACHA,#6A4028',
                '弁柄,BENGARA,#9A5034',
                '照柿,TERIGAKI,#C46243',
                '御召御納戸,OMESHIONANDO,#2E5C6E',
                '菖蒲,AYAME,#6F3381',
                '胡粉,GOFUN,#FFFFFB',
                '紫,MURASAKI,#592C63',
                '躑躅,TSUTSUJI,#E03C8A',
                '藤鼠,FUJINEZUMI,#6E75A4',
                '緑青,ROKUSYOH,#24936E',
                '沈香茶,TONOCHA2,#4F726C',
                '藍海松茶,AIMIRUCHA,#0F4C3A',
                '虫襖,MUSHIAO,#20604F',
                'ビロード,VELUDO,#096148',
                '常磐,TOKIWA,#1B813E',
                '鉄,TETSU,#26453D',
                '青磁,SEIJI,#69B0AC',
                '青緑,AOMIDORI,#00AA90',
                '錆鉄御納戸,SABITETSUONANDO,#405B55',
                '青碧,SEIHEKI,#268785',
                '苗,NAE,#86C166',
                '鳥の子,TORINOKO,#DAC9A6',
                '生壁,NAMAKABE,#7D6C46',
                '黄朽葉,KIKUCHIBA,#D9AB42',
                '浅黄,USUKI,#FAD689',
                '黄橡,KITSURUBAMI,#BA9132',
                '白橡,SHIROTSURUBAMI,#DCB879',
                '花葉,HANABA,#F7C242',
                '玉蜀黍,TAMAMOROKOSHI,#E8B647',
                '紫紺,SHIKON,#3C2F41',
                '滅紫,MESSHI,#533D5B',
                '菫,SUMIRE,#66327C',
                '深紫,KOKIMURASAKI,#4A225D',
                '籐黄,TOHOH,#FFC408',
                '梔子,KUCHINASHI,#F6C555',
                '半,HASHITA,#986DB2',
                '紫苑,SHION,#8F77B5',
                '柳鼠,YANAGINEZUMI,#808F7C',
                '紫鳶,MURASAKITOBI,#60373E',
                '薄,USU,#B28FCE',
                '水浅葱,MIZUASAGI,#66BAB7',
                '御納戸茶,ONANDOCHA,#465D4C',
                '瑠璃紺,RURIKON,#0B346E',
                '紅碧,BENIMIDORI,#7B90D2',
                '褐,KACHI,#08192D',
                '瑠璃,RURI,#005CAF',
                '黒橡,KUROTSURUBAMI,#0B1013',
                '紺,KON,#0F2540',
                '群青,GUNJYO,#51A8DD',
                '露草,TSUYUKUSA,#2EA9DF',
                '縹,HANADA,#006284',
                '勿忘草,WASURENAGUSA,#7DB9DE',
                '柳茶,YANAGICHA,#939650',
                '路考茶,ROKOHCHA,#74673E',
                '麹塵,KIKUJIN,#B1B479',
                '璃寛茶,RIKANCHA,#616138',
                '藍媚茶,AIKOBICHA,#4B4E2A',
                '海松,MIRU,#5B622E',
                '千歳茶,SENSAICHA,#4D5139',
                '菜種油,NATANEYU,#A28C37',
                '鶸萌黄,HIWAMOEGI,#90B44B',
                '柳染,YANAGIZOME,#91AD70',
                '江戸紫,EDOMURASAKI,#77428D',
                '茄子紺,NASUKON,#572A3F',
                '葡萄鼠,BUDOHNEZUMI,#5E3D50',
                '錆青磁,SABISEIJI,#86A697',
                '杜若,KAKITSUBATA,#622954',
                '蒲葡,EBIZOME,#6D2E5B',
                '青竹,AOTAKE,#00896C',
                '鳩羽鼠,HATOBANEZUMI,#72636E',
                '似紫,NISEMURASAKI,#562E37',
                '檳榔子染,BINROJIZOME,#3A3226',
                '藤紫,FUJIMURASAKI,#8A6BBE',
                '呂,RO,#0C0C0C',
                '桔梗,KIKYO,#6A4C9C',
                '焦茶,KOGECHA,#563F2E',
                '樺茶,KABACHA,#B35C37',
                '遠州茶,ENSYUCHA,#CA7853',
                '纁,SOHI,#ED784A',
                '黄丹,OHNI,#F05E1C',
                'ときがら茶,TOKIGARACHA,#DB8E71',
                '唐茶,KARACHA,#B47157',
                '百塩茶,MOMOSHIOCHA,#724938',
                '舛花,MASUHANA,#577C8A',
                '藍鼠,AINEZUMI,#566C73',
                '熨斗目花,NOSHIMEHANA,#2B5F75',
                '空,SORA,#58B2DC',
                '錆御納戸,SABIONANDO,#336774',
                '新橋,SHINBASHI,#0089A7',
                '雀茶,SUZUMECHA,#8F5A3C',
                '赤香,AKAKOH,#E3916E',
                '藤,FUJI,#8B81C3',
                '鶯,UGUISU,#6C6A2D',
                '鶸,HIWA,#BEC23F',
                '鶸茶,HIWACHA,#A5A051',
                '女郎花,OMINAESHI,#DDD23B',
                '青朽葉,AOKUCHIBA,#ADA142',
                '蒸栗,MUSHIKURI,#D9CD90',
                '黄蘗,KIHADA,#FBE251',
                '菜の花,NANOHANA,#F7D94C',
                '刈安,KARIYASU,#E9CD4C',
                '海松茶,MIRUCHA,#62592C',
                '鶯茶,UGUISUCHA,#6C6024',
                '萌黄,MOEGI,#7BA23F',
                '二藍,FUTAAI,#70649A',
                '黄海松茶,KIMIRUCHA,#867835',
                '小豆,AZUKI,#954A45',
                '蘇芳香,SUOHKOH,#A96360',
                '桜鼠,SAKURANEZUMI,#B19693',
                '甚三紅,JINZAMOMI,#EB7A77',
                '灰桜,HAIZAKURA,#D7C4BB',
                '栗梅,KURIUME,#904840',
                '赤紅,AKABENI,#CB4042',
                '真朱,SHINSYU,#AB3B3A',
                '楝,OUCHI,#9B90C2',
                '海老茶,EBICHA,#734338',
                '銀朱,GINSYU,#C73E3A',
                '朽葉,KUCHIBA,#E2943B',
                '金茶,KINCHA,#C7802D',
                '狐,KITSUNE,#9B6E23',
                '煤竹,SUSUTAKE,#6E552F',
                '薄柿,USUGAKI,#ECB88A',
                '伽羅,KYARA,#78552B',
                '丁子染,CHOJIZOME,#B07736',
                '柴染,FUSHIZOME,#967249',
                '緑,MIDORI,#227D51',
                '白緑,BYAKUROKU,#A8D8B9',
                '若竹,WAKATAKE,#5DAC81',
                '千歳緑,CHITOSEMIDORI,#36563C',
                '薄香,USUKOH,#EBB471',
                '砥粉,TONOKO,#D7B98E',
                '老竹,OITAKE,#6A8372',
                '木賊,TOKUSA,#2D6D4B',
                '紺桔梗,KONKIKYO,#211E55',
                '黒紅,KUROBENI,#3F2B36',
                '青鈍,AONIBI,#535953',
                '梅紫,UMEMURASAKI,#A8497A',
                '紅鳶,BENITOBI,#994639',
                '黒鳶,KUROTOBI,#554236',
                '紅樺,BENIKABA,#B54434',
                '曙,AKEBONO,#F19483',
                '珊瑚朱,SANGOSYU,#F17C67',
                '水がき,MIZUGAKI,#B9887D',
                '猩猩緋,SYOJYOHI,#E83015',
                '紅檜皮,BENIHIWADA,#884C3A',
                '芝翫茶,SHIKANCHA,#B55D4C',
                '鉛丹,ENTAN,#D75455',
                '素鼠,SUNEZUMI,#787D7B',
                '灰,HAI,#828282',
                '媚茶,KOBICHA,#876633',
                '白茶,SHIRACHA,#BC9F77',
                '黄土,OHDO,#B68E55',
                '銀煤竹,GINSUSUTAKE,#82663A',
                '櫨染,HAJIZOME,#DDA52D',
                '山吹茶,YAMABUKICHA,#D19826',
                '山吹,YAMABUKI,#FFB11B',
                '黄唐茶,KIGARACHA,#C18A26',
                '岩井茶,IWAICHA,#646A58',
                '裏柳,URAYANAGI,#B5CAA0',
                '玉子,TAMAGO,#F9BF45',
                '桑茶,KUWACHA,#C99833',
                '松葉,MATSUBA,#42602D',
                '柳煤竹,YANAGISUSUTAKE,#4A593D',
                '薄青,USUAO,#91B493',
                '青丹,AONI,#516E41',
                '紺青,KONJYO,#113285',
                '墨,SUMI,#1C1C1C',
                '鉄御納戸,TETSUONANDO,#255359',
                '黒,KURO,#080808',
                '紅掛花,BENIKAKEHANA,#4E4F97',
                '溝鼠,DOBUNEZUMI,#4F4F48',
                '利休鼠,RIKYUNEZUMI,#707C74',
                '鈍,NIBI,#656765',
                '苺,ICHIGO,#B5495B',
                '薄紅,USUBENI,#E87A90',
                '紅消鼠,BENIKESHINEZUMI,#52433D',
                '藍墨茶,AISUMICHA,#373C38',
                '退紅,TAIKOH,#F8C3CD',
                '一斥染,IKKONZOME,#F4A7B9',
                '桑染,KUWAZOME,#64363C',
                '桃,MOMO,#F596AA',
                '千草,CHIGUSA,#3A8FB7',
                '撫子,NADESHIKO,#DC9FB4',
                '紅梅,KOHBAI,#E16B8C',
                '蘇芳,SUOH,#8E354A'
            ]
        };
        this._handleColorClick = this._handleColorClick.bind(this);
    }

    render() {
        var colorInfo;
        return (
            <div className={styles.swatches}>
                <ul>
                    {
                        this.state.colors.map((color)=> {
                            colorInfo = color.split(',');
                            return (
                                <li
                                style={{background: colorInfo[2]}}
                                key={colorInfo[1]}
                                title={colorInfo[0] + ',' + colorInfo[1]}
                                data-color={colorInfo[2]}
                                onClick={this._handleColorClick}></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
    _handleColorClick(e) {
        this.props.onSelectColor(e.target.dataset.color);
    }
}

Swatches.propTypes = {
    onSelectColor: React.PropTypes.func.isRequired
};

export default Swatches;
