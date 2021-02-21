function maxNumberOfBalloons(text) {
  const test = ['b', 'a', 'l', 'o', 'n'];
  let frequencies = {
    'b': 0,
    'a': 0,
    'l': 0,
    'o': 0,
    'n': 0
  }
  text.split('').forEach((c) => {
    if (frequencies[c]>=0) frequencies[c] += 1;
  })
  return test.map((c) => {
    return ((c === 'l') || (c === 'o')) ? Math.floor(frequencies[c]/2) : frequencies[c];
  }).sort((a, b) => a-b)[0]
};

console.log(maxNumberOfBalloons("nlaebolko")) // 1
console.log(maxNumberOfBalloons("loonbalxballpoon")) // 2
console.log(maxNumberOfBalloons("leetcode")) // 0
console.log(maxNumberOfBalloons("balloon"))

word = "rrnlnfevwkvhqzathacmhyhonsvcwmmmehcgchzfjvfoxbnagtxwnwcjcbmbgexqhlefjyrijwjolebtodxtapgyrzmgqzexvugtermrktyjbaicmskxmdopmtoxayydqjjogxmmmpvfiajknjfsikgrwsejzgnbsblsjkkcbaunqthiaetvxlylylzjqkvgysxfoltcmxwrtwpkvhofoaxdugfnsuhepfxudwllyiyrszrpwkwlvpsspvgcimcrngfllsjjdppihhczogfwegibuzzacojtruvozbqwikgdjeqxyarjwaawzictwpdruufifgbqzatmkkdnjajnklnzfdxcsjpmebjqpuqqamoexnnqxccngljzhnhbroyoaphgmksefhizibzpgehvtujmjdhskvpqicxbziqifjqqkaowileochjqhrccajnthqeqgwazedgehdtkwchxjjzcyjimrkykcvkfbzqiusgkxdilnfislphmeliqspvhuichuusqxnutiyxvdtgfnnrrkjwjmkjqjradnocssmfefgfgtzpbnlzxardrrrttnnqttnsowwrqswyqxhsxtlnfxogulwqhkowniohtznlyfjqlzvowcvqxynjpiyiggnxgtmyhjcbehxxsgltojszqyfpnsiybksmozwsqfxpvgeyoyeccxqlcziikavapxyjcftxhfimabmquzkyxnnablhpikwbwwmpjdtmukmuvcfkraqcbopufsaigskwgpjdubbympilgaojuvzgapairttwzuexbsigzcgerblgdgfwkiiqvokbmbtdzkakkeahkgjuyepvtbwqgerztvgunzhgitwottmejilmwyzwczjoxckyjtcbfsryofffaugsketifypahgqgmeypsyjvftqynbzhrobiwouuykyczskcdedidptykluykypnsfuudqgpqzwextbbumiuymngczkfrowkzxxtggqlwlaohfkgfmbyyaboapwhhopewnchlmvifpdkeovpjyugautultdbbxkjxqbcamrpqhndfeybwoatrjwvroakmqapknzzumapytdsdhhlstojlnlvpqjxlpbwfkdupgxzajyjrutzeljnmyxkcdrcjsxfmbqhzblnlqgsqzqjtiaelfkuoyjcjdlpvajkkgyuabgiwlybwmaqdtireukwieifvpzptnebjtwcvmhltkotrvkxcbbsehkdkiegzzbtszfdslqnecluxilqqgqwotfqqoogzzsyfdaujymrjfeoiqpzdeispqsnvlocqdyjcthtxlerjgowzfwsqgourkdhyfaaexjwnfppvrwhdbtsxqqqlrzvkergkxiqzlwdfomyreafirkaycmvjmwnnaqexoewwymvgsrajurzfiohzsbrehhnfghanczevwavsjjslwmnljlmixepwiwalqatgwfzzqhqvrrrhxleuzffgjuihnlbeukyapalwlfjtpumiexkwnvdxiikfajsbxcaywwjjqmgtzrihaoebjduvsmyfvjcthmbjjcausloupnqwjcncosrinvnspqwzlsrivpbpmgsoevunzthofjxspcgordbpudedcfdbbqvymtwujzdtcvigwuofoowqusrsavwkoyabsvllwpqidbpelffmrzfwdhaypxzwofssgkcqobnuomcejbuolmashglsiixcogolmgcmtauauhupkcqdhwesdmpnelcpvnyipakzlsbrpjppayzsremllqnmizvqcphkyuvwrqphdmgiwousanjuazlocddvgduoqmvfovidicmjufaytymcvoonvndbuuljgdvalsnypemzbwovgclcdfwcjptsbelifrqocsuwiwsyzrcxwuweiehtiegogvawkjogwtftbwabpcufuepabxxiqngntudhhuxrvhmhunepamdtfavtuajmrfvgirquwginxtjcmxgmstmhkqncpkdicemhcofqcbceiukstmjzsavwuhgpwbsymupyldwtsbvdjdevvgtddvqqcibnbseqgiaputwgapmovminivrbzlerjwsiofgiihyooqyjchcctvjfebhpvwncqhbleluycybaqlxikorlkqxwzmtrbgpwiqqormjftiarumgxeasqeusnewjqedzhiibbfurgbuwmxfycaevtijtttcbzvgumgiimwzjzpwhuqqwotjrlayrqwcwltiivumafhucrnzjqddvvtrxjsupfxlrohxmytridseyiajntpjsdrbdhdrtnackpytfuzkeiwgukwhvtvehvrdldfugtlwksywnuygichqnjbsmsupsowajduoukduoulagskxvxskewsyhsgakjyqeconciayfwqwdwdnilmllyuwqmatjzxyuhvujrcwkdybdmszzoxwzxojimlfqldxaiqgvziifuobnhonlafoulxgcorcclsxkrwrxinsadpgfmunwjdwgsiepbclggbqpxfjdxqseqidtgrqkixxwmblwokkupjqavvniwjyfuobcbhqfymrayevkteoaturjyvpbjaawgesxnwdvshiiijylclbqwjavftdmrrdsyhqcjweptywnqpcnzucqnzyyptaosrhvfzdomojkoeyepbpbfupkrnyzftjwpdgfqmwhjnhatsedirwzcpeppusaekjsbevlrzyxqtfgcnpszwxhgaeincudnfmcqawcnfkawjrguhitkqtxcxcvojgudfsrezcpfcntnezvskggzhisksxsehgzqxrrqtdlhjhgrblgnbfulmfawtfwnsrjixrjbwwxkvppjdtydgrsnmcpwcudxoiunilylpivbicvxwijrcxhflkznmskrbnighehsyrrzxazwyyvxgffmheubmogkdqtbeyoffgpuathllbiublcvkhzhogbspoogzobbbkylptbwxrbnbhevugkufrbrsgijcvylqeoucsomarwklmmztirevahocqoewrxojvfrakuevheeioirhgttufsxwfymwgxebtazonolntbhfwwgpmoluhnnzcwfhjoxthbuihecsxlfnexaghbaiawxfcsrznockvfoaemmizfltiebkoygchtspwcmijtjvrzljaovsbprmcsgwkqpvjtucemnpxxzzhpxvydfxsoyypecppdwwusbrgysxdaccafafoslqfcohtlgqcuojqwilxbsxrogyfcsqbxdqvdvpnjdeqmrcriczwviehftrhuwrguzrhukemyzeeworelrjwosskahsiazkpwvgscbihgnqtcoicapcsbvngvqgkqgvfuyhcoabpgrdqthxbalglvvrxifdzocgnweutsgrhmiuhoitrmccscophlcmarepzlisqdzidhocliidjikgzsmbjasukprfvlpkgryoyjtmuknjcmphkzhipocykitztqihhsjmxbrwefwgbdkdillzkosondaevcfyeikdfhgnughasibklabfwxkpxjpfwbjlczyusecvbyzlnxbhodtqpacvdgzzffxegivtemuswsmgiieldivzbildwucddnizmyofqtymmikpkzwohivqnipnwrdjatiyvlnrtwkrcrifmxvofolrbbhvyigrlsldqgbivahebsttymezbixrheczduzsqidjxfqorcxqssmcpnphnprpwlkyofnamfmezxoivrtxoxqralelxegltcpsleogdotrdgwxaspyghklhklbxsvfwjkbdjikdtzyhoufeqnqcmetpvvilyakjxmsoescrvivbslvdpunwhuylsgswgvfxfptnrskmsyiezttvwjwilhqdnpvayggvwepizpmjwhsellrypgtujbmqmpnngkwkgwrasmnomqhukusjadlpgpbhpnefhjippzhcdasuhauthuqbvvmndggmlckpjuuopsyrwtwkdtkwplrgfrgunfogevjqxqsoryjwmahmqhlgbyfqfgcfanjkerbirdilapihcrquviryewnphzwhsprelcnlgsczxonivmzknffspyeodsyxtkjcnljwfldvqwqndjcpxzxhjnsjuoedkrbmcsyyfhhjbvekmnfpxwchganhcmxbtoaofbbfvfewpzqrpgindhcqutdkyrtufdnsxxhachxvvfokczlrcdvygxusslaxllcspnbrtblgjlzmkxfpgeuepetuzesccdskwfunxaehfxsqopqjplukuivautozxtlujwxoijihzueabboyxvbtaangqzokdzwhbxodlfmryhikccbdprouslrgktmdjimvwshpbzvdmbtyyggnsamppcasbmdxlbsoosftfmamcmpvaojyfbwajwkodaokljngsknpklkticblmghnihdmezdyvriohgvvonutlmcfavvqndjnsskhamflpipuvusyqyzwlfrlestfppascaszytzagpcrwgeswhzuquurnytvrzsoyuqvjpwbmyksxueizewjmxnncniuddtmkpqhrzonwahjgmjxwihyalelbnwplqqhdgyrhcrnpdslxbdjhlmbvbvkwhjivspoejwtviwujcnuqjkskfpdnefruoyziynqcivjvlvaojhpcncbspuatgsyizklwfdbhwzbrbmxcyfxiwuwsorckrtdazaorauxmecsoywytrhuwqrobxndyfvwqukccpidvmecwuhdnqfsahqoxtswfdzzaystjmikdumrznihaakatobdrmjmahgefjomhywqfuiquafulpybnrvcfptttjaohipdrgbtvdzgxsakfvvoumdlalajlpusskjwlweufcjzpzhdcssqlkkrhaonmzxqtulrpqhubbgbagwyzpizbjegvjtqbkaiqididqvnbsknxegvkcfxdlljqs"
console.log(maxNumberOfBalloons(word))
