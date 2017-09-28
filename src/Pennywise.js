export default THREE => {
    // material
    const black = new THREE.MeshPhongMaterial({
        color: '#000000',
    });
    const blue = new THREE.MeshPhongMaterial({
        color: '#5ba7bf',
    });
    const red = new THREE.MeshPhongMaterial({
        color: '#9b2525',
    });
    const white = new THREE.MeshPhongMaterial({
        color: '#ffffff',
    });
    const group_head = new THREE.Group();

    const bloc_head = new THREE.Mesh(new THREE.BoxGeometry(30, 30, 20), white);

    group_head.add(bloc_head);

    const group_eye_left = new THREE.Group();
    const eye_border = new THREE.Mesh(new THREE.CircleGeometry(4, 25), black);
    const eye_sclera = new THREE.Mesh(new THREE.CircleGeometry(3.5, 25), white);
    const eye_iris = new THREE.Mesh(new THREE.CircleGeometry(2, 25), blue);
    const eye_pupil = new THREE.Mesh(new THREE.CircleGeometry(1, 25), black);

    group_eye_left.add(eye_border);
    group_eye_left.add(eye_sclera);
    group_eye_left.add(eye_iris);
    group_eye_left.add(eye_pupil);
    eye_border.position.z = .2;
    eye_sclera.position.z = .3;
    eye_iris.position.z = .4;
    eye_pupil.position.z = .5;

    const group_eye_right = group_eye_left.clone();

    const group_line_up1 = new THREE.Group();
    const line1 = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.5), red);
    const line2 = new THREE.Mesh(new THREE.PlaneGeometry(0.2, 0.5), red);
    const line3 = new THREE.Mesh(new THREE.PlaneGeometry(0.3, 0.5), red);
    const line4 = new THREE.Mesh(new THREE.PlaneGeometry(0.4, 0.5), red);
    const line5 = new THREE.Mesh(new THREE.PlaneGeometry(0.5, 0.75), red);

    group_line_up1.add(line1);
    group_line_up1.add(line2);
    line2.position.y = -0.5 ;
    group_line_up1.add(line3);
    line3.position.y = -1 ;
    group_line_up1.add(line4);
    line4.position.y = -1.5 ;
    group_line_up1.add(line5);
    line5.position.y = -2 ;

    group_head.add(group_eye_left);
    group_head.add(group_eye_right);
    group_head.add(group_line_up1);
    group_eye_left.position.set(-8, 6.5, 10.1);
    group_eye_right.position.set(8, 6.5, 10.1);
    group_line_up1.position.set(8, 13.5, 10.1);

    group_head.traverse(m => m.castShadow = true);

    return group_head;
}
