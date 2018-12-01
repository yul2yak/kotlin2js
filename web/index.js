(function (_, Kotlin) {
  'use strict';
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  PrimaryStat.prototype = Object.create(Enum.prototype);
  PrimaryStat.prototype.constructor = PrimaryStat;
  Team.prototype = Object.create(Enum.prototype);
  Team.prototype.constructor = Team;
  Champion.prototype = Object.create(Enum.prototype);
  Champion.prototype.constructor = Champion;
  Result.prototype = Object.create(Enum.prototype);
  Result.prototype.constructor = Result;
  Html.prototype = Object.create(Tag.prototype);
  Html.prototype.constructor = Html;
  Table.prototype = Object.create(Tag.prototype);
  Table.prototype.constructor = Table;
  Center.prototype = Object.create(Tag.prototype);
  Center.prototype.constructor = Center;
  TR.prototype = Object.create(Tag.prototype);
  TR.prototype.constructor = TR;
  TD.prototype = Object.create(Tag.prototype);
  TD.prototype.constructor = TD;
  Text.prototype = Object.create(Tag.prototype);
  Text.prototype.constructor = Text;
  function PrimaryStat(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PrimaryStat_initFields() {
    PrimaryStat_initFields = function () {
    };
    PrimaryStat$STRENGTH_instance = new PrimaryStat('STRENGTH', 0);
    PrimaryStat$AGILITY_instance = new PrimaryStat('AGILITY', 1);
    PrimaryStat$INTELLECT_instance = new PrimaryStat('INTELLECT', 2);
  }
  var PrimaryStat$STRENGTH_instance;
  function PrimaryStat$STRENGTH_getInstance() {
    PrimaryStat_initFields();
    return PrimaryStat$STRENGTH_instance;
  }
  var PrimaryStat$AGILITY_instance;
  function PrimaryStat$AGILITY_getInstance() {
    PrimaryStat_initFields();
    return PrimaryStat$AGILITY_instance;
  }
  var PrimaryStat$INTELLECT_instance;
  function PrimaryStat$INTELLECT_getInstance() {
    PrimaryStat_initFields();
    return PrimaryStat$INTELLECT_instance;
  }
  PrimaryStat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PrimaryStat',
    interfaces: [Enum]
  };
  function PrimaryStat$values() {
    return [PrimaryStat$STRENGTH_getInstance(), PrimaryStat$AGILITY_getInstance(), PrimaryStat$INTELLECT_getInstance()];
  }
  PrimaryStat.values = PrimaryStat$values;
  function PrimaryStat$valueOf(name) {
    switch (name) {
      case 'STRENGTH':
        return PrimaryStat$STRENGTH_getInstance();
      case 'AGILITY':
        return PrimaryStat$AGILITY_getInstance();
      case 'INTELLECT':
        return PrimaryStat$INTELLECT_getInstance();
      default:throwISE('No enum constant main.kotlin.htmlBuilder.PrimaryStat.' + name);
    }
  }
  PrimaryStat.valueOf_61zpoe$ = PrimaryStat$valueOf;
  function Team(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Team_initFields() {
    Team_initFields = function () {
    };
    Team$SCOURGE_instance = new Team('SCOURGE', 0);
    Team$SENTINEL_instance = new Team('SENTINEL', 1);
  }
  var Team$SCOURGE_instance;
  function Team$SCOURGE_getInstance() {
    Team_initFields();
    return Team$SCOURGE_instance;
  }
  var Team$SENTINEL_instance;
  function Team$SENTINEL_getInstance() {
    Team_initFields();
    return Team$SENTINEL_instance;
  }
  Team.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Team',
    interfaces: [Enum]
  };
  function Team$values() {
    return [Team$SCOURGE_getInstance(), Team$SENTINEL_getInstance()];
  }
  Team.values = Team$values;
  function Team$valueOf(name) {
    switch (name) {
      case 'SCOURGE':
        return Team$SCOURGE_getInstance();
      case 'SENTINEL':
        return Team$SENTINEL_getInstance();
      default:throwISE('No enum constant main.kotlin.htmlBuilder.Team.' + name);
    }
  }
  Team.valueOf_61zpoe$ = Team$valueOf;
  function Champion(name, ordinal, team, type) {
    Enum.call(this);
    this.team = team;
    this.type = type;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Champion_initFields() {
    Champion_initFields = function () {
    };
    Champion$챈_instance = new Champion('\uCC48', 0, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$스톤콜드_instance = new Champion('\uC2A4\uD1A4\uCF5C\uB4DC', 1, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$MURADIN_instance = new Champion('MURADIN', 2, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$CAIRENHOOF_instance = new Champion('CAIRENHOOF', 3, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$ARTHAS_instance = new Champion('ARTHAS', 4, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$TALON_instance = new Champion('TALON', 5, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$갈리토스_instance = new Champion('\uAC08\uB9AC\uD1A0\uC2A4', 6, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$NIFFY_instance = new Champion('NIFFY', 7, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$SEDRIC_instance = new Champion('SEDRIC', 8, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$GREME_instance = new Champion('GREME', 9, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$PARTHENON_instance = new Champion('PARTHENON', 10, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$UTHOR_instance = new Champion('UTHOR', 11, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$SPARROW_instance = new Champion('SPARROW', 12, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$DARAE_instance = new Champion('DARAE', 13, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$AGAMEMNON_instance = new Champion('AGAMEMNON', 14, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$BLOODYPHANTOM_instance = new Champion('BLOODYPHANTOM', 15, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$NAISHA_instance = new Champion('NAISHA', 16, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$MAJENDA_instance = new Champion('MAJENDA', 17, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$실크_instance = new Champion('\uC2E4\uD06C', 18, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$ZERDIN_instance = new Champion('ZERDIN', 19, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$TYRANDE_instance = new Champion('TYRANDE', 20, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$GARAE_instance = new Champion('GARAE', 21, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$SHAKAZAN_instance = new Champion('SHAKAZAN', 22, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$NARAE_instance = new Champion('NARAE', 23, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$IREAH_instance = new Champion('IREAH', 24, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$ROKHAN_instance = new Champion('ROKHAN', 25, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$FRODE_instance = new Champion('FRODE', 26, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$FURION_instance = new Champion('FURION', 27, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$ZYROSE_instance = new Champion('ZYROSE', 28, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$ELDIN_instance = new Champion('ELDIN', 29, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$나즈그렐_instance = new Champion('\uB098\uC988\uADF8\uB810', 30, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$PERDA_instance = new Champion('PERDA', 31, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$MELSHID_instance = new Champion('MELSHID', 32, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$MANUTE_instance = new Champion('MANUTE', 33, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$VOLZINE_instance = new Champion('VOLZINE', 34, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$SATYR_instance = new Champion('SATYR', 35, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$KANJEL_instance = new Champion('KANJEL', 36, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$GURR_instance = new Champion('GURR', 37, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$BROKHEN_instance = new Champion('BROKHEN', 38, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$ALIEN_instance = new Champion('ALIEN', 39, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$MUTANT_instance = new Champion('MUTANT', 40, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$MYRMIDON_instance = new Champion('MYRMIDON', 41, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$GROMHELLSCREAM_instance = new Champion('GROMHELLSCREAM', 42, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$KINGJOE_instance = new Champion('KINGJOE', 43, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$스벤_instance = new Champion('\uC2A4\uBCA4', 44, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$BUTCHER_instance = new Champion('BUTCHER', 45, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$KARUS_instance = new Champion('KARUS', 46, Team$SENTINEL_getInstance(), PrimaryStat$STRENGTH_getInstance());
    Champion$AGNI_instance = new Champion('AGNI', 47, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$VIPER_instance = new Champion('VIPER', 48, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$LEOPARD_instance = new Champion('LEOPARD', 49, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$ILLIDAN_instance = new Champion('ILLIDAN', 50, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$RAIDEN_instance = new Champion('RAIDEN', 51, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$AKASHA_instance = new Champion('AKASHA', 52, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$LEONIC_instance = new Champion('LEONIC', 53, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$SYLVANAS_instance = new Champion('SYLVANAS', 54, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$LYKIAN_instance = new Champion('LYKIAN', 55, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$ROZAMIER_instance = new Champion('ROZAMIER', 56, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$ARCRULA_instance = new Champion('ARCRULA', 57, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$JULMARAN_instance = new Champion('JULMARAN', 58, Team$SENTINEL_getInstance(), PrimaryStat$AGILITY_getInstance());
    Champion$NIVHAS_instance = new Champion('NIVHAS', 59, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$LADYDEATH_instance = new Champion('LADYDEATH', 60, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$LUCIFER_instance = new Champion('LUCIFER', 61, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$MEDUSA_instance = new Champion('MEDUSA', 62, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$OBLI_instance = new Champion('OBLI', 63, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$KELZHAD_instance = new Champion('KELZHAD', 64, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$AKIRO_instance = new Champion('AKIRO', 65, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$AKDONG_instance = new Champion('AKDONG', 66, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$PLUTO_instance = new Champion('PLUTO', 67, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$NAKACHA_instance = new Champion('NAKACHA', 68, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
    Champion$KALINAS_instance = new Champion('KALINAS', 69, Team$SENTINEL_getInstance(), PrimaryStat$INTELLECT_getInstance());
  }
  var Champion$챈_instance;
  function Champion$챈_getInstance() {
    Champion_initFields();
    return Champion$챈_instance;
  }
  var Champion$스톤콜드_instance;
  function Champion$스톤콜드_getInstance() {
    Champion_initFields();
    return Champion$스톤콜드_instance;
  }
  var Champion$MURADIN_instance;
  function Champion$MURADIN_getInstance() {
    Champion_initFields();
    return Champion$MURADIN_instance;
  }
  var Champion$CAIRENHOOF_instance;
  function Champion$CAIRENHOOF_getInstance() {
    Champion_initFields();
    return Champion$CAIRENHOOF_instance;
  }
  var Champion$ARTHAS_instance;
  function Champion$ARTHAS_getInstance() {
    Champion_initFields();
    return Champion$ARTHAS_instance;
  }
  var Champion$TALON_instance;
  function Champion$TALON_getInstance() {
    Champion_initFields();
    return Champion$TALON_instance;
  }
  var Champion$갈리토스_instance;
  function Champion$갈리토스_getInstance() {
    Champion_initFields();
    return Champion$갈리토스_instance;
  }
  var Champion$NIFFY_instance;
  function Champion$NIFFY_getInstance() {
    Champion_initFields();
    return Champion$NIFFY_instance;
  }
  var Champion$SEDRIC_instance;
  function Champion$SEDRIC_getInstance() {
    Champion_initFields();
    return Champion$SEDRIC_instance;
  }
  var Champion$GREME_instance;
  function Champion$GREME_getInstance() {
    Champion_initFields();
    return Champion$GREME_instance;
  }
  var Champion$PARTHENON_instance;
  function Champion$PARTHENON_getInstance() {
    Champion_initFields();
    return Champion$PARTHENON_instance;
  }
  var Champion$UTHOR_instance;
  function Champion$UTHOR_getInstance() {
    Champion_initFields();
    return Champion$UTHOR_instance;
  }
  var Champion$SPARROW_instance;
  function Champion$SPARROW_getInstance() {
    Champion_initFields();
    return Champion$SPARROW_instance;
  }
  var Champion$DARAE_instance;
  function Champion$DARAE_getInstance() {
    Champion_initFields();
    return Champion$DARAE_instance;
  }
  var Champion$AGAMEMNON_instance;
  function Champion$AGAMEMNON_getInstance() {
    Champion_initFields();
    return Champion$AGAMEMNON_instance;
  }
  var Champion$BLOODYPHANTOM_instance;
  function Champion$BLOODYPHANTOM_getInstance() {
    Champion_initFields();
    return Champion$BLOODYPHANTOM_instance;
  }
  var Champion$NAISHA_instance;
  function Champion$NAISHA_getInstance() {
    Champion_initFields();
    return Champion$NAISHA_instance;
  }
  var Champion$MAJENDA_instance;
  function Champion$MAJENDA_getInstance() {
    Champion_initFields();
    return Champion$MAJENDA_instance;
  }
  var Champion$실크_instance;
  function Champion$실크_getInstance() {
    Champion_initFields();
    return Champion$실크_instance;
  }
  var Champion$ZERDIN_instance;
  function Champion$ZERDIN_getInstance() {
    Champion_initFields();
    return Champion$ZERDIN_instance;
  }
  var Champion$TYRANDE_instance;
  function Champion$TYRANDE_getInstance() {
    Champion_initFields();
    return Champion$TYRANDE_instance;
  }
  var Champion$GARAE_instance;
  function Champion$GARAE_getInstance() {
    Champion_initFields();
    return Champion$GARAE_instance;
  }
  var Champion$SHAKAZAN_instance;
  function Champion$SHAKAZAN_getInstance() {
    Champion_initFields();
    return Champion$SHAKAZAN_instance;
  }
  var Champion$NARAE_instance;
  function Champion$NARAE_getInstance() {
    Champion_initFields();
    return Champion$NARAE_instance;
  }
  var Champion$IREAH_instance;
  function Champion$IREAH_getInstance() {
    Champion_initFields();
    return Champion$IREAH_instance;
  }
  var Champion$ROKHAN_instance;
  function Champion$ROKHAN_getInstance() {
    Champion_initFields();
    return Champion$ROKHAN_instance;
  }
  var Champion$FRODE_instance;
  function Champion$FRODE_getInstance() {
    Champion_initFields();
    return Champion$FRODE_instance;
  }
  var Champion$FURION_instance;
  function Champion$FURION_getInstance() {
    Champion_initFields();
    return Champion$FURION_instance;
  }
  var Champion$ZYROSE_instance;
  function Champion$ZYROSE_getInstance() {
    Champion_initFields();
    return Champion$ZYROSE_instance;
  }
  var Champion$ELDIN_instance;
  function Champion$ELDIN_getInstance() {
    Champion_initFields();
    return Champion$ELDIN_instance;
  }
  var Champion$나즈그렐_instance;
  function Champion$나즈그렐_getInstance() {
    Champion_initFields();
    return Champion$나즈그렐_instance;
  }
  var Champion$PERDA_instance;
  function Champion$PERDA_getInstance() {
    Champion_initFields();
    return Champion$PERDA_instance;
  }
  var Champion$MELSHID_instance;
  function Champion$MELSHID_getInstance() {
    Champion_initFields();
    return Champion$MELSHID_instance;
  }
  var Champion$MANUTE_instance;
  function Champion$MANUTE_getInstance() {
    Champion_initFields();
    return Champion$MANUTE_instance;
  }
  var Champion$VOLZINE_instance;
  function Champion$VOLZINE_getInstance() {
    Champion_initFields();
    return Champion$VOLZINE_instance;
  }
  var Champion$SATYR_instance;
  function Champion$SATYR_getInstance() {
    Champion_initFields();
    return Champion$SATYR_instance;
  }
  var Champion$KANJEL_instance;
  function Champion$KANJEL_getInstance() {
    Champion_initFields();
    return Champion$KANJEL_instance;
  }
  var Champion$GURR_instance;
  function Champion$GURR_getInstance() {
    Champion_initFields();
    return Champion$GURR_instance;
  }
  var Champion$BROKHEN_instance;
  function Champion$BROKHEN_getInstance() {
    Champion_initFields();
    return Champion$BROKHEN_instance;
  }
  var Champion$ALIEN_instance;
  function Champion$ALIEN_getInstance() {
    Champion_initFields();
    return Champion$ALIEN_instance;
  }
  var Champion$MUTANT_instance;
  function Champion$MUTANT_getInstance() {
    Champion_initFields();
    return Champion$MUTANT_instance;
  }
  var Champion$MYRMIDON_instance;
  function Champion$MYRMIDON_getInstance() {
    Champion_initFields();
    return Champion$MYRMIDON_instance;
  }
  var Champion$GROMHELLSCREAM_instance;
  function Champion$GROMHELLSCREAM_getInstance() {
    Champion_initFields();
    return Champion$GROMHELLSCREAM_instance;
  }
  var Champion$KINGJOE_instance;
  function Champion$KINGJOE_getInstance() {
    Champion_initFields();
    return Champion$KINGJOE_instance;
  }
  var Champion$스벤_instance;
  function Champion$스벤_getInstance() {
    Champion_initFields();
    return Champion$스벤_instance;
  }
  var Champion$BUTCHER_instance;
  function Champion$BUTCHER_getInstance() {
    Champion_initFields();
    return Champion$BUTCHER_instance;
  }
  var Champion$KARUS_instance;
  function Champion$KARUS_getInstance() {
    Champion_initFields();
    return Champion$KARUS_instance;
  }
  var Champion$AGNI_instance;
  function Champion$AGNI_getInstance() {
    Champion_initFields();
    return Champion$AGNI_instance;
  }
  var Champion$VIPER_instance;
  function Champion$VIPER_getInstance() {
    Champion_initFields();
    return Champion$VIPER_instance;
  }
  var Champion$LEOPARD_instance;
  function Champion$LEOPARD_getInstance() {
    Champion_initFields();
    return Champion$LEOPARD_instance;
  }
  var Champion$ILLIDAN_instance;
  function Champion$ILLIDAN_getInstance() {
    Champion_initFields();
    return Champion$ILLIDAN_instance;
  }
  var Champion$RAIDEN_instance;
  function Champion$RAIDEN_getInstance() {
    Champion_initFields();
    return Champion$RAIDEN_instance;
  }
  var Champion$AKASHA_instance;
  function Champion$AKASHA_getInstance() {
    Champion_initFields();
    return Champion$AKASHA_instance;
  }
  var Champion$LEONIC_instance;
  function Champion$LEONIC_getInstance() {
    Champion_initFields();
    return Champion$LEONIC_instance;
  }
  var Champion$SYLVANAS_instance;
  function Champion$SYLVANAS_getInstance() {
    Champion_initFields();
    return Champion$SYLVANAS_instance;
  }
  var Champion$LYKIAN_instance;
  function Champion$LYKIAN_getInstance() {
    Champion_initFields();
    return Champion$LYKIAN_instance;
  }
  var Champion$ROZAMIER_instance;
  function Champion$ROZAMIER_getInstance() {
    Champion_initFields();
    return Champion$ROZAMIER_instance;
  }
  var Champion$ARCRULA_instance;
  function Champion$ARCRULA_getInstance() {
    Champion_initFields();
    return Champion$ARCRULA_instance;
  }
  var Champion$JULMARAN_instance;
  function Champion$JULMARAN_getInstance() {
    Champion_initFields();
    return Champion$JULMARAN_instance;
  }
  var Champion$NIVHAS_instance;
  function Champion$NIVHAS_getInstance() {
    Champion_initFields();
    return Champion$NIVHAS_instance;
  }
  var Champion$LADYDEATH_instance;
  function Champion$LADYDEATH_getInstance() {
    Champion_initFields();
    return Champion$LADYDEATH_instance;
  }
  var Champion$LUCIFER_instance;
  function Champion$LUCIFER_getInstance() {
    Champion_initFields();
    return Champion$LUCIFER_instance;
  }
  var Champion$MEDUSA_instance;
  function Champion$MEDUSA_getInstance() {
    Champion_initFields();
    return Champion$MEDUSA_instance;
  }
  var Champion$OBLI_instance;
  function Champion$OBLI_getInstance() {
    Champion_initFields();
    return Champion$OBLI_instance;
  }
  var Champion$KELZHAD_instance;
  function Champion$KELZHAD_getInstance() {
    Champion_initFields();
    return Champion$KELZHAD_instance;
  }
  var Champion$AKIRO_instance;
  function Champion$AKIRO_getInstance() {
    Champion_initFields();
    return Champion$AKIRO_instance;
  }
  var Champion$AKDONG_instance;
  function Champion$AKDONG_getInstance() {
    Champion_initFields();
    return Champion$AKDONG_instance;
  }
  var Champion$PLUTO_instance;
  function Champion$PLUTO_getInstance() {
    Champion_initFields();
    return Champion$PLUTO_instance;
  }
  var Champion$NAKACHA_instance;
  function Champion$NAKACHA_getInstance() {
    Champion_initFields();
    return Champion$NAKACHA_instance;
  }
  var Champion$KALINAS_instance;
  function Champion$KALINAS_getInstance() {
    Champion_initFields();
    return Champion$KALINAS_instance;
  }
  Champion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Champion',
    interfaces: [Enum]
  };
  function Champion$values() {
    return [Champion$챈_getInstance(), Champion$스톤콜드_getInstance(), Champion$MURADIN_getInstance(), Champion$CAIRENHOOF_getInstance(), Champion$ARTHAS_getInstance(), Champion$TALON_getInstance(), Champion$갈리토스_getInstance(), Champion$NIFFY_getInstance(), Champion$SEDRIC_getInstance(), Champion$GREME_getInstance(), Champion$PARTHENON_getInstance(), Champion$UTHOR_getInstance(), Champion$SPARROW_getInstance(), Champion$DARAE_getInstance(), Champion$AGAMEMNON_getInstance(), Champion$BLOODYPHANTOM_getInstance(), Champion$NAISHA_getInstance(), Champion$MAJENDA_getInstance(), Champion$실크_getInstance(), Champion$ZERDIN_getInstance(), Champion$TYRANDE_getInstance(), Champion$GARAE_getInstance(), Champion$SHAKAZAN_getInstance(), Champion$NARAE_getInstance(), Champion$IREAH_getInstance(), Champion$ROKHAN_getInstance(), Champion$FRODE_getInstance(), Champion$FURION_getInstance(), Champion$ZYROSE_getInstance(), Champion$ELDIN_getInstance(), Champion$나즈그렐_getInstance(), Champion$PERDA_getInstance(), Champion$MELSHID_getInstance(), Champion$MANUTE_getInstance(), Champion$VOLZINE_getInstance(), Champion$SATYR_getInstance(), Champion$KANJEL_getInstance(), Champion$GURR_getInstance(), Champion$BROKHEN_getInstance(), Champion$ALIEN_getInstance(), Champion$MUTANT_getInstance(), Champion$MYRMIDON_getInstance(), Champion$GROMHELLSCREAM_getInstance(), Champion$KINGJOE_getInstance(), Champion$스벤_getInstance(), Champion$BUTCHER_getInstance(), Champion$KARUS_getInstance(), Champion$AGNI_getInstance(), Champion$VIPER_getInstance(), Champion$LEOPARD_getInstance(), Champion$ILLIDAN_getInstance(), Champion$RAIDEN_getInstance(), Champion$AKASHA_getInstance(), Champion$LEONIC_getInstance(), Champion$SYLVANAS_getInstance(), Champion$LYKIAN_getInstance(), Champion$ROZAMIER_getInstance(), Champion$ARCRULA_getInstance(), Champion$JULMARAN_getInstance(), Champion$NIVHAS_getInstance(), Champion$LADYDEATH_getInstance(), Champion$LUCIFER_getInstance(), Champion$MEDUSA_getInstance(), Champion$OBLI_getInstance(), Champion$KELZHAD_getInstance(), Champion$AKIRO_getInstance(), Champion$AKDONG_getInstance(), Champion$PLUTO_getInstance(), Champion$NAKACHA_getInstance(), Champion$KALINAS_getInstance()];
  }
  Champion.values = Champion$values;
  function Champion$valueOf(name) {
    switch (name) {
      case '\uCC48':
        return Champion$챈_getInstance();
      case '\uC2A4\uD1A4\uCF5C\uB4DC':
        return Champion$스톤콜드_getInstance();
      case 'MURADIN':
        return Champion$MURADIN_getInstance();
      case 'CAIRENHOOF':
        return Champion$CAIRENHOOF_getInstance();
      case 'ARTHAS':
        return Champion$ARTHAS_getInstance();
      case 'TALON':
        return Champion$TALON_getInstance();
      case '\uAC08\uB9AC\uD1A0\uC2A4':
        return Champion$갈리토스_getInstance();
      case 'NIFFY':
        return Champion$NIFFY_getInstance();
      case 'SEDRIC':
        return Champion$SEDRIC_getInstance();
      case 'GREME':
        return Champion$GREME_getInstance();
      case 'PARTHENON':
        return Champion$PARTHENON_getInstance();
      case 'UTHOR':
        return Champion$UTHOR_getInstance();
      case 'SPARROW':
        return Champion$SPARROW_getInstance();
      case 'DARAE':
        return Champion$DARAE_getInstance();
      case 'AGAMEMNON':
        return Champion$AGAMEMNON_getInstance();
      case 'BLOODYPHANTOM':
        return Champion$BLOODYPHANTOM_getInstance();
      case 'NAISHA':
        return Champion$NAISHA_getInstance();
      case 'MAJENDA':
        return Champion$MAJENDA_getInstance();
      case '\uC2E4\uD06C':
        return Champion$실크_getInstance();
      case 'ZERDIN':
        return Champion$ZERDIN_getInstance();
      case 'TYRANDE':
        return Champion$TYRANDE_getInstance();
      case 'GARAE':
        return Champion$GARAE_getInstance();
      case 'SHAKAZAN':
        return Champion$SHAKAZAN_getInstance();
      case 'NARAE':
        return Champion$NARAE_getInstance();
      case 'IREAH':
        return Champion$IREAH_getInstance();
      case 'ROKHAN':
        return Champion$ROKHAN_getInstance();
      case 'FRODE':
        return Champion$FRODE_getInstance();
      case 'FURION':
        return Champion$FURION_getInstance();
      case 'ZYROSE':
        return Champion$ZYROSE_getInstance();
      case 'ELDIN':
        return Champion$ELDIN_getInstance();
      case '\uB098\uC988\uADF8\uB810':
        return Champion$나즈그렐_getInstance();
      case 'PERDA':
        return Champion$PERDA_getInstance();
      case 'MELSHID':
        return Champion$MELSHID_getInstance();
      case 'MANUTE':
        return Champion$MANUTE_getInstance();
      case 'VOLZINE':
        return Champion$VOLZINE_getInstance();
      case 'SATYR':
        return Champion$SATYR_getInstance();
      case 'KANJEL':
        return Champion$KANJEL_getInstance();
      case 'GURR':
        return Champion$GURR_getInstance();
      case 'BROKHEN':
        return Champion$BROKHEN_getInstance();
      case 'ALIEN':
        return Champion$ALIEN_getInstance();
      case 'MUTANT':
        return Champion$MUTANT_getInstance();
      case 'MYRMIDON':
        return Champion$MYRMIDON_getInstance();
      case 'GROMHELLSCREAM':
        return Champion$GROMHELLSCREAM_getInstance();
      case 'KINGJOE':
        return Champion$KINGJOE_getInstance();
      case '\uC2A4\uBCA4':
        return Champion$스벤_getInstance();
      case 'BUTCHER':
        return Champion$BUTCHER_getInstance();
      case 'KARUS':
        return Champion$KARUS_getInstance();
      case 'AGNI':
        return Champion$AGNI_getInstance();
      case 'VIPER':
        return Champion$VIPER_getInstance();
      case 'LEOPARD':
        return Champion$LEOPARD_getInstance();
      case 'ILLIDAN':
        return Champion$ILLIDAN_getInstance();
      case 'RAIDEN':
        return Champion$RAIDEN_getInstance();
      case 'AKASHA':
        return Champion$AKASHA_getInstance();
      case 'LEONIC':
        return Champion$LEONIC_getInstance();
      case 'SYLVANAS':
        return Champion$SYLVANAS_getInstance();
      case 'LYKIAN':
        return Champion$LYKIAN_getInstance();
      case 'ROZAMIER':
        return Champion$ROZAMIER_getInstance();
      case 'ARCRULA':
        return Champion$ARCRULA_getInstance();
      case 'JULMARAN':
        return Champion$JULMARAN_getInstance();
      case 'NIVHAS':
        return Champion$NIVHAS_getInstance();
      case 'LADYDEATH':
        return Champion$LADYDEATH_getInstance();
      case 'LUCIFER':
        return Champion$LUCIFER_getInstance();
      case 'MEDUSA':
        return Champion$MEDUSA_getInstance();
      case 'OBLI':
        return Champion$OBLI_getInstance();
      case 'KELZHAD':
        return Champion$KELZHAD_getInstance();
      case 'AKIRO':
        return Champion$AKIRO_getInstance();
      case 'AKDONG':
        return Champion$AKDONG_getInstance();
      case 'PLUTO':
        return Champion$PLUTO_getInstance();
      case 'NAKACHA':
        return Champion$NAKACHA_getInstance();
      case 'KALINAS':
        return Champion$KALINAS_getInstance();
      default:throwISE('No enum constant main.kotlin.htmlBuilder.Champion.' + name);
    }
  }
  Champion.valueOf_61zpoe$ = Champion$valueOf;
  function Result(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Result_initFields() {
    Result_initFields = function () {
    };
    Result$승_instance = new Result('\uC2B9', 0);
    Result$패_instance = new Result('\uD328', 1);
    Result$무_instance = new Result('\uBB34', 2);
  }
  var Result$승_instance;
  function Result$승_getInstance() {
    Result_initFields();
    return Result$승_instance;
  }
  var Result$패_instance;
  function Result$패_getInstance() {
    Result_initFields();
    return Result$패_instance;
  }
  var Result$무_instance;
  function Result$무_getInstance() {
    Result_initFields();
    return Result$무_instance;
  }
  Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: [Enum]
  };
  function Result$values() {
    return [Result$승_getInstance(), Result$패_getInstance(), Result$무_getInstance()];
  }
  Result.values = Result$values;
  function Result$valueOf(name) {
    switch (name) {
      case '\uC2B9':
        return Result$승_getInstance();
      case '\uD328':
        return Result$패_getInstance();
      case '\uBB34':
        return Result$무_getInstance();
      default:throwISE('No enum constant main.kotlin.htmlBuilder.Result.' + name);
    }
  }
  Result.valueOf_61zpoe$ = Result$valueOf;
  function User(id, name, battles, wins) {
    if (battles === void 0)
      battles = 0;
    if (wins === void 0)
      wins = 0;
    this.id = id;
    this.name = name;
    this.battles = battles;
    this.wins = wins;
  }
  User.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'User',
    interfaces: []
  };
  User.prototype.component1 = function () {
    return this.id;
  };
  User.prototype.component2 = function () {
    return this.name;
  };
  User.prototype.component3 = function () {
    return this.battles;
  };
  User.prototype.component4 = function () {
    return this.wins;
  };
  User.prototype.copy_ccskfk$ = function (id, name, battles, wins) {
    return new User(id === void 0 ? this.id : id, name === void 0 ? this.name : name, battles === void 0 ? this.battles : battles, wins === void 0 ? this.wins : wins);
  };
  User.prototype.toString = function () {
    return 'User(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', battles=' + Kotlin.toString(this.battles)) + (', wins=' + Kotlin.toString(this.wins)) + ')';
  };
  User.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.battles) | 0;
    result = result * 31 + Kotlin.hashCode(this.wins) | 0;
    return result;
  };
  User.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.battles, other.battles) && Kotlin.equals(this.wins, other.wins)))));
  };
  function Record(date, id, team, player, champion, kill, death, assist, level, result) {
    if (kill === void 0)
      kill = 0;
    if (death === void 0)
      death = 0;
    if (assist === void 0)
      assist = 0;
    if (level === void 0)
      level = 1;
    if (result === void 0)
      result = Result$무_getInstance();
    this.date = date;
    this.id = id;
    this.team = team;
    this.player = player;
    this.champion = champion;
    this.kill = kill;
    this.death = death;
    this.assist = assist;
    this.level = level;
    this.result = result;
  }
  Record.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Record',
    interfaces: []
  };
  Record.prototype.component1 = function () {
    return this.date;
  };
  Record.prototype.component2 = function () {
    return this.id;
  };
  Record.prototype.component3 = function () {
    return this.team;
  };
  Record.prototype.component4 = function () {
    return this.player;
  };
  Record.prototype.component5 = function () {
    return this.champion;
  };
  Record.prototype.component6 = function () {
    return this.kill;
  };
  Record.prototype.component7 = function () {
    return this.death;
  };
  Record.prototype.component8 = function () {
    return this.assist;
  };
  Record.prototype.component9 = function () {
    return this.level;
  };
  Record.prototype.component10 = function () {
    return this.result;
  };
  Record.prototype.copy_igzya6$ = function (date, id, team, player, champion, kill, death, assist, level, result) {
    return new Record(date === void 0 ? this.date : date, id === void 0 ? this.id : id, team === void 0 ? this.team : team, player === void 0 ? this.player : player, champion === void 0 ? this.champion : champion, kill === void 0 ? this.kill : kill, death === void 0 ? this.death : death, assist === void 0 ? this.assist : assist, level === void 0 ? this.level : level, result === void 0 ? this.result : result);
  };
  Record.prototype.toString = function () {
    return 'Record(date=' + Kotlin.toString(this.date) + (', id=' + Kotlin.toString(this.id)) + (', team=' + Kotlin.toString(this.team)) + (', player=' + Kotlin.toString(this.player)) + (', champion=' + Kotlin.toString(this.champion)) + (', kill=' + Kotlin.toString(this.kill)) + (', death=' + Kotlin.toString(this.death)) + (', assist=' + Kotlin.toString(this.assist)) + (', level=' + Kotlin.toString(this.level)) + (', result=' + Kotlin.toString(this.result)) + ')';
  };
  Record.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.date) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.team) | 0;
    result = result * 31 + Kotlin.hashCode(this.player) | 0;
    result = result * 31 + Kotlin.hashCode(this.champion) | 0;
    result = result * 31 + Kotlin.hashCode(this.kill) | 0;
    result = result * 31 + Kotlin.hashCode(this.death) | 0;
    result = result * 31 + Kotlin.hashCode(this.assist) | 0;
    result = result * 31 + Kotlin.hashCode(this.level) | 0;
    result = result * 31 + Kotlin.hashCode(this.result) | 0;
    return result;
  };
  Record.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.date, other.date) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.team, other.team) && Kotlin.equals(this.player, other.player) && Kotlin.equals(this.champion, other.champion) && Kotlin.equals(this.kill, other.kill) && Kotlin.equals(this.death, other.death) && Kotlin.equals(this.assist, other.assist) && Kotlin.equals(this.level, other.level) && Kotlin.equals(this.result, other.result)))));
  };
  function Game(data) {
    this.data = data;
  }
  Object.defineProperty(Game.prototype, 'date', {
    get: function () {
      return this.data.get_za3lpa$(0).date;
    }
  });
  Object.defineProperty(Game.prototype, 'id', {
    get: function () {
      return this.data.get_za3lpa$(0).id;
    }
  });
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  Object.defineProperty(Game.prototype, 'scourge', {
    get: function () {
      var $receiver = this.data;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.team === Team$SCOURGE_getInstance())
          destination.add_11rb$(element);
      }
      return destination;
    }
  });
  Object.defineProperty(Game.prototype, 'sentinel', {
    get: function () {
      var $receiver = this.data;
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.team === Team$SENTINEL_getInstance())
          destination.add_11rb$(element);
      }
      return destination;
    }
  });
  var Math_0 = Math;
  Object.defineProperty(Game.prototype, 'maxNumberOfPlayers', {
    get: function () {
      var a = this.scourge.size;
      var b = this.sentinel.size;
      return Math_0.max(a, b);
    }
  });
  Game.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  Game.prototype.component1 = function () {
    return this.data;
  };
  Game.prototype.copy_oqfj64$ = function (data) {
    return new Game(data === void 0 ? this.data : data);
  };
  Game.prototype.toString = function () {
    return 'Game(data=' + Kotlin.toString(this.data) + ')';
  };
  Game.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  Game.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.data, other.data))));
  };
  var muno;
  var changwoo;
  var namdo;
  var jaekwon;
  var yoongyu;
  var seongyul;
  var users;
  function getGames() {
    return listOf(new Game(arrayListOf([new Record('20181101', 1, Team$SCOURGE_getInstance(), muno, Champion$스벤_getInstance(), void 0, void 0, void 0, void 0, Result$승_getInstance()), new Record('20181101', 1, Team$SCOURGE_getInstance(), changwoo, Champion$나즈그렐_getInstance(), void 0, void 0, void 0, void 0, Result$승_getInstance()), new Record('20181101', 1, Team$SENTINEL_getInstance(), namdo, Champion$실크_getInstance(), void 0, void 0, void 0, void 0, Result$패_getInstance()), new Record('20181101', 1, Team$SENTINEL_getInstance(), jaekwon, Champion$갈리토스_getInstance(), void 0, void 0, void 0, void 0, Result$패_getInstance())])));
  }
  function Tag(name) {
    this.name = name;
    this.children = ArrayList_init();
    this.attributes = ArrayList_init();
  }
  Tag.prototype.toString = function () {
    return '<' + this.name + (this.attributes.isEmpty() ? '' : joinToString(this.attributes, ' ', ' ')) + '>' + (this.children.isEmpty() ? '' : joinToString(this.children, '')) + ('<\/' + this.name + '>');
  };
  Tag.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tag',
    interfaces: []
  };
  function Attribute(name, value) {
    this.name = name;
    this.value = value;
  }
  Attribute.prototype.toString = function () {
    return this.name + '=' + '"' + this.value + '"';
  };
  Attribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attribute',
    interfaces: []
  };
  function set($receiver, name, value) {
    if (value != null) {
      $receiver.attributes.add_11rb$(new Attribute(name, value));
    }
    return $receiver;
  }
  function doInit($receiver, tag, init) {
    init(tag);
    $receiver.children.add_11rb$(tag);
    return tag;
  }
  function Html() {
    Tag.call(this, 'html');
  }
  Html.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Html',
    interfaces: [Tag]
  };
  function Table() {
    Tag.call(this, 'table');
  }
  Table.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Table',
    interfaces: [Tag]
  };
  function Center() {
    Tag.call(this, 'center');
  }
  Center.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Center',
    interfaces: [Tag]
  };
  function TR() {
    Tag.call(this, 'tr');
  }
  TR.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TR',
    interfaces: [Tag]
  };
  function TD() {
    Tag.call(this, 'td');
  }
  TD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TD',
    interfaces: [Tag]
  };
  function Text(text) {
    Tag.call(this, 'b');
    this.text = text;
  }
  Text.prototype.toString = function () {
    return this.text;
  };
  Text.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Text',
    interfaces: [Tag]
  };
  function html(init) {
    var $receiver = new Html();
    init($receiver);
    return $receiver;
  }
  function table($receiver, init) {
    return doInit($receiver, new Table(), init);
  }
  function center($receiver, init) {
    return doInit($receiver, new Center(), init);
  }
  function tr($receiver, color, init) {
    if (color === void 0)
      color = null;
    return set(doInit($receiver, new TR(), init), 'bgcolor', color);
  }
  function td($receiver, color, align, init) {
    if (color === void 0)
      color = null;
    if (align === void 0)
      align = 'left';
    return set(set(doInit($receiver, new TD(), init), 'align', align), 'bgcolor', color);
  }
  function text$lambda($receiver) {
    return Unit;
  }
  function text($receiver, s) {
    return doInit($receiver, new Text(toString(s)), text$lambda);
  }
  function Product(description, price, popularity) {
    this.description = description;
    this.price = price;
    this.popularity = popularity;
  }
  Product.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Product',
    interfaces: []
  };
  Product.prototype.component1 = function () {
    return this.description;
  };
  Product.prototype.component2 = function () {
    return this.price;
  };
  Product.prototype.component3 = function () {
    return this.popularity;
  };
  Product.prototype.copy_euqqgu$ = function (description, price, popularity) {
    return new Product(description === void 0 ? this.description : description, price === void 0 ? this.price : price, popularity === void 0 ? this.popularity : popularity);
  };
  Product.prototype.toString = function () {
    return 'Product(description=' + Kotlin.toString(this.description) + (', price=' + Kotlin.toString(this.price)) + (', popularity=' + Kotlin.toString(this.popularity)) + ')';
  };
  Product.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.description) | 0;
    result = result * 31 + Kotlin.hashCode(this.price) | 0;
    result = result * 31 + Kotlin.hashCode(this.popularity) | 0;
    return result;
  };
  Product.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.description, other.description) && Kotlin.equals(this.price, other.price) && Kotlin.equals(this.popularity, other.popularity)))));
  };
  var cactus;
  var cake;
  var camera;
  var car;
  var carrot;
  var cellPhone;
  var chimney;
  var certificate;
  var cigar;
  var coffee;
  var coffeeMaker;
  var cola;
  var cranberry;
  var crocs;
  var crocodile;
  var cushion;
  function getProducts() {
    return listOf_0([cactus, cake, camera, car, carrot, cellPhone, chimney, certificate, cigar, coffee, coffeeMaker, cola, cranberry, crocs, crocodile, cushion]);
  }
  function main$lambda(f, res) {
    return res.send('i am a beautiful butterfly');
  }
  function main$lambda_0(f, res) {
    res.header('Content-type', 'text/html');
    res.write(renderProductTable());
    return res.end();
  }
  function main$lambda_1() {
    println('Listening on port 3000');
    return Unit;
  }
  function main(args) {
    println('Hello Kotlin to JavaScript!!');
    var express = require('express');
    var app = express();
    app.get('/', main$lambda);
    app.get('/test', main$lambda_0);
    app.listen(3000, main$lambda_1);
  }
  function renderProductTable$lambda$lambda$lambda$lambda($receiver) {
    text($receiver, '\uC77C\uC790');
    return Unit;
  }
  function renderProductTable$lambda$lambda$lambda$lambda_0($receiver) {
    text($receiver, '\uACBD\uAE30');
    return Unit;
  }
  function renderProductTable$lambda$lambda$lambda$lambda_1($receiver) {
    text($receiver, '\uC120\uC218');
    return Unit;
  }
  function renderProductTable$lambda$lambda$lambda$lambda_2($receiver) {
    text($receiver, '\uCE90\uB9AD\uD130');
    return Unit;
  }
  function renderProductTable$lambda$lambda$lambda$lambda_3($receiver) {
    text($receiver, '\uACB0\uACFC');
    return Unit;
  }
  function renderProductTable$lambda$lambda$lambda$lambda_4($receiver) {
    text($receiver, '\uC120\uC218');
    return Unit;
  }
  function renderProductTable$lambda$lambda$lambda$lambda_5($receiver) {
    text($receiver, '\uCE90\uB9AD\uD130');
    return Unit;
  }
  function renderProductTable$lambda$lambda$lambda$lambda_6($receiver) {
    text($receiver, '\uACB0\uACFC');
    return Unit;
  }
  function renderProductTable$lambda$lambda$lambda($receiver) {
    td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda);
    td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_0);
    td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_1);
    td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_2);
    td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_3);
    td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_4);
    td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_5);
    td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_6);
    return Unit;
  }
  function renderProductTable$lambda$lambda$lambda$lambda_7(closure$game) {
    return function ($receiver) {
      text($receiver, closure$game.date);
      return Unit;
    };
  }
  function renderProductTable$lambda$lambda$lambda$lambda_8(closure$game) {
    return function ($receiver) {
      text($receiver, closure$game.id);
      return Unit;
    };
  }
  function renderProductTable$lambda$lambda$lambda$lambda_9(closure$game, closure$i) {
    return function ($receiver) {
      text($receiver, closure$game.scourge.get_za3lpa$(closure$i).player.name);
      return Unit;
    };
  }
  function renderProductTable$lambda$lambda$lambda$lambda_10(closure$game, closure$i) {
    return function ($receiver) {
      text($receiver, closure$game.scourge.get_za3lpa$(closure$i).champion);
      return Unit;
    };
  }
  function renderProductTable$lambda$lambda$lambda$lambda_11(closure$game, closure$i) {
    return function ($receiver) {
      text($receiver, closure$game.scourge.get_za3lpa$(closure$i).result);
      return Unit;
    };
  }
  function renderProductTable$lambda$lambda$lambda$lambda_12(closure$game, closure$i) {
    return function ($receiver) {
      text($receiver, closure$game.sentinel.get_za3lpa$(closure$i).player.name);
      return Unit;
    };
  }
  function renderProductTable$lambda$lambda$lambda$lambda_13(closure$game, closure$i) {
    return function ($receiver) {
      text($receiver, closure$game.sentinel.get_za3lpa$(closure$i).champion);
      return Unit;
    };
  }
  function renderProductTable$lambda$lambda$lambda$lambda_14(closure$game, closure$i) {
    return function ($receiver) {
      text($receiver, closure$game.sentinel.get_za3lpa$(closure$i).result);
      return Unit;
    };
  }
  function renderProductTable$lambda$lambda$lambda_0(closure$game, closure$i) {
    return function ($receiver) {
      td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_7(closure$game));
      td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_8(closure$game));
      if (get_lastIndex(closure$game.scourge) >= closure$i) {
        td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_9(closure$game, closure$i));
        td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_10(closure$game, closure$i));
        td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_11(closure$game, closure$i));
      }
      if (get_lastIndex(closure$game.sentinel) >= closure$i) {
        td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_12(closure$game, closure$i));
        td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_13(closure$game, closure$i));
        td($receiver, void 0, void 0, renderProductTable$lambda$lambda$lambda$lambda_14(closure$game, closure$i));
      }
      return Unit;
    };
  }
  function renderProductTable$lambda$lambda($receiver) {
    tr($receiver, getTitleColor(), renderProductTable$lambda$lambda$lambda);
    var games = getGames();
    var index = 0;
    for (var tmp$ = games.iterator(); tmp$.hasNext(); ++index) {
      var game = tmp$.next();
      var tmp$_0;
      tmp$_0 = game.maxNumberOfPlayers;
      for (var i = 0; i < tmp$_0; i++) {
        tr($receiver, getCellColor(index), renderProductTable$lambda$lambda$lambda_0(game, i));
      }
    }
    return Unit;
  }
  function renderProductTable$lambda($receiver) {
    table($receiver, renderProductTable$lambda$lambda);
    return Unit;
  }
  function renderProductTable() {
    return html(renderProductTable$lambda).toString();
  }
  function getTitleColor() {
    return '#b9c9fe';
  }
  function getCellColor(row) {
    return row % 2 === 0 ? '#dce4ff' : '#eff2ff';
  }
  Object.defineProperty(PrimaryStat, 'STRENGTH', {
    get: PrimaryStat$STRENGTH_getInstance
  });
  Object.defineProperty(PrimaryStat, 'AGILITY', {
    get: PrimaryStat$AGILITY_getInstance
  });
  Object.defineProperty(PrimaryStat, 'INTELLECT', {
    get: PrimaryStat$INTELLECT_getInstance
  });
  var package$main = _.main || (_.main = {});
  var package$kotlin = package$main.kotlin || (package$main.kotlin = {});
  var package$htmlBuilder = package$kotlin.htmlBuilder || (package$kotlin.htmlBuilder = {});
  package$htmlBuilder.PrimaryStat = PrimaryStat;
  Object.defineProperty(Team, 'SCOURGE', {
    get: Team$SCOURGE_getInstance
  });
  Object.defineProperty(Team, 'SENTINEL', {
    get: Team$SENTINEL_getInstance
  });
  package$htmlBuilder.Team = Team;
  Object.defineProperty(Champion, '\uCC48', {
    get: Champion$챈_getInstance
  });
  Object.defineProperty(Champion, '\uC2A4\uD1A4\uCF5C\uB4DC', {
    get: Champion$스톤콜드_getInstance
  });
  Object.defineProperty(Champion, 'MURADIN', {
    get: Champion$MURADIN_getInstance
  });
  Object.defineProperty(Champion, 'CAIRENHOOF', {
    get: Champion$CAIRENHOOF_getInstance
  });
  Object.defineProperty(Champion, 'ARTHAS', {
    get: Champion$ARTHAS_getInstance
  });
  Object.defineProperty(Champion, 'TALON', {
    get: Champion$TALON_getInstance
  });
  Object.defineProperty(Champion, '\uAC08\uB9AC\uD1A0\uC2A4', {
    get: Champion$갈리토스_getInstance
  });
  Object.defineProperty(Champion, 'NIFFY', {
    get: Champion$NIFFY_getInstance
  });
  Object.defineProperty(Champion, 'SEDRIC', {
    get: Champion$SEDRIC_getInstance
  });
  Object.defineProperty(Champion, 'GREME', {
    get: Champion$GREME_getInstance
  });
  Object.defineProperty(Champion, 'PARTHENON', {
    get: Champion$PARTHENON_getInstance
  });
  Object.defineProperty(Champion, 'UTHOR', {
    get: Champion$UTHOR_getInstance
  });
  Object.defineProperty(Champion, 'SPARROW', {
    get: Champion$SPARROW_getInstance
  });
  Object.defineProperty(Champion, 'DARAE', {
    get: Champion$DARAE_getInstance
  });
  Object.defineProperty(Champion, 'AGAMEMNON', {
    get: Champion$AGAMEMNON_getInstance
  });
  Object.defineProperty(Champion, 'BLOODYPHANTOM', {
    get: Champion$BLOODYPHANTOM_getInstance
  });
  Object.defineProperty(Champion, 'NAISHA', {
    get: Champion$NAISHA_getInstance
  });
  Object.defineProperty(Champion, 'MAJENDA', {
    get: Champion$MAJENDA_getInstance
  });
  Object.defineProperty(Champion, '\uC2E4\uD06C', {
    get: Champion$실크_getInstance
  });
  Object.defineProperty(Champion, 'ZERDIN', {
    get: Champion$ZERDIN_getInstance
  });
  Object.defineProperty(Champion, 'TYRANDE', {
    get: Champion$TYRANDE_getInstance
  });
  Object.defineProperty(Champion, 'GARAE', {
    get: Champion$GARAE_getInstance
  });
  Object.defineProperty(Champion, 'SHAKAZAN', {
    get: Champion$SHAKAZAN_getInstance
  });
  Object.defineProperty(Champion, 'NARAE', {
    get: Champion$NARAE_getInstance
  });
  Object.defineProperty(Champion, 'IREAH', {
    get: Champion$IREAH_getInstance
  });
  Object.defineProperty(Champion, 'ROKHAN', {
    get: Champion$ROKHAN_getInstance
  });
  Object.defineProperty(Champion, 'FRODE', {
    get: Champion$FRODE_getInstance
  });
  Object.defineProperty(Champion, 'FURION', {
    get: Champion$FURION_getInstance
  });
  Object.defineProperty(Champion, 'ZYROSE', {
    get: Champion$ZYROSE_getInstance
  });
  Object.defineProperty(Champion, 'ELDIN', {
    get: Champion$ELDIN_getInstance
  });
  Object.defineProperty(Champion, '\uB098\uC988\uADF8\uB810', {
    get: Champion$나즈그렐_getInstance
  });
  Object.defineProperty(Champion, 'PERDA', {
    get: Champion$PERDA_getInstance
  });
  Object.defineProperty(Champion, 'MELSHID', {
    get: Champion$MELSHID_getInstance
  });
  Object.defineProperty(Champion, 'MANUTE', {
    get: Champion$MANUTE_getInstance
  });
  Object.defineProperty(Champion, 'VOLZINE', {
    get: Champion$VOLZINE_getInstance
  });
  Object.defineProperty(Champion, 'SATYR', {
    get: Champion$SATYR_getInstance
  });
  Object.defineProperty(Champion, 'KANJEL', {
    get: Champion$KANJEL_getInstance
  });
  Object.defineProperty(Champion, 'GURR', {
    get: Champion$GURR_getInstance
  });
  Object.defineProperty(Champion, 'BROKHEN', {
    get: Champion$BROKHEN_getInstance
  });
  Object.defineProperty(Champion, 'ALIEN', {
    get: Champion$ALIEN_getInstance
  });
  Object.defineProperty(Champion, 'MUTANT', {
    get: Champion$MUTANT_getInstance
  });
  Object.defineProperty(Champion, 'MYRMIDON', {
    get: Champion$MYRMIDON_getInstance
  });
  Object.defineProperty(Champion, 'GROMHELLSCREAM', {
    get: Champion$GROMHELLSCREAM_getInstance
  });
  Object.defineProperty(Champion, 'KINGJOE', {
    get: Champion$KINGJOE_getInstance
  });
  Object.defineProperty(Champion, '\uC2A4\uBCA4', {
    get: Champion$스벤_getInstance
  });
  Object.defineProperty(Champion, 'BUTCHER', {
    get: Champion$BUTCHER_getInstance
  });
  Object.defineProperty(Champion, 'KARUS', {
    get: Champion$KARUS_getInstance
  });
  Object.defineProperty(Champion, 'AGNI', {
    get: Champion$AGNI_getInstance
  });
  Object.defineProperty(Champion, 'VIPER', {
    get: Champion$VIPER_getInstance
  });
  Object.defineProperty(Champion, 'LEOPARD', {
    get: Champion$LEOPARD_getInstance
  });
  Object.defineProperty(Champion, 'ILLIDAN', {
    get: Champion$ILLIDAN_getInstance
  });
  Object.defineProperty(Champion, 'RAIDEN', {
    get: Champion$RAIDEN_getInstance
  });
  Object.defineProperty(Champion, 'AKASHA', {
    get: Champion$AKASHA_getInstance
  });
  Object.defineProperty(Champion, 'LEONIC', {
    get: Champion$LEONIC_getInstance
  });
  Object.defineProperty(Champion, 'SYLVANAS', {
    get: Champion$SYLVANAS_getInstance
  });
  Object.defineProperty(Champion, 'LYKIAN', {
    get: Champion$LYKIAN_getInstance
  });
  Object.defineProperty(Champion, 'ROZAMIER', {
    get: Champion$ROZAMIER_getInstance
  });
  Object.defineProperty(Champion, 'ARCRULA', {
    get: Champion$ARCRULA_getInstance
  });
  Object.defineProperty(Champion, 'JULMARAN', {
    get: Champion$JULMARAN_getInstance
  });
  Object.defineProperty(Champion, 'NIVHAS', {
    get: Champion$NIVHAS_getInstance
  });
  Object.defineProperty(Champion, 'LADYDEATH', {
    get: Champion$LADYDEATH_getInstance
  });
  Object.defineProperty(Champion, 'LUCIFER', {
    get: Champion$LUCIFER_getInstance
  });
  Object.defineProperty(Champion, 'MEDUSA', {
    get: Champion$MEDUSA_getInstance
  });
  Object.defineProperty(Champion, 'OBLI', {
    get: Champion$OBLI_getInstance
  });
  Object.defineProperty(Champion, 'KELZHAD', {
    get: Champion$KELZHAD_getInstance
  });
  Object.defineProperty(Champion, 'AKIRO', {
    get: Champion$AKIRO_getInstance
  });
  Object.defineProperty(Champion, 'AKDONG', {
    get: Champion$AKDONG_getInstance
  });
  Object.defineProperty(Champion, 'PLUTO', {
    get: Champion$PLUTO_getInstance
  });
  Object.defineProperty(Champion, 'NAKACHA', {
    get: Champion$NAKACHA_getInstance
  });
  Object.defineProperty(Champion, 'KALINAS', {
    get: Champion$KALINAS_getInstance
  });
  package$htmlBuilder.Champion = Champion;
  Object.defineProperty(Result, '\uC2B9', {
    get: Result$승_getInstance
  });
  Object.defineProperty(Result, '\uD328', {
    get: Result$패_getInstance
  });
  Object.defineProperty(Result, '\uBB34', {
    get: Result$무_getInstance
  });
  package$htmlBuilder.Result = Result;
  package$htmlBuilder.User = User;
  package$htmlBuilder.Record = Record;
  package$htmlBuilder.Game = Game;
  Object.defineProperty(package$htmlBuilder, 'muno', {
    get: function () {
      return muno;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'changwoo', {
    get: function () {
      return changwoo;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'namdo', {
    get: function () {
      return namdo;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'jaekwon', {
    get: function () {
      return jaekwon;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'yoongyu', {
    get: function () {
      return yoongyu;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'seongyul', {
    get: function () {
      return seongyul;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'users', {
    get: function () {
      return users;
    }
  });
  package$htmlBuilder.getGames = getGames;
  package$htmlBuilder.Tag = Tag;
  package$htmlBuilder.Attribute = Attribute;
  package$htmlBuilder.set_1rt01w$ = set;
  package$htmlBuilder.doInit_skcoi0$ = doInit;
  package$htmlBuilder.Html = Html;
  package$htmlBuilder.Table = Table;
  package$htmlBuilder.Center = Center;
  package$htmlBuilder.TR = TR;
  package$htmlBuilder.TD = TD;
  package$htmlBuilder.Text = Text;
  package$htmlBuilder.html_n84fwq$ = html;
  package$htmlBuilder.table_77uzjt$ = table;
  package$htmlBuilder.center_d41p7i$ = center;
  package$htmlBuilder.tr_2h8d3l$ = tr;
  package$htmlBuilder.td_5ygv2r$ = td;
  package$htmlBuilder.text_zewoh7$ = text;
  package$htmlBuilder.Product = Product;
  Object.defineProperty(package$htmlBuilder, 'cactus', {
    get: function () {
      return cactus;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'cake', {
    get: function () {
      return cake;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'camera', {
    get: function () {
      return camera;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'car', {
    get: function () {
      return car;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'carrot', {
    get: function () {
      return carrot;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'cellPhone', {
    get: function () {
      return cellPhone;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'chimney', {
    get: function () {
      return chimney;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'certificate', {
    get: function () {
      return certificate;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'cigar', {
    get: function () {
      return cigar;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'coffee', {
    get: function () {
      return coffee;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'coffeeMaker', {
    get: function () {
      return coffeeMaker;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'cola', {
    get: function () {
      return cola;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'cranberry', {
    get: function () {
      return cranberry;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'crocs', {
    get: function () {
      return crocs;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'crocodile', {
    get: function () {
      return crocodile;
    }
  });
  Object.defineProperty(package$htmlBuilder, 'cushion', {
    get: function () {
      return cushion;
    }
  });
  package$htmlBuilder.getProducts = getProducts;
  package$kotlin.main_kand9s$ = main;
  package$kotlin.renderProductTable = renderProductTable;
  package$kotlin.getTitleColor = getTitleColor;
  package$kotlin.getCellColor_za3lpa$ = getCellColor;
  muno = new User('muno43', '\uAE40\uBB38\uD638');
  changwoo = new User('blu', '\uC7A5\uCC3D\uC6B0');
  namdo = new User('namzzok', '\uAD6C\uB0A8\uB3C4');
  jaekwon = new User('ghdwornjs', '\uD64D\uC7AC\uAD8C');
  yoongyu = new User('nanun015', '\uAE40\uC724\uADDC');
  seongyul = new User('yul2ya', '\uAE40\uC131\uC728');
  users = arrayListOf([muno, changwoo, namdo, jaekwon, yoongyu, seongyul]);
  cactus = new Product('cactus', 11.2, 13);
  cake = new Product('cake', 3.2, 111);
  camera = new Product('camera', 134.5, 2);
  car = new Product('car', 30000.0, 0);
  carrot = new Product('carrot', 1.34, 5);
  cellPhone = new Product('cell phone', 129.9, 99);
  chimney = new Product('chimney', 190.0, 2);
  certificate = new Product('certificate', 99.9, 1);
  cigar = new Product('cigar', 8.0, 51);
  coffee = new Product('coffee', 8.0, 67);
  coffeeMaker = new Product('coffee maker', 201.2, 1);
  cola = new Product('cola', 4.0, 67);
  cranberry = new Product('cranberry', 4.1, 39);
  crocs = new Product('crocs', 18.7, 10);
  crocodile = new Product('crocodile', 20000.2, 1);
  cushion = new Product('cushion', 131.0, 0);
  main([]);
  Kotlin.defineModule('index', _);
  return _;
}(module.exports, require('kotlin')));

//# sourceMappingURL=index.js.map
