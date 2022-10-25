<script lang="ts" setup>
import { onLaunch } from '@dcloudio/uni-app';
import { useUserStore } from '@/store/modules/user';

const userStore = useUserStore();
const { InitUser } = userStore;

onLaunch(() => {
	InitUser();
});
</script>

<style>
/*每个页面公共css */
@import url('common/common.css');
@import url('common/uni.css');
</style>
