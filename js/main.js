// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {

  'use strict';

  // Global Variables within this
  var url = 'https://etwl67dlx2.execute-api.ap-southeast-1.amazonaws.com/staging/v1/';
  var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'APIKey': 'f912f198-e443-11e8-a9c5-89e884cb2e41'
  };

  window.addEventListener('load', function() {
    // Load the Churches
    loadChurchesHardCode();

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');

    // Loop over them and prevent submission 
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {

        // Check if the data are all valid
        if (form.checkValidity() === false) {
          
        } else {
          // Prepare the data for submission
          var parameters = {
            'Believers': [
              {
                'FirstName': $('#firstName').val(),
                'LastName': $('#lastName').val(),
                'Gender': $('#gender').val(),
                'AgeGroup': $('#ageGroup').val(),
                'MobileNumber': $('#phoneNo').val(),
                'EmailAddress': $('#email').val(),
                'DecisionMade': $('#decision').val(),
                'HomePostalCode': $('#postalCode').val(),
                'RallyTime': $('#rally').val(),
                'LanguageType': $('#language').val(),
                'NameOfFriend': $('#nameOfFriend').val(),
                'FriendContactNumber': $('#phoneNoFriend').val(),
                'FriendChurchName': $('#churchNameFriend').val(),
                'AdditionalComments': $('#comments').val(),
                'FormSource': 'Web'
              }
            ]
          };
          parameters = JSON.stringify(parameters);

          // Display loading first
          loadModal();

          // Login first to get the access token
          $.ajax({
              type: 'POST',
              url: url + 'believers',
              headers: headers,
              data: parameters,
              timeout: 60000
          })
          .done(function(data) {
            // Hide the modal
            clearModal(false);   

            // Display the info
            if (data.Message == 'OK') { 
              infoModal('Success', 'The form was successfully submitted.', true);
            } else {
              infoModal('Failed', 'Failed to submit the form.', false);
            }
          })
          .fail(function(error) {
              infoModal('Failed', 'Unable to submit the form.', false);
          });
        }

        // Update the class of the form
        form.classList.add('was-validated');

        event.preventDefault();
        event.stopPropagation();
      }, false);
    });

    // Trigger the click for the final button
    $('#btnSuccess').click(function() {
      location.reload();
    });

  }, false);

  // Load the churches hardcodes
  function loadChurchesHardCode() {
    // String combined by ~
    var churches = "Don't know~Others~3:16 Church~Abundant Grace Presbyterian Church~Abundant Life Baptist Church ALBC~Abundant Life Bible-Presbyterian Church~Abundant Life Family Church Ltd~Acts - Highway to Holiness~ACTS Baptist Church~ACTS College Ltd~Acts Community Church~Adam Road Presbyterian Church 亚当路长老会 ARPC~Adam Road Presbyterian Church@Bishan~Aflame Family Centre~Agape Baptist Church (Dorset Road) ABC (Dorset)~Agape Baptist Church (One Farrer Hotel) ABC (One Farrer)~Agape Christian Church 长老会爱加倍堂 ACC~Agape Methodist Church 爱加倍卫理公会 AgMC~Agape Reformed Evangelical Church~Aldersgate Methodist Church 雅德门卫礼公会 AMC~Alive Community Church~All Saints Church 诸圣堂 ASC~All Saints Presbyterian Church~Alpha Singapore~Amazing Grace Presbyterian Church~Ambassador Baptist Church~Ang Mo Kio Chinese Methodist Church~Ang Mo Kio Methodist Church~Ang Mo Kio Presbyterian Church 宏茂桥长老会教会 AMKPC~Ang Mo Kio Tamil Methodist Church~Anglican Standing Comm~Angora Brethren Church ABC~Antioch Missions~Asia Evangelistic Fellowship~Asia Pacific Mission Ltd~Asia Theological Centre~Asian Baptist Community Church~Asian Gateway Church~Baptist Fellowship Church Ltd~Baptist Theological Seminary~Barker Road Methodist Church 巴克路卫理公会教会 BRMC~Bartley Christian Church 巴特礼基督教会 BCC~Bauhinia Baptist Church~Bedok Lutheran Church 勿洛信义会 BLC~Bedok Methodist Church~Berean Bible-Presbyterian Church~Berean Christian Church~Berith Bible-Presbyterian Church~Bethany Christian Centre~Bethany Church (Singapore)~Bethany Emmanuel Church~Bethany Evangelical Free Church~Bethany Independent-Presbyterian Church~Bethany International University~Bethany Presbyterian Church 长老会伯大尼堂 BPC~Bethany Trinity Presbyterian Church~Bethel Assembly Of God Church 神召会伯特利堂 BethelAG~Bethel Presbyterian Church @ Jln Lateh 长老会伯特利堂 Bethel~Bethel Presbyterian Church @ Poh Huat 伯特利长老会@宝发路双语崇拜~Bethesda (Bedok-Tampines) Church 勿洛福音堂 BBTC~Bethesda (Frankel Estate) Church 福兰克福音堂 BFEC~Bethesda (Katong) Church~Bethesda Cathedral~Bethesda Christian Centre  BCC~Bethesda Church Bukit Arang~Bethesda Community~Bethesda Hall (Ang Mo Kio)~Bethesda Hall (Depot Walk)~Bethesda Pasir Ris Mission Church 宣道福音堂 BPMC~Bethlehem Bible-Presbyterian Church~BGM Church BGM~Bible Evangelism Church~Bible Society of Singapore~Biblical Graduate School of Theology~Blessed Grace Church~Blessed Hope Bible-Presbyterian Church~Blessings Ministry~Boscombe Life Church 博恩生命堂 BLC~Boundary Gospel Mission Church~Bread of Life (Singapore) 新加坡灵粮堂 BOL(S)~Brighton Community Church (Tyrwhitt) 圣光基督教会 BCC~Brighton Community Church (Ubi) 圣光基督教会 BCC~Bukit Batok Presbyterian Church (Indonesian Congregation)~Bukit Batok Presbyterian Church ‎吉巴督长老会 BBPC~Bukit Panjang Gospel Chapel~Bukit Panjang Methodist Church 卫理公会武吉班让堂 BPMC (English)~Cairnhill Methodist Church~Calvary Assembly of God~Calvary Baptist Church 救恩浸信教会 CBC~Calvary Bible-Presbyterian Church~Calvary Chapel Singapore~Calvary Pandan Bible-Presbyterian Church~Calvary Tengah Bible-Presbyterian Church~Cana Bible - Presbyterian Church~Care Assembly of God~Care Community Church~Carmel Presbyterian Church 长老会迦密堂 CPC~Central Christian Church~Centre of Hope Church~Centre of New Life~Changi Baptist Church~Changi Bethany Church~Changi Methodist Church 卫理公会樟宜堂／榜鹅布道所 CMC~Chapel of Christ our Hope (MPCC)~Chapel of Christ the King 基督君王堂 CCK~Chapel of Christ the Redeemer 基督救赎堂 CCR~Chapel of the Holy Spirit CHS~Chapel of The Resurrection COR~Charis Evangelical Free Church~Charis Methodist Church~Chen Li Presbyterian Church~Cherith Baptist Church~Child Evangelism Fellowship (S) Ltd~Chinese Christian Mission Limited~Chinese Church Union Singapore~Christ Church of Singapore~Christ for all Nations Singapore~Christ Grace Church~Christ Methodist Church~Christ Triumphant Church~Christalite Methodist Chapel~Christian Agape Fellowship Ltd~Christian Communications Singapore~Christian Community Church~Christian Disciples Church~Christian Grace Presbyterian Church~Christian Nationals' Evangelism Commission~Church Alive Ministries~Church Arise~Church For All Nations~Church in Missions Association~Church of Christ of Malaya~Church of Christ the Rock~Church of Christ, Bedok~Church of Christ, Citivision~Church of Christ, Geylang~Church of Christ, Jurong~Church of Christ, Lavender~Church of Christ, Lim Ah Pin Road~Church of Christ, Moulmein Road~Church of Christ, North-East~Church of Christ, North-West~Church of Christ, Pasir Panjang~Church of Christ, Woodlands~Church of Glory~Church of God (Evangelical)~Church of God (Singapore)~Church of God of Prophecy~Church of Joy~Church of Living Hope~Church of Our Saviour 救主堂 COOS~Church of Praise~Church of Singapore (Admiralty)~Church of Singapore (Balestier) 新加坡教会 (马里士他) COSB~Church of Singapore (Bukit Timah) 新加坡教会（武吉之马） COSBT~Church of Singapore (Harvest) 新加坡教会（丰收） COSH~Church of Singapore (Marine Parade) 新加坡教会 COS~Church of the Ascension 荣升堂 COA~Church of The Epiphany COTE~Church of the Good Shepherd - Queenstown 圣公会善牧堂 - 女皇镇 COGS, (Queenstown)~Church of the Good Shepherd - Tiong Bahru 圣公会善牧堂 - 中峇鲁 COGS, (Tiong Bahru)~Church of the Lord (Singapore)~Church of The True Light~Church Resource Ministries (Singapore)~City Gate Church~City Harvest Church~City Missions Church CMC~City Missions Indian International Church~City of David Church~City Outreach Church (Singapore)~City Revival Church~CityLight Church~Clementi Bible Church~Community for Christ Church~Community of Praise Baptist Church~Cornerstone Church~Cornerstone Community Church 房角石教会 CSCC~Cornerstone Evangelical Baptist Church (Bukit Panjang) 新加坡基石教会 - 西部 CEBC WEST~Cornerstone Evangelical Baptist Church (Lavender) 新加坡基石教会 CEBC CTHUB~Coronation Baptist Church~Covenant Church of Christ~Covenant Community Baptist Church~Covenant Community Methodist Church CCMC~Covenant Evangelical Free Church (Bukit Panjang) 圣约播道会 (武吉班让) Covenant EFC 圣约播道会(BPJ)~Covenant Evangelical Free Church (East) 圣约播道会 Covenant EFC~Covenant Evangelical Free Church (Woodlands) 圣约播道会 (兀兰) Covenant EFC 圣约播道会 (WDL)~Covenant Presbyterian Church 圣约堂长老会教堂 CPC~Covenant Vision Christian Church CVCC~Crown of Glory Church~Crown of Life Church~CRU Singapore~Danish Seamen's Church~Diaconia Fellowship CF~Diocese of Singapore~Discipleship Training Centre Ltd.~Eagles Communications~East Asia School of Theology~Ebenezer Church~Ebenezer Evangelical Free Church 以便以谢播道会 Ebenezer EFC~Ebenezer Malayalam Fellowship (Singapore)~ECF Holy Word Church~Eden Bible-Presbyterian Church~Elijah Communications~Elim Church Assembly of God 以琳堂 Elim~Elim Revival Church~Embrace Church~Emmanuel Assembly of God~Emmanuel Bible-Presbyterian Church~Emmanuel Christian Church ECC~Emmanuel Church of Singapore~Emmanuel Evangelical Free Church~Emmaus Evangelical Free Church~En Community~Eng Kong Christian Church~Enjoy Church Enjoy~Eternal Life Assembly of God 神召会永生堂 EL~Eternal Life Baptist Church~Evangel Baptist Church EBC~Evangel Bible-Presbyterian Church~Evangel Christian Church~Evangel Family Church~Evangelical Fellowship of Singapore~Evangelical Free Church of Singapore~Evangelize China Fellowship, Holy Word 中国布道会圣道堂 ECF HOLY WORD~Every Nation Church (Singapore)~Fairfield Methodist Church~Faith Assembly of God~Faith Bible Church Singapore~Faith Bible-Presbyterian Church~Faith Community Baptist Church (Jalan Bukit Merah) 坚信浸信教会 FCBC (Bukit Merah)~Faith Community Baptist Church (Marine Parade) 坚信浸信教会 FCBC (Marine Parade)~Faith Community Baptist Church (Suntec) 坚信浸信教会 FCBC (Suntec)~Faith Independent Baptist Church~Faith Methodist Church FMC~Faith Sanctuary~Family of Grace Evangelical Free Church~Far East Organisation~FEBA Ltd~First Evangelical Reformed Church~Focus on the Family~Foochow Methodist Church~Free Presbyterian Church of Scotland (Singapore)~Friendship Baptist Church~Friendship Baptist Church~Fruitful Vine Church~Full Gospel Assembly FGA~Full Gospel Businessmen Gatekeepers~Full Gospel Korean Church~Galilee Best Unity Church~Galilee Bible-Presbyterian Church~Gate Ministries Singapore GMS~German Speaking Protestant Congregation in Singapore~Gethsemane Bible-Presbyterian Church~Geylang Chinese Methodist Church~Geylang Evangelical Free Church GEFC~Geylang New Testament Church~GKY (Singapore) Church~Glad Tidings Church GTC~Glad Tidings Gateway~Global Harvesters Full Gospel Church~Glory Centre Church~Glory Joy Christian Church~Glory Korean Methodist Church (Singapore)~Glory Of God Church~Glory Presbyterian Church 新加坡基督教长老会荣耀堂 GPC~God's Kingdom Bread of Life Church 神国611灵粮堂 GK611~God's Place, Faith City Church (Singapore)~God@Work Church Singapore~Good Gifts City Church~Good News Baptist Church~Goshen International Ministries Limited~Gospel Baptist Church GBC~Gospel Light Bible- Presbyterian Church~Gospel Light Christian Church~Gospel of Jesus Ministries~Gospel Operation for Chinese Christians~Grace Assembly of God (Bukit Batok) Grace AG (Bt Batok)~Grace Assembly of God (Tanglin) Grace AG (Tanglin)~Grace Baptist Church 恩典浸信会 GBC~Grace Bible Church~Grace Bible-Presbyterian Church~Grace Christian Centre~Grace Communion Church~Grace Independent Baptist Church~Grace Jubilee Centre~Grace Methodist Church~Grace(Singapore Chinese Christian) Church~Great Commission Baptist Church~Great Shepherd Assembly of God~Hakka Methodist Church~Hankook Mission Church~Harborlight Church~Harvest Chinese Christian Church~Harvest Mission Community Church (Singapore)~Harvester Baptist Church~Harvester Community Church~Heart of God Church~Hearts Alive Church~Hebron Bible-Presbyterian Church~Hephzibah Christian Fellowship~Herald Bible-Presbyterian Church~Heritage Baptist Church~Hinghwa Methodist Church 卫理公会天道堂 HCMC~His Arrow Church~His Glorious Church~His Sanctuary 祂的圣殿 HS~History Maker International Church~Holland Village Methodist Church~Holy Covenant Methodist Church~Holy Grace Presbyterian Church~Holy Resurrection Orthodox Cathedral Singapore~Holy Trinity Church 圣三一堂 HTC~Hope Baptist Church~Hope Church Singapore 希望新加坡 HopeSG~Hope Presbyterian Church~Horizon Church and Ministries~Hosanna Assembly of God Church~Hosanna Baptist Church~Hougang Assembly of God Church~House of Grace HOG~House of Olive Leaf (Geylang Ministry)~House of the Lord Church~Huria Kristen Batak Protestant Singapore~Immanuel Christian Church~Immanuel Community Church~Immanuel Congregation (Singapore)~Immanuel Fellowship Singapore IFSg~Immanuel Mission Church~Impact Magazine~In Him Church~Inspire Church~International Baptist Church of Singapore IBC, IBCS~International Christian Mission Singapore~International Full Gospel Church~International Full Gospel Fellowship Singapore~International Japanese Church of Singapore~Interserve Singapore~Jeevan Apostolic Church~Jesus Baptist Asia Conference Church~Jesus Family Fellowship Community Church~Jesus Is Lord Church - Singapore JIL~Jesus Lives Church JLC~Jesus Loves You Fellowship~Jesus My King Church JMK~Jesus Reigns Ministries - Singapore JRM SG~Jesus Saves (S'pore) Ministry~Jesus The King Church~Jesus' Disciples Baptist Community Church~Jireh Bible-Presbyterian Church~Joshua Generation - Singapore JGS~Jubilee Assembly~Jubilee Church~Judson Baptist Church (Singapore)~Jurong Anglican Church (Mandarin)~Jurong Christian Church 裕廊基督教会 JCC~Jurong Tamil Methodist Church~Jurong West Emmanuel Bible-Presbyterian Church~Kachin Baptist Church (Singapore)~Kam Kwong Christian Church~Kampong Kapor Methodist Church 卫理公会甘榜加堂 KKMC~Karen Baptist Church (Singapore)~Katong Presbyterian Church 加东长老会 KPC~Kay Poh Road Baptist Church~Khush Kabri Fellowship~Kim Keat Christian Church~Kim Tian Christian Church~King of Glory Church - Bukit Batok KOG (Bukit Batok)~King of Glory Church - Katong KOG (Katong)~King of Glory Church - Norris Road KOG (Norris)~Kingdom Advance Community~Kingdom City Church~Kingdom Community Church 国渡家庭教会 KCC~Kingdom Life Church~Koinonia Mission Church~Korean Church in Singapore~Kum Yan Methodist Church 卫理公会感恩堂 感恩堂 KYMC~Landmark Church~Leng Kwang Baptist Church~Life Bible-Presbyterian Church~Lifeline Family Church~Lifeline Harvest Church~Lifelink Christian Church~LifeUnited Church~Light and Light Ye Su Church~Light at the Crossroads Church LCC~Light of Christ Church Woodlands LOCCW~Lighthouse Baptist Church~Lighthouse City Christ Fellowship Gathering~Lighthouse Evangelism (Tampines) 灯塔教会 LE (Tampines)~Lighthouse Evangelism (Woodlands) 灯塔教会 LE (Woodlands)~Live for Eternity Church~Living Faith Church~Living Faith International Church~Living Fountain Christian Church~Living Hope Methodist Church~Living Praise Presbyterian Church~Living Sanctuary Brethren Church 圣殿福音教会 LSBC~Living Spring Fellowship~Living Stones Church~Living Streams Christian Church~Living Water Fellowship~Living Waters Methodist Church~Local Church (Singapore)~Logos Christian Church~Love Singapore~Lutheran Church in Singapore~Lutheran Church of Our Redeemer 新加坡信义会救主堂 LCOR~Macedonia Bible-Presbyterian Church~Mar Thoma Syrian Church in Singapore~Maranatha Bible-Presbyterian Church~Maranatha Christian Assembly~Marine Parade Christian Centre 圣公会马林百列基督教会 MPCC~Marketplace Leaders~Members of Church of God International (Singapore) a.k.a Ang Dating Daan (The Old Path)~Methodist Church of the Incarnation 道生堂卫理公会 MCI~Methodist Missions Society~Mission Aviation Fellowship~Mizpah Prayer Fellowship~Moriah Assembly of God~Moriah Bible-Presbyterian Church~Mount Calvary Baptist Church~Mount Gerizim Bible Presbyterian Church~Mount Hermon Bible-Presbyterian Church~Mount Horeb Bible-Presbyterian Church~Mount Olives Church of God~Mustard Seed Community Church~My Lord's Church MLC~My Saviour’s Church MSC~Nazareth Bible-Presbyterian Church~Neighbourhood Church NC~Network of Filipino Churches in Singapore~New Apostolic Church (Singapore)~New Apostolic Revival Church (Singapore)~New Beginnings Ministries International~New Covenant Church~New Covenant Sanctuary~New Creation Church (Bayfront) 新造教会 NCC~New Creation Church (Kim Seng) 新造教会 NCC~New Creation Church (Punggol) 新造教会 NCC~New Creation Church (Sengkang) 新造教会 NCC~New Creation Church (Vista Exchange) 新造教会 NCC~New Creation Church (Woodlands) 新造教会 NCC~New Creation Church (Yishun) 新造教会 NCC~New Destiny Fellowship International NDFI~New Generation Church~New Hope Family Church (Venture) NHFC~New Hope Family Church (Verdun) NHFC~New Horizon Church NHC~New Life Baptist Church Ltd~New Life Christian Centre~New Life Christian Church~New Life Church Ltd~New Life Community Church~New Testament Baptist Church~Newton Life Church 纽顿生命堂 NLC~Norwegian Seamen's Mission, Singapore~OC Resources (Singapore)~Oikos Christian Church 亲邻基督教会 OCC~Olive Tree Faith Church~Olivet Bible-Presbyterian Church~OMF Singapore Ltd~One Ekklesia Church~Open Hand Christian Fellowship~Operation Hope Foundation~Operation Mobilisation (S) Ltd~Orchard Road Presbyterian Church ORPC~Our Church~Parish of Christ Church PCC~Parish of Dormition of Theotokos, The Russian Orthodox Church (Singapore)~Pasir Panjang Christ Church~Pasir Panjang Hill Brethren Church 巴西班让山福音堂 PPHBC~Pasir Panjang Tamil Methodist Church~Paya Lebar Chinese Methodist Church PLCMC~Paya Lebar Methodist Church~Peace Chapel~Peace Community Chapel~Pentecost Methodist Church 卫理公会五旬节堂 PMC~Pentecostal Christian Community~Pentecostal Missionary Church of Christ (4th Watch) (Singapore)~Petra Church~Philo Trust~Philos Assembly of God~Pilgrim Covenant Church~Pioneers InAsia (S) Ltd~Praise Evangelical Church PEC~Praise Evangelical Free Church~Prayer Castle Church~Prayer@Changi Cove~Prayer@Marketplace~Prinsep Street Presbyterian Church 长老会磐石堂 PSPC~Prison Fellowship Singapore Ltd~Providence Presbyterian Church Ltd 长老会恩泽堂武吉巴督聚会 PPCBB LTD~Providence Reformed Presbyterian Church~Queenstown Baptist Church 女皇镇浸信教会 QBC~Queenstown Chinese Methodist Church~Queenstown Lutheran Church 女皇镇信义会 QLC~Radiant Community Church~Rainbow Home Christian Church~Redeemed Christian Church of Singapore~Redeemer Baptist Church RBC~Redeemer's Church~Redemption Hill Church~Reformed Bible Presbyterian Church~Reformed Covenant Church~Reformed Evangelical Church (Singapore)~Rejoice Community Baptist Church~Renewal Christian Church (St Francis Church) 更新基督教会圣乔治 RCC St George's~Renewal Christian Church (Tah Ching Rd) 更新基督教会裕廊 RCC Jurong~Restoring The Foundations Asia Ptd Ltd~Revival Centre Church~Revival Fellowship Singapore~Revival Nation~Rhema Bible Training Center Singapore~Risen Grace Ministries~River Community Church~River Of Life Community Church 生命之河社区教会 ROLC~River of Living Waters Church~RiverLife Church 生命泉教会 RLC~RiverPlace Church RPC~Rivers of Life Church~Rock of Ages Church 永恒磐石教会 RAC~Royal Christian Church~Runners Church~RZIM Asia-Pacific~S-Word Evangelical Free Church~Saint Mark Coptic Orthodox Church Singapore~Salem Chapel 撒冷宣道所 Salem~Santiphap Church (Singapore)~Scripture Union Singapore~SEED Ministries Limited~Seletar Tamil Methodist Church~Sembawang Assembly of God 三巴旺神召会 SemAG~Sembawang Baptist Church~Sembawang Bible-Presbyterian Church~Sembawang Presbyterian Church~Sembawang Tamil Methodist Church~Sengkang Methodist Church SKMC~Shaddai Baptist Church~Shalom Baptist Chapel 平安浸信教会 SBC~Shalom Bible-Presbyterian Church~Shalom Church, Singapore~Shammah Prayer House JB~Sharon Bible-Presbyterian Church~Shekinah Assembly Of God~Shekinah Foursquare Gospel Church~Shekinah Harvest Church~Shekinah Joy Church~Shelter Baptist Church~Shepherd's Assembly SA~SIM East Asia Ltd~Singapore Anglican Community Services~Singapore Baptist Church~Singapore Bible Baptist Church~Singapore Bible College~Singapore Centre for Global Missions~Singapore Charismatic Church~Singapore Christian Canaan Church 新加坡基督教迦南堂 SCCC~Singapore Council of Christian Churches~Singapore Japanese Christian Fellowship~Singapore Life Church SLC~Singapore Telugu Methodist Church~Singapore Thomson Road Baptist Church~Singapore Youth For Christ~Sion Christian Church~Smyrna Assembly - Pasir Ris~Smyrna Assembly - Tuas~Smyrna Assembly - Yishun~Soakability Church~SOOGI Therapeutic Services and Psychosocial Development~South Asian International Fellowship~Spiritual Grace Presbyterian Church~St Andrew's Cathedral 圣安德烈座堂 SAC~St Andrew's City Church 圣安德烈城市堂 SACTC~St Andrew's Community Chapel~St George's ChurchTanglin SGC~St Hilda's Church 圣 希 达 堂 SHC~St James' Church 圣公会圣雅各堂 SJC~St John's Chapel 圣约翰堂 SJCp~St John's St Margaret's Church SJSM~St Mary's Jacobite Syrian Cathedral~St Matthew's Church 圣马太堂 SMC~St Paul's Church 圣保罗教会 SPC~St Peter's Church~St Thomas Orthodox Syrian Cathedral~St. Andrew's Community Hospital/Mission Hispital~Student Volunteer Movement 2~T.H.I.R.S.T.Y. Church~Tabernacle Baptist Church~Tabernacle Bible Presbyterian Church~Tabernacle of Christ~Tabernacle of Holiness Church Ltd~Tai Seng Christian Church 大成基督教会 TSCC~TCA College~Telok Ayer Chinese Methodist Church (TACMC - TA1) 卫理公会直落亚逸礼拜堂 TACMC (Telok Ayer Street)~Telok Ayer Chinese Methodist Church （Wishart Road） 卫理公会直落亚逸礼拜堂 TACMC (Wishart)~Telugu Christian Gospel Church~Thai Good News Centre~The Ark Church~The Bible Church Singapore 圣经教会，新加坡 TBC~The Christian Church In Singapore~The Covenant Evangelical Reformed Church (CERC)~The Free Christian Church of Singapore~The Grace (Singapore Chinese Christian) Church~The Harvest Force~The House of Prayer~The Life Church and Missions~The Living Way Church Ltd~The Living Word Fellowship TLWF~The Mennonite Church (Singapore)~The Methodist Church in Singapore~The Navigators Singapore~The New Church 新教会 TNC~The Patria Church~The Pentecostal Church of Singapore~The People's Bible Church TPBC~The People's Church~The Peoples Presbyterian Church~The Presbyterian Church in Singapore~The Presbyterian Church in Singapore Sion Church Bedok 长老会郇山堂 Sion Church Bedok 郇山堂~The Salvation Army~The Salvation Army - Balestier Corps~The Salvation Army - Bishan Chinese Corps~The Salvation Army - Changi Corps~The Salvation Army - Eratchippu Corps~The Salvation Army - Singapore Central Corps~The Salvation Army - William Booth Corps~The Vine Church~The Way Church TWC~Thir.st~Thirst Collective Ltd~Thirsty Church 思慕教会 T.H.I.R.S.T.Y.~Thomson Road Baptist Church 淡申律浸信教会 TRBC~Thunder Quote~Toa Payoh Chinese Methodist Church~Toa Payoh Methodist Church TPMC~Toong Chai English Presbyterian Church~Toong Chai Presbytarian Church~Touch Community Services~Tree of Life Christian Church~Trinity Christian Centre (All)~Trinity Methodist Church~Trinity Theological College~Triumphs of His Grace~True Grace Presbyterian Church~True Jesus Church (Adam Road)~True Jesus Church (Sembawang)~True Jesus Church (Telok Kurau)~True Life Bible-Presbyterian Church~True Vine Church~True Way Presbyterian Church TWPC-EC~Truth Baptist Church~Truth Bible-Presbyterian Church~Tung Ling Bible School~TWR Asia (Trans World Radio Asia)~Victory Baptist Church~Victory Church~Victory Family Centre (Choa Chu Kang) 胜利家庭中心 VFC (Choa Chu Kang)~Victory Family Centre (Jalan Bukit Merah) 胜利家庭中心 VFC (Bukit Merah)~Victory Family Centre (Jurong West) 胜利家庭中心 VFC (Jurong West)~Victory Family Centre (Palm) 胜利家庭中心 VFC (Palm)~Victory Family Centre (Sembawang) 胜利家庭中心 VFC (Sembawang)~Victory Family Centre (Tampines) 胜利家庭中心 VFC (Tampiness)~Victory Family Centre (Toa Payoh) 胜利家庭中心 VFC (Toa Payoh)~Victory Harvest Church~Vietnamese Evangelical Church~Vision Church Ltd~Watchman's Church Ltd~WEC International (S) Ltd~Wesley Methodist Church~Woodlands Evangelical Free Church WEFC~Word Community Church 建道基督教会 WORD~Word International Ministries - Singapore~Word of Life Church WOL~Word of Life Family Centre~Word, Life and Faith Center~World Missions Organisation WMO~World Outreach~World Revival Prayer Fellowship WRPF~World Vision Singapore~Wycliffe Bible Translators (S) Ltd~X-Pact Society~Yahweh Fellowship YF~Yio Chu Kang Chapel YCKC~Yio Chu Kang Gospel Hall~Yishun Christian Church (Anglican) 义顺基督教会（圣公会） YCCA~Yishun Christian Church (Lutheran)~Yishun Evangelical Church~Yishun Methodist Mission 义顺卫理北宣堂 YMM~Young Men's Christian Association (Singapore)~Youth With a Mission Training Centre~Yung Kwang Presbyterian Church~Zhan Xin Christian Church~Zion Bishan Bible-Presbyterian Church 笃信圣经长老会碧山协恩堂~Zion Full Gospel Church 锡安全备福音教会~Zion Gospel Mission~Zion Living Streams Community Church~Zion Presbyterian Church~Zion Serangoon Bible-Presbyterian Church";

    // Prepare the html string
    var options = '<option value="">Choose...</option>';

    // Split the churches
    churches = churches.split('~');

    // Loop through the churches
    for (var i in churches) {
      options += '<option value="' + churches[i] + '">';
      options += churches[i];
      options += '</option>';
    }

    // Append the options
    $('#churchNameFriend')
      .append(options)
      .removeClass('custom-select')
      .selectpicker();   
  }

  // Load the churches
  function loadChurches() {
    // Prepare the data
    var parameters = {
      'UserName': '',
      'Password': ''
    };
    parameters = JSON.stringify(parameters);

    // Display loading first
    loadModal();

    // Login first to get the access token
    $.ajax({
        type: 'POST',
        url: url + 'login',
        headers: headers,
        data: parameters,
        timeout: 60000
    })
    .done(function(data) {
      // Now load the churches
      $.ajax({
          type: 'GET',
          url: url + 'churches?AccessToken=' + data.AccessToken,
          headers: headers,
          timeout: 60000
      })
      .done(function(data) {
        // Sort the data first
        data = data.sort((a, b) => (a.Name > b.Name) ? 1 : -1);

        // Prepare the html string
        var options = '<option value="">Choose...</option>';
        options += '<option value="Don\'t know">Don\'t know</option>';
        options += '<option value="Others">Others</option>';

        // Loop through the churches
        for (var i in data) {
          options += '<option value="' + data[i].Name + '">';
          options += data[i].Name;
          options += (data[i].ChurchAbbreviation ? ' - ' + data[i].ChurchAbbreviation : '');
          options += (data[i].ChurchChineseName != 'N/A' ? ' - ' + data[i].ChurchChineseName : '');
          options += '</option>';
        }

        // Append the options
        $('#churchNameFriend')
          .append(options)
          .removeClass('custom-select')
          .selectpicker();   

        // Hide the modal
        clearModal(true);    
      })
      .fail(function(error) {
          infoModal('Failed', 'Unable to load the churches.', false);
      });
    })
    .fail(function(error) {
        infoModal('Failed', 'Unable to load the churches.', false);
    });
  }

  // Display info modal
  function infoModal(title, message, final) {
    $('#modalTitle').html(title);
    $('#modalMessageBody').html(message);
    $('#modalHeader').removeClass('d-none');
    $('#modalMessageBody').removeClass('d-none');

    if (final) {
      $('#modalSuccess').removeClass('d-none');
    } else {
      $('#modalFooter').removeClass('d-none');
    }
    
    $('#modalDialog').modal('show');
  }

  // Generate loading modal
  function loadModal() {
    $('#modalMessageBody').html('Loading');
    $('#modalMessageBody').removeClass('d-none');
    $('#modalLoadingBody').removeClass('d-none');
    $('#modalDialog').modal('show');
  }

  // Clear the modal form
  function clearModal(hide) {
    $('#modalTitle').html('');
    $('#modalMessageBody').html('');
    $('#modalHeader').addClass('d-none');
    $('#modalMessageBody').addClass('d-none');
    $('#modalLoadingBody').addClass('d-none');
    $('#modalFooter').addClass('d-none');

    if (hide) {
      $('#modalDialog').modal('hide');
    }
  }

})();