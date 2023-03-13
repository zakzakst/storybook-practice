<template>
  <ul class="icon-list">
    <li class="icon-list__item">
      <IconCard label="メール" description="メール送信／受信については別のアイコンがあります" @click="onClick">
        <IconMail />
      </IconCard>
    </li>
    <li class="icon-list__item">
      <IconCard label="ニュース" description="運営からユーザーへ連絡する場面では「お知らせ」アイコンを利用してください" @click="onClick">
        <IconNews />
      </IconCard>
    </li>
  </ul>
</template>

<script setup lang="ts">
import IconCard from './IconCard.vue'
import IconMail from '../../../components/atoms/icons/IconMail.vue'
import IconNews from '../../../components/atoms/icons/IconNews.vue'
// 下記記述方法でtypescriptエラー発生（型宣言が見つからない）
// import IconMail from '../../../assets/icons/mail.svg'

const onClick = (description: string) => {
  alert(description)
}
</script>

<style lang="scss" scoped>
$BLOCK_NAME: '.icon-list';

#{ $BLOCK_NAME } {
  display: flex;
  gap: 8px;
}
</style>
