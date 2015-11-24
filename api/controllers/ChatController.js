/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 

var matchColors = ['#c29382','#edb2a2','#c2a582','#c2bd82','#dfbd88','#afc282','#82c299','#82bec2','#c282a5','#cfb3c2',
                  '#ff5722','#ff9800','#009688','#ffc107','#8bc34a','#f44336','#3f51b5','#e91e63','#ffeb3b','#cddc39',
                  '#ffab91','#c5e1a5','#ef9a9a','#ffe082','#e6ee9c','#80cbc4','#fff59d','#ef9a9a','#bcaaa4','#80deea',
                  '#ef5350','#7e57c2','#ec407a','#ab47bc','#26a69a','#66bb6a','#d4e157','#9ccc65','#ffee58','#ffca28',
                  '#ffab91','#c5e1a5','#ef9a9a','#ffe082','#e6ee9c','#80cbc4','#fff59d','#ef9a9a','#bcaaa4','#80deea'];

module.exports = {

  
  'send': function(req, res) {
    sails.sockets.blast('msg', {
      user: req.param('user'),
      content: req.param('content')
    });
    /*Game.findOne({id: req.param('gid')})
    .exec(function(err, ga) {
      var pid = Number(req.param('pid'));
      // 當還有下一位時，next為下一位的編號，沒有時為0
      //var next = pid < ga.count ? pid + 1 : 0;
      var next = pid < ga.count - 1 ? pid + 1 : 0;
      var color = matchColors[pid - 1] ? matchColors[pid - 1] : '#f99'

      var rolldata = {
        self: pid,
        target: ga.match[pid - 1],
        next: next,
        color: color
      }

      if (next == 0) {
        rolldata.self2 = pid + 1;
        rolldata.target2 = ga.match[pid];
        rolldata.color2 = matchColors[pid] ? matchColors[pid] : '#f99';
      }

      sails.sockets.broadcast('game_' + req.param('gid'), 'onroll', rolldata);
    });
    */
  }
  
  
};