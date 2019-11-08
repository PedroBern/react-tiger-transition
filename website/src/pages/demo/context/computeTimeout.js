export default (args, enter, exit) => (
  args.duration && args.delay ? args.duration + args.delay :
  args.duration && enter.delay ? args.duration + enter.delay :
  args.duration ? args.duration :
  enter.duration >= exit.duration ? enter.duration + enter.delay :
  enter.duration + enter.delay >= exit.duration ? enter.duration + enter.delay :
  exit.duration
)
