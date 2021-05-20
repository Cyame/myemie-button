<template>
  <v-layout>
    <v-flex>
      <v-card :loading="loading">
        <v-card-title>{{ $t('site.links') }}</v-card-title>
        <v-card-text>
          <div style="width: 768px;">
            <a v-for="item in links" :key="item.title" :href="item.url" target="_blank">
              <voice-btn :large="true" class="link-button white--text" :class="item.color" :emoji="item.emoji">
                {{ item.tr[current_locale] }}
              </voice-btn>
            </a>
          </div>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import VoiceBtn from '../components/VoiceBtn';
export default {
  components: {
    VoiceBtn
  },
  data() {
    return {
      links: [
        {
          title: 'sakula-bilibili-channel',
          url: 'https://space.bilibili.com/264161',
          tr: {
            zh: 'Sakula小舞的Bilibili频道',
            en: "Sakula MAI's Bilibili Channel",
            ja: 'さくら舞のビリビリチャンネル'
          },
          // Vuetify Color
          color: 'pink lighten-2',
          emoji: '🌸'
        },
        {
          title: 'sakula-weibo',
          url: 'https://weibo.com/sakulamai',
          tr: {
            zh: 'Sakula小舞的新浪微博',
            en: "Sakula MAI's Weibo",
            ja: 'さくら舞のブログ'
          },
          color: 'pink lighten-2',
          emoji: '🌸'
        },
        {
          title: 'sakula-bilibili-live',
          url: 'https://live.bilibili.com/837039',
          tr: {
            zh: 'Sakula小舞的直播间',
            en: "Sakula MAI's Bilibili Livestream",
            ja: 'さくら舞の配信場所'
          },
          color: 'pink lighten-2',
          emoji: '🌸'
        },
        {
          title: 'saku-bilibili-channel',
          url: 'https://space.bilibili.com/381439252',
          tr: {
            zh: '兰笛Saku的Bilibili频道',
            en: "Saku's Bilibili Channel",
            ja: 'さくちゃんのビリビリチャンネル'
          },
          color: 'indigo darken-4',
          emoji: '🧝‍'
        },
        {
          title: 'saku-weibo',
          url: 'https://www.weibo.com/u/7599721451',
          tr: {
            zh: '兰笛Saku的新浪微博',
            en: "Saku's Weibo",
            ja: 'さくちゃんのビリビリチャンネル'
          },
          color: 'indigo darken-4',
          emoji: '🧝'
        },
        {
          title: 'saku-bilibili-live',
          url: 'https://live.bilibili.com/23031625',
          tr: {
            zh: '兰笛Saku的直播间',
            en: "Saku's Bilibili Channel",
            ja: 'さくちゃんのビリビリ配信場所'
          },
          color: 'indigo darken-4',
          emoji: '🧝'
        },
        {
          title: 'yuiyy-bilibili-channel',
          url: 'https://space.bilibili.com/1308967115',
          tr: {
            zh: '鱼一YY的Bilibili频道',
            en: "Myemie's Bilibili Channel",
            ja: '么耶咩咩咩のビリビリチャンネル'
          },
          color: 'blue-grey darken-3',
          emoji: '🐟'
        },
        {
          title: 'yuiyy-weibo',
          url: 'https://www.weibo.com/u/1763659747',
          tr: {
            zh: '鱼一YY的新浪微博',
            en: "Myemie's Bilibili Channel",
            ja: '么耶咩咩咩のビリビリチャンネル'
          },
          color: 'blue-grey darken-3',
          emoji: '🐟'
        },
        {
          title: 'yuiyy-bilibili-live',
          url: 'https://live.bilibili.com/23029299',
          tr: {
            zh: '鱼一YY的Bilibili直播间',
            en: "Myemie's Bilibili Channel",
            ja: '么耶咩咩咩のビリビリ配信場所'
          },
          color: 'blue-grey darken-3',
          emoji: '🐟'
        },
        {
          title: 'douya-bilibili-channel',
          url: 'https://space.bilibili.com/323153',
          tr: {
            zh: '小豆芽爱雪璃的Bilibili频道',
            en: "Sherri's Bilibili Channel",
            ja: 'シェリーのビリビリチャンネル'
          },
          color: 'light-green darken-2',
          emoji: '🌱'
        },
        {
          title: 'douya-weibo',
          url: 'https://www.weibo.com/u/6332902309',
          tr: {
            zh: '小豆芽爱雪璃的新浪微博',
            en: "Sherri's Bilibili Channel",
            ja: 'シェリーのブログ'
          },
          color: 'light-green darken-2',
          emoji: '🌱'
        },
        {
          title: 'douya-bilibili-live',
          url: 'https://live.bilibili.com/609304',
          tr: {
            zh: '小豆芽爱雪璃的Bilibili直播间',
            en: "Sherri's Bilibili Channel",
            ja: 'シェリーのビリビリ配信場所'
          },
          color: 'light-green darken-2',
          emoji: '🌱'
        },
        {
          title: 'nicole-bilibili-channel',
          url: 'https://space.bilibili.com/1689182622',
          tr: {
            zh: '夏南柯Nicole的Bilibili频道',
            en: "Nicole's Bilibili Channel",
            ja: 'Nicoleのビリビリチャンネル'
          },
          color: 'light-blue darken-2',
          emoji: '🎸'
        },
        {
          title: 'nicole-bilibili-channel',
          url: 'https://www.weibo.com/u/7600515328',
          tr: {
            zh: '夏南柯Nicole的新浪微博',
            en: "Nicole's Bilibili Channel",
            ja: 'Nicoleのビリビリチャンネル'
          },
          color: 'light-blue darken-2',
          emoji: '🎸'
        },
        {
          title: 'nicole-bilibili-channel',
          url: 'https://live.bilibili.com/23050938',
          tr: {
            zh: '夏南柯Nicole的Bilibili直播间',
            en: "Nicole's Bilibili Channel",
            ja: 'Nicoleのビリビリ配信場所'
          },
          color: 'light-blue darken-2',
          emoji: '🎸'
        },
        {
          title: 'bambi-youtube-channel',
          url: 'https://www.youtube.com/channel/UC2fHpw91UgQXhwarJIieptA',
          tr: {
            zh: 'Bambi的YouTube频道',
            en: "Bambi's Bilibili Channel",
            ja: 'Bambiのビリビリチャンネル'
          },
          color: 'red darken-4',
          emoji: '🦌'
        },
        {
          title: 'bambi-twitter-homepage',
          url: 'https://twitter.com/bambi_0812',
          tr: {
            zh: 'Bambi的Twitter主页',
            en: "Bambi's Twitter Timeline",
            ja: 'Bambiのツイッター'
          },
          color: 'red darken-4',
          emoji: '🦌'
        }
      ],
      loading: true
    };
  },
  computed: {
    current_locale() {
      return this.$i18n.locale;
    }
  },
  mounted() {},
  methods: {
    shuffle(array) {
      //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
      return array;
    }
  }
};
</script>
