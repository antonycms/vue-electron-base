<template>
  <div class="about">
    <button @click="teste">Teste</button>
  </div>
</template>

<script>
import callBackend from '@/frontend/utils/callBackend';

export default {
  methods: {
    async teste() {
      const a = await callBackend({ eventName: 'mensagem', data: 'Ola mundo' });

      console.log(a);
    },
  },
};
</script>
