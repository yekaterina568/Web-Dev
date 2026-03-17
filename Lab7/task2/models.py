class Vehicle:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
        self.engine_on = False

    def start(self):
        self.engine_on = True
        return f"{self.brand} {self.model} engine started."

    def stop(self):
        self.engine_on = False
        return f"{self.brand} {self.model} engine stopped."

    def __str__(self):
        status = "on" if self.engine_on else "off"
        return f"{self.year} {self.brand} {self.model} (engine: {status})"


class Car(Vehicle):
    def __init__(self, brand, model, year, num_doors):
        super().__init__(brand, model, year)
        self.num_doors = num_doors

    def start(self):
        self.engine_on = True
        return f"{self.brand} {self.model} is ready to go."

    def honk(self):
        return f"{self.model} goes beep beep!"


class Airplane(Vehicle):
    def __init__(self, brand, model, year, max_altitude):
        super().__init__(brand, model, year)
        self.max_altitude = max_altitude

    def start(self):
        self.engine_on = True
        return f"{self.brand} {self.model} turbines are spinning up."

    def take_off(self):
        return f"{self.model} is taking off. Max altitude: {self.max_altitude}m."