app.controller('bookController',['$scope',function($scope){
  $scope.bookTypes = [
    {id:'art',name:'艺术',imgurl:'http://img0.imgtn.bdimg.com/it/u=1877885148,372723708&fm=21&gp=0.jpg',describtion:'开启你的艺术之路'},
    {id:'guji',name:'古书',imgurl:'http://img0.imgtn.bdimg.com/it/u=2528215503,3232759633&fm=21&gp=0.jpg',describtion:'品古书 养身心'},
    {id:'history',name:'历史',imgurl:'http://img4.imgtn.bdimg.com/it/u=3560362969,3375260239&fm=21&gp=0.jpg',describtion:'以史为镜,可以知兴衰'},
    {id:'tiyu',name:'体育',imgurl:'http://img3.imgtn.bdimg.com/it/u=1218229652,2037700297&fm=21&gp=0.jpg',describtion:'锻炼是人健康'},
    {id:'novle',name:'小说',imgurl:'http://img2.imgtn.bdimg.com/it/u=3818129697,640258515&fm=21&gp=0.jpg',describtion:'看看小说依依情'},
    {id:'xinli',name:'心理学',imgurl:'http://img5.imgtn.bdimg.com/it/u=1182671839,1226398144&fm=21&gp=0.jpg',describtion:'我已经看透你了'},
    {id:'yangshen',name:'养生',imgurl:'http://img3.imgtn.bdimg.com/it/u=2441600923,3934691946&fm=21&gp=0.jpg',describtion:'养生之道'},
  ];
}]);