export default (tiger, args, enter, exit) => {
  if (tiger === 'flip') {
    enter.delay = args.duration * 2
  }
  args.duration && args.delay ? args.duration + args.delay :
  args.duration && enter.delay ? args.duration + enter.delay :
  args.duration ? args.duration :
  enter.duration >= exit.duration ? enter.duration + enter.delay :
  enter.duration + enter.delay >= exit.duration ? enter.duration + enter.delay :
  exit.duration
}
