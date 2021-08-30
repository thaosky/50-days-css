##Day 1
- Ý tưởng expanding image: tất cả các image set flex-grow = 1, image active set flex-grow = 5
- background-size => chỉ ra kích thước của ảnh đặt làm background size
    + background-size: a b => thuộc tính thứ nhất chỉ chiều rộng, thuộc tính thứ 2 chỉ chiều cao
    + background-size: cover => width = 100% div cha, height: auto
    + background-size: contain => height = 100% div cha, width auto
-  background-size => vị trí của ảnh đặt làm background
- flex: shorthand của 3 thuộc tính  flex-grow | flex-shrink | flex-basis. (tất cả mình đang xét trên flex-direction: row)
    + khi sử dụng display: flex ở phần tử cha, các phần tử con sẽ tự thêm vào thuộc tính như sau flex: .... mình quên rồi. 
    + flex-basis: sử dụng ở phần tử con, set chiều rộng cho phần tử con theo đơn vị tuyệt đối. Vd 120px
    + flex-grow: sử dụng ở phần tử con, set chiều rộng cho phần tử con theo tỉ lệ với độ rộng của phần tử cha. Ví dụ có 3 phần tử: flex basis lần lượt là 1 3 2. Thì tổng chiều rộng của phần tử cha chia làm 6 phần, phần tử 1 1 phần, phần tử 2 3 phần, phần tử 3 2 phần.
    + flex-shrink: cho phép các phần tử co lại khi độ rộng container giảm xuống. Cái này mình chưa dùng bh
