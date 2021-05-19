<template>
  <v-layout>
    <v-flex>
      <v-card :loading="loading">
        <v-card-title>{{ $t('site.links') }}</v-card-title>
        <v-card-text>
          <a v-for="item in links" :key="item.title" :href="item.url" target="_blank">
            <voice-btn :large="true" class="link-button white--text" :class="item.color" :emoji="item.emoji">
              {{ item.tr[current_locale] }}
            </voice-btn>
          </a>
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
          title: 'myemie-bilibili-channel1',
          url: 'https://space.bilibili.com/2080163552',
          tr: {
            zh: 'Sakula小舞的Bilibili频道',
            en: "Myemie's Bilibili Channel",
            ja: 'ひつじちゃんのビリビリチャンネル'
          },
          color: 'light-blue',
          emoji: '🐏'
        },
        {
          title: 'myemie-bilibili-channel2',
          url: 'https://space.bilibili.com/2080163552',
          tr: {
            zh: 'Sakula小舞的新浪微博',
            en: "Myemie's Bilibili Channel",
            ja: 'ひつじちゃんのビリビリチャンネル'
          },
          color: 'light-blue',
          emoji: '🐏'
        },
        {
          title: 'myemie-bilibili-channel3',
          url: 'https://space.bilibili.com/2080163552',
          tr: {
            zh: '兰笛Saku的Bilibili频道',
            en: "Myemie's Bilibili Channel",
            ja: 'ひつじちゃんのビリビリチャンネル'
          },
          color: 'light-blue',
          emoji: '🐏'
        },
        {
          title: 'myemie-bilibili-channel4',
          url: 'https://space.bilibili.com/2080163552',
          tr: {
            zh: '兰笛Saku的新浪微博',
            en: "Myemie's Bilibili Channel",
            ja: 'ひつじちゃんのビリビリチャンネル'
          },
          color: 'light-blue',
          emoji: '🐏'
        },
        {
          title: 'myemie-bilibili-channel5',
          url: 'https://space.bilibili.com/2080163552',
          tr: {
            zh: '鱼一YY的Bilibili频道',
            en: "Myemie's Bilibili Channel",
            ja: 'ひつじちゃんのビリビリチャンネル'
          },
          color: 'light-blue',
          emoji: '🐏'
        },
        {
          title: 'myemie-bilibili-channel6',
          url: 'https://space.bilibili.com/2080163552',
          tr: {
            zh: '小豆芽爱雪璃的Bilibili频道',
            en: "Myemie's Bilibili Channel",
            ja: 'ひつじちゃんのビリビリチャンネル'
          },
          color: 'light-blue',
          emoji: '🐏'
        },
        {
          title: 'myemie-bilibili-channel7',
          url: 'https://space.bilibili.com/2080163552',
          tr: {
            zh: '夏南柯Nicole的Bilibili频道',
            en: "Myemie's Bilibili Channel",
            ja: 'ひつじちゃんのビリビリチャンネル'
          },
          color: 'light-blue',
          emoji: '🐏'
        },
        {
          title: 'myemie-bilibili-channel8',
          url: 'https://space.bilibili.com/2080163552',
          tr: {
            zh: '夏南柯Nicole的新浪微博',
            en: "Myemie's Bilibili Channel",
            ja: 'ひつじちゃんのビリビリチャンネル'
          },
          color: 'light-blue',
          emoji: '🐏'
        },
        {
          title: 'myemie-bilibili-channel9',
          url: 'https://space.bilibili.com/2080163552',
          tr: {
            zh: 'Bambi的YouTube频道',
            en: "Myemie's Bilibili Channel",
            ja: 'ひつじちゃんのビリビリチャンネル'
          },
          color: 'light-blue',
          emoji: '🦌'
        },
        {
          title: 'myemie-bilibili-channel10',
          url: 'https://space.bilibili.com/2080163552',
          tr: {
            zh: 'Bambi的Twitter主页',
            en: "Myemie's Bilibili Channel",
            ja: 'ひつじちゃんのビリビリチャンネル'
          },
          color: 'light-blue',
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
