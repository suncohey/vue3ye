
import { showLoadingToast } from 'vant';

export function test () {
    showLoadingToast({
      message: '加载中...',
      duration: 0,
      forbidClick: true
    });
  }