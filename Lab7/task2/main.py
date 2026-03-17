from models import Car, Airplane

tesla = Car("Tesla", "Model 3", 2022, 4)
boeing = Airplane("Boeing", "737", 2019, 12500)

vehicles = [tesla, boeing]

for v in vehicles:
    print(v)
    print(v.start())
    print(v)

    if isinstance(v, Car):
        print(v.honk())
    elif isinstance(v, Airplane):
        print(v.take_off())

    v.stop()
    print(v)
    print("-" * 20)