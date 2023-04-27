const OBJEKTUMLISTA=[
    {nev:"I7",fajta: "processor", ar: 19000, kep: "Kepek/i7.jfif"},
    {nev:"RISEN", fajta: "processor", ar: 10000, kep: "Kepek/rog.jfif"},
    {nev: "ASUS", fajta: "videokartya", ar: 19500, kep: "Kepek/asus.jpg"},
    {nev: "NVDIA", fajta: "videokartya", ar: 20000, kep: "Kepek/nvidia.jpg"},
    
]
const OBJEKTUMLISTA1=[
    {nev:"I7",fajta: "processor", ar: 19000, kep: "Kepek/i7.jfif"}
    
    
]
const OBJEKTUMLISTA2=[
]


QUnit.module("Admin felületen adatok megjelenése ", function () {
    QUnit.test("osszealit letezik e", function(assert) {
        assert.ok(osszealit(OBJEKTUMLISTA), "Létezik a osszeealit");
      }); 

    QUnit.test("osszealit fügvény e", function(assert) {
        assert.ok(typeof osszealit(OBJEKTUMLISTA) == "function", "a leptetes fuggvény");
      });
      QUnit.test("megjelenit ures sor", function(assert) {
        assert.ok(osszealit(OBJEKTUMLISTA2), "<table class=table text-white><thead><th>Name</th><th>Type</th><th>Price</th><th>Image</th><th></th></thead><tbody></tbody></table>");
      });
      QUnit.test("megjelenit egy sor", function(assert) {
        assert.ok(osszealit(OBJEKTUMLISTA1), "<table class=table text-white><thead><th>Name</th><th>Type</th><th>Price</th><th>Image</th><th></th></thead><tbody><tr id=0><td>I7</td><td>processor</td><td>19000</td><td><img src=Kepek/i7.jfif alt=item image class=img-fluid></td><td><button class=btn btn-danger delete>Delete</button></td></tr></tbody></table>");
      });
      QUnit.test("megjelenit n sor", function(assert) {
        assert.ok(osszealit(OBJEKTUMLISTA), "<table class=table text-white><thead><th>Name</th><th>Type</th><th>Price</th><th>Image</th><th></th></thead><tbody><tr id=0><td>I7</td><td>processor</td><td>19000</td><td><img src=Kepek/i7.jfif alt=item image class=img-fluid></td><td><button class=btn btn-danger delete>Delete</button></td></tr><tr id=><td>RISEN</td><td>processor</td><td>10000</td><td><img src=Kepek/rog.jfif alt=item image class=img-fluid></td><td><button class=btn btn-danger delete>Delete</button></td></tr><tr id=><td>ASUS</td><td>videokartya</td><td>19500</td><td><img src=Kepek/asus.jpg alt=item image class=img-fluid></td><td><button class=btn btn-danger delete>Delete</button></td></tr><tr id=><td>NVDIA</td><td>videokartya</td><td>20000</td><td><img src=Kepek/nvidia.jpg alt=item imageclass=img-fluid></td><td><button class=btn btn-danger delete>Delete</button></td></tr></tbody></table>");
      });
})
QUnit.module("public felületen adatok megjelenése ", function () {
    QUnit.test("osszealit letezik e", function(assert) {
        assert.ok(osszealit(OBJEKTUMLISTA), "Létezik a osszeealit");
      }); 

    QUnit.test("osszealit fügvény e", function(assert) {
        assert.ok(typeof osszealit(OBJEKTUMLISTA) == "function", "a leptetes fuggvény");
      });
})

QUnit.module("Törlés fügvény", function () {
    QUnit.test("delete_user letezik e", function(assert) {
        assert.ok(delete_user(), "Létezik a osszeealit");
      }); 

    QUnit.test("osszealit fügvény e", function(assert) {
        assert.ok(delete_user() == "function", "a leptetes fuggvény");
      });
})