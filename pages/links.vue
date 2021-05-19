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
          title: 'myemie-bilibili-channel',
          url: 'https://space.bilibili.com/2080163552',
          tr: {
            zh: '么耶咩咩咩的Bilibili频道',
            en: "Myemie's Bilibili Channel",
            ja: 'ひつじちゃんのビリビリチャンネル'
          },
          color: 'light-blue',
          emoji: '🐏'
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
