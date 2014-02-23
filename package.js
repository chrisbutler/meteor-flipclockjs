Package.describe({
  summary: "FlipClock.js for meteor"
});

Package.on_use(function (api, where) {
  api.add_files(['FlipClock/compiled/flipclock.css', 'FlipClock/compiled/flipclock.min.js'], ['client']);
});
